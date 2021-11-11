export default function (Alpine) {
  window.__persistedStores = {};
  Alpine.persistedStore = function (name, value, storage = localStorage) {
    let stored = storage.getItem(`__store_${name}`);

    value = [null, undefined].includes(stored) ? value : getValue(value, stored);

    Alpine.store(name, value);

    window.__persistedStores[name] = Alpine.effect(() => {
      const json = JSON.stringify(Alpine.store(name));
      storage.setItem(`__store_${name}`, json);
    });
  };
}

function getValue(value, stored) {
  const storedValue = JSON.parse(stored);
  if (typeof storedValue !== 'object') return storedValue;

  const diff = Object.entries(storedValue).reduce((acc, [key, val]) => {
    if (!storedValue.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(value, key).get) return acc;
    acc[key] = val;
    return acc;
  }, {});

  return Object.assign(value, diff);
}
