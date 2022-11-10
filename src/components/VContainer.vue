<template>
  <div id="container" class="transition-height duration-500 ease-in-out">
    <VModalVue />
    <div id="wrap" class="relative">
      <VHeader />
      <VContentVue />
      <VBottom v-if="hasBottom"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import VBottom from './VBottom.vue'
import VContentVue from './VContent.vue'
import VHeader from './VHeader.vue'
import VModalVue from './VModal.vue'

const calcInitHeight = () => {
  const applyHeight = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  applyHeight()
  window.addEventListener('resize', applyHeight)
}

export default defineComponent({
  components: {
    VHeader,
    VBottom,
    VContentVue,
    VModalVue
  },
  setup() {
    const route = useRoute()
    
    onBeforeMount(() => {
      calcInitHeight()
    })
    return {
      hasBottom: computed(() => {
        return route.meta?.hasBottom ?? false
      })
    }
  },
})
</script>

<style>
#container {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
#wrap {
  width: 100%;
  height: 100%;
}
</style>