<script setup lang="ts">
import { useRouter } from 'vue-router'
const { push } = useRouter()
function startGame() {
  push('/in-progress')
}
</script>

<template>
  <button @click="startGame" class="start-btn bg-indigo-500 hover:bg-indigo-600 text-white">
    START .. !
  </button>
</template>

<style>
.start-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
