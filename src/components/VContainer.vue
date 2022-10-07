<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="h-[32rem] bg-white rounded-lg">
      <router-view class="absolute center-absolute " />
    </div>
  </div>
</template>

<style>
.container {
  position: relative;
}

.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
