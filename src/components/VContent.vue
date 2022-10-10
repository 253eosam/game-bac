<template>
  <div id="content" :class="bottom">
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()

    const hasBottom = computed(() => {
      return route.meta?.hasBottom ?? false
    })

    return {
      bottom: hasBottom ? 'bottom-[30%]' : 'bottom-[0]'
    }
  },
})
</script>

<style scoped>
#content {
  position: absolute;
  top: 41px;
  left: 0;
  right: 0;
}
</style>
