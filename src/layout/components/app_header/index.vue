
<template>
  <header>
    <nav class="gnb">
      <InfoIcon />
    </nav>
  </header>
</template>

<script setup lang="ts">
import InfoIcon  from '@src/components/icons/InfoIcon.vue'

</script>

<style scoped>
.gnb {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>