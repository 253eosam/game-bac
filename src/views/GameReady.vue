<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const { push } = useRouter()
const MIN_GAME_STEP = 3
const MAX_GAME_STEP = 5
const gameStep = ref<number>(4)
const myInputEl = ref<HTMLInputElement>()
const myBtnEl = ref<HTMLButtonElement>()

watch(gameStep, (newValue: number) => {
  if (newValue !== 4) {
    alert('준비중입니다.. 스텝 4에서만 게임해 주세요. 😅')
    gameStep.value = 4
    return
  }
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
    <h1 class="mb-[100px] mt-[-100px]">Baseball Game</h1>
    <div class="inline-block border-2 rounded-xl border-black">
      <input type="number" name="gameStep" class="my-input mr-[-3px] w-[200px] py-1 text-center rounded" v-model.number="gameStep" />
      <button  @click="startGame" class="m-[3px]  text-white bg-black hover:bg-gray-800">START .. !</button>
    </div>
  </div>
</template>

<style scoped>
.my-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 768px) {
  .my-input {
    width: 100px;
  }
}
</style>
