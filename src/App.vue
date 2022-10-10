<template>
  <div class="app-wrap">
    <VContainer />
  </div>
</template>

<script lang="ts">
import VContainer from './components/VContainer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    VContainer,
  },
  setup() {
    
  },
})
</script>

<style>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>