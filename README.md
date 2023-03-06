<h1 align="center">Nuxt3 Animejs</h1>

<p align="center">Anime.js module for Nuxt3.</p>

## Features

- Helps you integrate `Anime.js` javascript animation library
- Allows you to easily animate elements via custom `v-anime` directive 🔥
- Provides a solution for global use via `const { $anime } = useNuxtApp();$anime(api)` 🤩
- `Zero-config` setup ready to go 🚀

## Quick Start

1. Install `nuxt3-animejs` dependency to your project

```bash
npm install --save-dev nuxt3-animejs # or yarn add -D nuxt3-animejs
```

2. Enable `nuxt-animejs` in the `module` section

```js
// nuxt.config.js
export default defineNuxtConfig({
  modules:["nuxt3-animejs"]
})
```

That's it! Start developing your app!

### Thanks

This project uses [Nuxt Animejs](https://github.com/ivodolenc/nuxt-animejs) for reference. Thank you very much for the author [Ivo Dolenc](https://github.com/ivodolenc) and for giving the project start

The nuxt2 project can go to this place and also [Nuxt Animejs](https://github.com/ivodolenc/nuxt-animejs)  hope to give the author start

Thank you very much for open source 

Welcome to pr and issue

## Basic

```html
<!-- index.vue -->

<template>
  <div class="title">
    Nuxt module Nuxt3-animejs!
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { onMounted } from 'vue'
const { $anime } = useNuxtApp()
onMounted(() => {
  $anime({
    targets: '.title',
    left: '240px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad'
  })
})
</script>
```

## License

**Anime.js**

[MIT License](https://github.com/juliangarnier/anime/blob/master/LICENSE.md)

Copyright (c) Julian Garnier

**Nuxt3 Animejs Module**

[MIT License](LICENSE)

Copyright (c) [carllyssj](https://github.com/ssjshengjie)
