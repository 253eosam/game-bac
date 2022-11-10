<template>
  <div id="content" :class="bottom">
    <router-view v-slot="{ Component }">
      <transition name="bounce">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const bottom = ref('')

    watch(() => route.meta?.hasBottom, (hasBottom) => {
      bottom.value = hasBottom ? 'bottom-[30%]' : 'bottom-[0]'
    }, { immediate: true })

    return {
      bottom
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

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
