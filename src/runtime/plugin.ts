import { defineNuxtPlugin } from '#app'
import anime from 'animejs'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide("anime", anime)
  return {
    provide: {
      anime
    }
  }
})
