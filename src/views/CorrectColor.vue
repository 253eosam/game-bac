<template>
  <div class="h-full">
    <div v-if="comFlag" class="flex justify-center items-center h-full">
      <p>comFlag :: {{ comFlag }}</p>
      <p>comTime :: {{ comTime }}</p>
      <p>comPoint :: {{ comPoint }}</p>
    </div>
    <div v-else class="flex justify-center items-center h-full">
      <button class="p-10 font-mono text-[300px]" @click="play">play</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useDeliveryTop } from "@src/hooks/useDeliveryTop"
import { defineComponent } from "vue"
import useCorrectColorGame from "../hooks/useCorrectColorGame"

export default defineComponent({
  setup() {
    const { eachColor, submit, comFlag, comTime, comPoint, next, play } = useCorrectColorGame()

    useDeliveryTop((ox: "O" | "X") => {
      console.log(ox)
      submit(ox)
      next()
    })

    return {
      play,
      comFlag,
      comTime,
      comPoint,
      eachColor,
    }
  },
})
</script>
