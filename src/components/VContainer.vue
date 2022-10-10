<template>
  <div class="container">
    <VModalVue />
    <div id="wrap">
      <VHeader />
      <VContentVue />
      <VBottom />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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

  },
})
</script>

