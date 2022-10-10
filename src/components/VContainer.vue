<template>
  <div class="container">
    <input type="checkbox" id="toggle" v-model="toggle">
    <div id="wrap">
      <VHeader />
      <VContentVue />
      <VBottom />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VBottom from './VBottom.vue'
import VContentVue from './VContent.vue'
import VHeader from './VHeader.vue'
export default defineComponent({
  components: {
    VHeader,
    VBottom,
    VContentVue
  },
  setup() {
    const toggle = ref(false)

    return {
      toggle,
    }
  },
})
</script>


<style scoped>
/* 토글 */
#toggle { display: none; }
#toggle + #wrap > #toggle_gnb_wrap { display: none; }
#toggle:checked + #wrap > #toggle_gnb_wrap { display: block; }

</style>