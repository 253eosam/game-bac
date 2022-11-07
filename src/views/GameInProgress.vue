<template>
  <div class="w-full h-full relative">
    <h1 class="py-4 absolute top-2 w-full text-base font-serif">SCORE BOARD</h1>
    <table class="absolute flex flex-col-reverse top-[5%] left-2 right-2 bottom-2 border-0">
      <thead class="block w-full">
        <tr class="flex w-full">
          <td v-for="i in INPUT_COUNT" :key="`input-${i}`" class="flex-1">
            <input ref="inputEls" class="bg-white border-black border-2 text-center rounded-md w-full" type="number" v-model.number="inputs[i - 1]" @input="onInput(i - 1)" />
          </td>
          <td class="flex-1">
            <input class="border-black border-2 text-center rounded-md w-full bg-black text-white font-semibold hover:bg-gray-800 cursor-pointer" @click="onSubmit" type="button" value="Shoot" />
          </td>
        </tr>
      </thead>
      <tbody ref="tbodyEl" class="block w-full h-5/6 mt-2 overflow-auto border mb-2">
        <template v-for="(board, bi) in boards" :key="`board-${bi}`">
          <tr class="flex w-full">
            <td class="px-5 py-1 w-full text-right">
              <p class="font-semibold font-serif text-green-700 float-left">{{ bi + 1 }}P</p>
              <span class="text-opacity-60 text-red-600">{{ board.strike }} 스트라이크</span> &nbsp;/&nbsp;
              <span class="text-opacity-60 text-blue-600">{{ board.ball }} 볼</span>
            </td>
          </tr>
          <tr class="flex w-full pb-2 border-b last:border-b-0">
            <td v-for="(v, vi) in board.arr" :key="`board-${bi}-${vi}`" class="flex-1">
              <span class="font-semibold">
                {{ v }}
              </span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, onBeforeMount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { isEqual } from 'lodash/fp'

interface Board {
  isSuccess: boolean
  strike: number
  ball: number
  arr: number[]
}

const DEFAULT_GAME_STEP = 4
const GAME_LIFE = 10

export default defineComponent({
  setup() {
    const inputEls = ref<HTMLInputElement[]>([])
    const inputs = ref<number[]>(Array(DEFAULT_GAME_STEP).fill(null))
    const boards = ref<Board[]>([])
    const { currentRoute } = useRouter()
    const gameStep = ref<number>(DEFAULT_GAME_STEP)
    const cnt = ref(0)
    const tbodyEl = ref()

    const comAnswer = computed(() => {
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      return Array.from(Array(gameStep.value), () => numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0])
    })

    onMounted(() => {
      focusFirstInput()
    })

    onBeforeMount(() => {
      gameStep.value = Number(currentRoute.value.query.gameStep) ?? DEFAULT_GAME_STEP
    })

    function focusFirstInput() {
      if (inputEls.value) {
        inputEls.value[0].focus()
      }
    }
    function clearInputs() {
      inputs.value = Array(gameStep.value).fill(null)
    }
    function autoScroll() {
      nextTick(() => {
        tbodyEl.value.scrollTop = tbodyEl.value.scrollHeight
      })
    }

    return {
      INPUT_COUNT: computed(() => gameStep.value),
      inputs,
      inputEls,
      boards,
      tbodyEl,
      onSubmit() {
        if (inputs.value.includes(null as any)) {
          alert('모든 입력란을 채워주세요.')
          return
        }

        cnt.value++
        const isSuccess = isEqual(comAnswer.value, inputs.value)

        boards.value.push({
          isSuccess,
          strike: inputs.value.filter((v, i) => v === comAnswer.value[i]).length,
          ball: inputs.value.filter((v, i) => v !== comAnswer.value[i] && comAnswer.value.includes(v)).length,
          arr: [...inputs.value],
        })

        if (isSuccess) {
          alert(`정답입니다. ${cnt.value}번 만에 맞추셨습니다. 🎉`)
          return
        }

        autoScroll()
        clearInputs()
        focusFirstInput()
      },
      onInput(idx: number) {
        const value = String(inputs.value[idx])
        if (!value) return
        inputs.value[idx] = parseInt(value.charAt(0))
      },
    }
  },
})
</script>

<style scoped>

</style>
