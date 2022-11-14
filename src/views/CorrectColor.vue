<template>
  <div class="correct-color h-full relative">
    <div v-if="comFlag" class="h-full">
      <p class="absolute top-2 right-2 text-[1.5rem] text-green-500 font-bold">{{ comPoint }} Point</p>
      <strong class="absolute text-[20rem] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" :style="{ 'color': paintColorText }"> {{ showColorText }} </strong>
      <div class="absolute left-2 right-2 bottom-5 flex">
        <progress class="mx-2" min="0" :max="TIME_LIMIT" :value="comTime" />
        <span class="inline-block w-8 mr-3 font-bold" :class="{ 'text-red-500': lastTime <= 10 }">{{ lastTime }}s</span>
      </div>
    </div>
    <div v-else class="flex flex-col justify-center items-center h-full">
      <button class="transition-transform hover:scale-110 border-white border-4 px-14 py-5 rounded-full font-mono text-9xl" @click="play">START</button>
      <strong v-show="0 < comPoint" class="text-green-500 font-bold text-[5rem]">{{ comPoint }} Point</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { useDeliveryTop } from "@src/hooks/useDeliveryTop"
import { computed, defineComponent, ref } from "vue"
import useCorrectColorGame from "../hooks/useCorrectColorGame"
import delay from '../utils/useDelay';

export default defineComponent({
  setup() {
    const { TIME_LIMIT, eachColor, submit, comFlag, comTime, comPoint, next, play } = useCorrectColorGame()
    const disableDisplay = ref(false)

    const doFlagDisplay = async () => {
      const crtColor = document.querySelector('.correct-color')
      const disableDisplayCss = ['pointer-events-none', 'opacity-50']
      disableDisplay.value = true
      crtColor?.classList.add(...disableDisplayCss)
      await delay(1000)
      crtColor?.classList.remove(...disableDisplayCss)
      disableDisplay.value = false
    }

    useDeliveryTop(async (ox: "O" | "X") => {
      if (!comFlag.value || disableDisplay.value) return
      const check = submit(ox)
      if (!check) { await doFlagDisplay() }
      next()
    })

    return {
      TIME_LIMIT,
      play,
      comFlag,
      lastTime: computed(() => Math.floor((TIME_LIMIT - comTime.value) / 1000)),
      comTime,
      comPoint,
      showColorText: computed(() => eachColor.value.randomColorKor),
      paintColorText: computed(() => eachColor.value.randomColorEng),
    }
  },
})
</script>

<style scoped>
progress {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 20px;
}
progress::-webkit-progress-bar {
  background:#f0f0f0;
  border-radius:10px;
  box-shadow: inset 3px 3px 10px #ccc;
}
progress::-webkit-progress-value {
  border-radius:10px;
  background: #1D976C;
  background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);
  background: linear-gradient(to right, #93F9B9, #1D976C);
}
</style>