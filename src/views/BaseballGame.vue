<template>
  <div class="h-full p-2 bg-white relative text-black text-center">
    <table class="w-full h-full overflow-auto border-0 flex flex-col-reverse">
      <thead class="mt-1">
        <tr class="flex">
          <td v-for="i in inputNumber" :key="`input-${i}`" class="flex-1">
            <input :data-idx="i - 1" ref="inputEls" class="bg-white border-black border-2 text-center cursor-pointer rounded-md w-full" type="number" readonly :value="inputs[i - 1]" @click="focusInputEl(i - 1)" />
          </td>
        </tr>
      </thead>
      <tbody ref="tbodyEl" class="block w-full h-full overflow-auto border">
        <template v-for="({ items: board, strike, ball }, bi) in boards" :key="`board-${bi}`">
          <tr class="flex w-full">
            <td class="px-5 py-1 w-full text-right">
              <p class="font-semibold font-serif text-green-700 float-left">{{ bi + 1 }}P</p>
              <span class="text-opacity-60 text-red-600">{{ strike }} 스트라이크</span> &nbsp;/&nbsp;
              <span class="text-opacity-60 text-blue-600">{{ ball }} 볼</span>
            </td>
          </tr>
          <tr class="flex w-full pb-2 border-b last:border-b-0">
            <td v-for="(v, vi) in board" :key="`board-${bi}-${vi}`" class="flex-1">
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
import useBaseBallGame from '@src/hooks/useBaseballGame'
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { useDeliveryTop } from '../hooks/useDeliveryTop'
import type { NumberPad } from '@src/components/bottom/NumberPad.vue'
import { Nullable } from '../types/global'

export default defineComponent({
  setup() {
    const { comBoard: boards, getGameStep, submit, comIsSuccessful, getAnswer } = useBaseBallGame()
    const inputs = ref<Nullable<number>[]>(Array(getGameStep()).fill(null))
    const inputEls = ref<HTMLInputElement[]>([])
    const focusInputEl = (idx: number) => {
      if (!(0 <= idx && idx < getGameStep())) return
      inputEls.value.forEach((el) => el.classList.remove('bg-yellow-200', 'active'))
      inputEls.value[idx].classList.add('bg-yellow-200', 'active')
    }
    const clearInput = () => inputs.value.fill(null) && focusInputEl(0)

    useDeliveryTop((np: NumberPad) => {
      const target = inputEls.value.findIndex((el) => el.classList.contains('active'))
      if (target === -1) return

      if (np === 'clear') {
        clearInput()
      } else if (np === 'submit') {
        try {
          submit(inputs.value)
          clearInput()
        } catch (err: any) {
          alert(err.message)
        }
      } else {
        inputs.value[target] = np
        focusInputEl(target + 1)
      }
    })

    onMounted(() => {
      if (inputEls.value && 0 < inputEls.value.length) {
        focusInputEl(0)
      }
    })

    watch(comIsSuccessful, (isSuccessful: boolean) => {
      if (isSuccessful) {
        alert('성공!')
      }
    })

    return {
      focusInputEl,
      inputs,
      inputEls,
      boards,
      inputNumber: getGameStep(),
    }
  },
})
</script>
