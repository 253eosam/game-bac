<template>
  <div class="w-full border-white border-2 p-2 rounded-md">
    <VHeader />
    <VContainer />
  </div>
</template>

<script lang="ts">
import VHeader from './components/VHeader.vue'
import VContainer from './components/VContainer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    VContainer,
    VHeader,
  },
  setup() {
    
  },
})
</script>

