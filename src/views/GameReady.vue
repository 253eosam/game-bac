<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const { push } = useRouter()
const MIN_GAME_STEP = 3
const MAX_GAME_STEP = 5
const gameStep = ref<number>(4)

watch(gameStep, (newValue: number) => {
  if (newValue < MIN_GAME_STEP) {
    alert('게임 스텝은 3 이상이어야 합니다.')
    gameStep.value = MIN_GAME_STEP
    return
  }
  if (newValue > MAX_GAME_STEP) {
    alert('게임 스텝은 5 이하여야 합니다.')
    gameStep.value = MAX_GAME_STEP
    return
  }
})

function startGame() {
  push({ path: '/in-progress', query: { gameStep: gameStep.value } })
}
</script>

<template>
<div class="w-full my-center">
  <input type="number" name="gameStep" class="border w-[100px] px-2 py-1 mx-5 text-center rounded" v-model.number="gameStep"/>
  <button @click="startGame" class=" bg-indigo-500 hover:bg-indigo-600 text-white">
    START .. !
  </button>
</div>
</template>

<style>
.my-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
