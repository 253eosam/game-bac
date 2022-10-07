<template>
  <div class="w-full h-full relative">
    <h1 class="py-4 absolute top-6 w-full">SCORE BOARD</h1>
    <table class="absolute flex flex-col-reverse top-[30%] left-2 right-2 bottom-2 border-0" @keyup.enter="onSubmit">
      <thead class="block w-full">
        <tr class="flex w-full">
          <td v-for="i in INPUT_COUNT" :key="`input-${i}`" class="flex-1">
            <input ref="inputEls" class="border-black border-2 text-center rounded-md w-full" type="number" v-model.number="inputs[i - 1]" @input="onInput(i - 1)" />
          </td>
        </tr>
      </thead>
      <tbody class="block w-full h-5/6 mt-2 overflow-auto border py-2 mb-2">
        <template v-for="(board, bi) in boards" :key="`board-${bi}`">
          <tr class="flex w-full">
            <td v-for="(v, vi) in board" :key="`board-${bi}-${vi}`" class="flex-1">
              <span class="font-semibold">
                {{ v }}
              </span>
            </td>
          </tr>
          <tr class="flex w-full border-b mb-2 last:border-b-0">
            <td class="px-5 w-full text-right">
              <span class="text-opacity-60 text-red-600">{{ bi }} 스트라이크</span> &nbsp;/&nbsp;
              <span class="text-opacity-60 text-blue-600">{{ bi + 1 }} 볼</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
const DEFAULT_GAME_STEP = 4

export default defineComponent({
  setup() {
    const inputEls = ref<HTMLInputElement[]>([])
    const inputs = ref<number[]>(Array(DEFAULT_GAME_STEP).fill(null))
    const boards = ref<number[][]>([])
    const { currentRoute } = useRouter()
    const gameStep = ref<number>(DEFAULT_GAME_STEP)

    const comAnswer = computed(() => {
      const numbers = [0,1,2,3,4,5,6,7,8,9]
      return Array(gameStep.value)
        .fill(null)
        .map(() => numbers.splice(Math.floor(Math.random() * 10) % numbers.length))
    })

    onMounted(() => {
      focusFirstInput()
    })

    onBeforeMount(() => {
      gameStep.value = Number(currentRoute.value.query.gameStep) ?? DEFAULT_GAME_STEP
      console.log('[🚀 253eosam] |  file: GameInProgress.vue |  line 56 |  onBeforeMount |  gameStep.value', gameStep.value)
    })

    function focusFirstInput() {
      if (inputEls.value) {
        inputEls.value[0].focus()
      }
    }
    function clearInputs() {
      inputs.value = Array(gameStep.value).fill(null)
    }

    return {
      INPUT_COUNT: computed(() => gameStep.value),
      inputs,
      inputEls,
      boards,
      onSubmit() {
        console.log("[🚀 253eosam] |  file: GameInProgress.vue |  line 78 |  onSubmit |  comAnswer", comAnswer)
        if (inputs.value.includes(null as any)) {
          alert('모든 입력란을 채워주세요.')
          return
        }
        boards.value.push([...inputs.value])
        clearInputs()
        focusFirstInput()
      },
      onInput(idx: number) {
        const value = String(inputs.value[idx])
        if (!value) return
        inputs.value[idx] = parseInt(value.charAt(0))
      }
    }
  },
})
</script>

<style>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
