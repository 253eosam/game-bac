<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useRouter } from 'vue-router'
  import useGameStep from '../hooks/useGameStep'

export default defineComponent({
  setup() {
    const { push } = useRouter()
    const { getGameStep, upGameStep, downGameStep } = useGameStep()
    


    return {
      gameStep: computed(() => getGameStep()),
      upGameStep, downGameStep,
      onStartGame () {
        push({ path: '/in-progress', query: { gameStep: getGameStep() } })
      },
    }
  }
})

</script>

<template>
  <div class="w-full my-center">
    <h1 class="mb-[100px] mt-[-100px]">야구공 찾기</h1>
    <div class="flex w-[80%] mx-auto border-2 rounded-xl border-black p-1">
      <button @click="downGameStep" class="p-0 bg-white flex-2 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>
      <input type="number" readonly name="gameStep" class="w-0 flex-1 outline-0 text-center bg-white" :value="gameStep"/>
      <button @click="upGameStep" class="bg-white p-0 flex-2 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
    <div class="mt-4">
      <button  @click="onStartGame" class="m-[3px]  text-white bg-black hover:bg-gray-800">START .. !</button>
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
</style>
