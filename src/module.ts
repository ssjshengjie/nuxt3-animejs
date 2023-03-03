import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-animejs',
    configKey: 'animejs',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
