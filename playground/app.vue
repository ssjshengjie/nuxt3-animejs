<template>
  <div class="title">
    Nuxt module playground!
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { onMounted } from 'vue'
const { $anime } = useNuxtApp()
onMounted(() => {
  $anime()({
    targets: '.title',
    left: '240px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad'
  })
})
</script>
