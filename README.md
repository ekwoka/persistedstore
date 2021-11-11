<h1 align="center">Welcome to @ekwoka/persistedstore 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@ekwoka/persistedstore"><img src="https://badge.fury.io/js/@ekwoka%2Fpersistedstore.svg" alt="npm version" height="18"></a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Simple Tool for having Alpine Stores persist across pages and sessions. This is based on @ryangjchandler/fern with a few improvements.

## Install

```sh
npm i @ekwoka/persistedstore
```

## Usage

Import and install persistedStore to your bundle with AlpineJS:
```js
import Alpine from 'alpinejs';
import persistedStore from '@ekwoka/persistedstore';

Alpine.plugin(persistedStore);
Alpine.start();
```

Use wherever you would a conventional Alpine Store:

```js
Alpine.persistedStore('darkMode',false);
```

Refer in the same way you would a normal store:
```html
<button @click="$store.darkMode=true">🌙</button>
```

This version of persistedStore supports all primitive types, arrays, and objects. It also supports `getters` in the Store Object.

## Author

👤 **Eric Kwoka**

* Website: http://thekwoka.net
* Github: [@ekwoka](https://github.com/ekwoka)

## Show your support

Give a ⭐️ if this project helped you!