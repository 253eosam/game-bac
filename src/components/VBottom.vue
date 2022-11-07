<template>
  <div class="bottom">
    <router-view name="bottom" @deliveryTop="deliveryTop"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getCurrentInstance } from 'vue'

export default defineComponent({
  setup() {
    const internalInstance = getCurrentInstance()
    const emitter = internalInstance?.appContext.config.globalProperties.emitter

    return {
      deliveryTop(payload: any) {
        emitter.emit('deliveryTop', payload)
      }
    }
  },
})
</script>

<style scoped>
.bottom {
    position: absolute;
    display: flex;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 30%;
    background: #000;
    border-top: 1px solid #ccc;
    padding-bottom: 4px;
}
</style>