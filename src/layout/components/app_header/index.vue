
<template>
  <header>
    <nav class="gnb flex bg-primary">
      <div>
        <button class="p-1" @click="onClick" >
          <InfoIcon />
        </button>
        <button class="p-1" @click="onClick" >
          <RefreshIcon />
        </button>
        <button class="p-1" @click="onClick" >
          <HomeIcon />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import InfoIcon  from '@src/components/icons/InfoIcon.vue'
import RefreshIcon  from '@src/components/icons/RefreshIcon.vue'
import HomeIcon  from '@src/components/icons/HomeIcon.vue'

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