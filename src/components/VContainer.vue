<template>
  <div id="container">
    <VModalVue />
    <div id="wrap" class="relative">
      <VHeader />
      <VContentVue />
      <VBottom v-if="hasBottom"/>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import VBottom from './VBottom.vue'
import VContentVue from './VContent.vue'
import VHeader from './VHeader.vue'
import VModalVue from './VModal.vue'

export default defineComponent({
  components: {
    VHeader,
    VBottom,
    VContentVue,
    VModalVue
  },
  setup() {
    const route = useRoute()

    return {
      hasBottom: computed(() => {
        return route.meta?.hasBottom ?? false
      })
    }
  },
})
</script>

<style scoped>
#container, #wrap {
  width: 100%;
  height: 100%;
}
</style>