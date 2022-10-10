<template>
  <div v-if="store.toggle">
    <div id="modal-box">
      <div class="head"></div>
      <component id="modal--box" :is="store.getComponent"></component>
    </div>
    <label id="modal-bg" for="modal-status" />
  </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue'
import { useModalStore } from '../store/modal'

export default defineComponent({
  setup() {
    const store = useModalStore()
    
    return {
      store,
    }
  },
})
</script>

<style scoped>
#toggle {
  position: fixed;
  top: 50px;
  /* display: none; */
}
#modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: #ddd;
  opacity: 0.6;
  z-index: 100;
}
</style>
