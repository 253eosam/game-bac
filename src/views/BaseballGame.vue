<template>
  <div class="relative h-full bg-white p-2 text-center text-black">
    <table class="flex h-full w-full flex-col-reverse overflow-auto border-0">
      <thead class="mt-1">
        <tr v-if="comIsSuccessful" class="block text-center">
          <strong class="congratulation-text">🎉 Congratulations 🎉</strong>
        </tr>
        <tr v-else class="flex">
          <td v-for="i in inputNumber" :key="`input-${i}`" class="flex-1">
            <input
              :data-idx="i - 1"
              ref="inputEls"
              class="w-full cursor-pointer rounded-md border-2 border-black bg-white text-center"
              type="number"
              readonly
              :value="inputs[i - 1]"
              @click="focusInputEl(i - 1)"
            />
          </td>
        </tr>
      </thead>
      <tbody ref="tbodyEl" class="block h-full w-full overflow-auto border">
        <template
          v-for="({ items: board, strike, ball }, bi) in boards"
          :key="`board-${bi}`"
        >
          <tr class="flex w-full">
            <td class="w-full px-5 py-1 text-right">
              <p class="float-left font-serif font-semibold text-green-700">
                {{ bi + 1 }}P
              </p>
              <span class="text-red-600 text-opacity-60"
                >{{ strike }} 스트라이크</span
              >
              &nbsp;/&nbsp;
              <span class="text-blue-600 text-opacity-60">{{ ball }} 볼</span>
            </td>
          </tr>
          <tr class="flex w-full border-b pb-2">
            <td
              v-for="(v, vi) in board"
              :key="`board-${bi}-${vi}`"
              class="flex-1"
            >
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
import useBaseBallGame from "@src/hooks/useBaseballGame"
import { computed, defineComponent, nextTick, onMounted, ref, watch } from "vue"
import { useDeliveryTop } from "../hooks/useDeliveryTop"
import type { NumberPad } from "@src/components/bottom/NumberPad.vue"
import { Nullable } from "../types/global"
import Swal from "sweetalert2"
import { useEasterEgg } from '../store/easterEgg';

export default defineComponent({
  setup() {
    const {
      comBoard: boards,
      getGameStep,
      submit,
      comIsSuccessful,
      getAnswer,
    } = useBaseBallGame()
    const { setData } = useEasterEgg()
    const tbodyEl = ref<Nullable<HTMLTableSectionElement>>(null)
    const inputs = ref<Nullable<number>[]>(Array(getGameStep()).fill(null))
    const inputEls = ref<HTMLInputElement[]>([])
    const focusInputEl = (idx: number) => {
      if (!(0 <= idx && idx < getGameStep())) return
      inputEls.value.forEach((el) =>
        el.classList.remove("bg-yellow-200", "active")
      )
      inputEls.value[idx].classList.add("bg-yellow-200", "active")
    }
    const clearInput = () => inputs.value.fill(null) && focusInputEl(0)
    const autoScroll = () => {
      if (!tbodyEl.value) return

      nextTick(() => {
        tbodyEl.value!.scrollTop = tbodyEl.value!.scrollHeight
      })
    }
    useDeliveryTop((np: NumberPad) => {
      const target = inputEls.value.findIndex((el) =>
        el.classList.contains("active")
      )
      if (target === -1) return

      if (np === "clear") {
        clearInput()
      } else if (np === "submit") {
        try {
          submit(inputs.value)
          clearInput()
          autoScroll()
        } catch (err: any) {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: err.message,
          })
        }
      } else {
        inputs.value[target] = np
        focusInputEl(target + 1)
      }
    })

    onMounted(() => {
      setData(getAnswer())
      if (inputEls.value && 0 < inputEls.value.length) {
        focusInputEl(0)
      }
    })

    watch(comIsSuccessful, (isSuccessful) => {
      if (isSuccessful) {
        const startEl: HTMLButtonElement | null =
          document.querySelector("#startButton")
        const stopEl: HTMLButtonElement | null =
          document.querySelector("#stopButton")
        startEl!.click()
        setTimeout(() => {
          stopEl!.click()
        }, 5000)
      }
    })

    return {
      comIsSuccessful,
      tbodyEl,
      focusInputEl,
      inputs,
      inputEls,
      boards,
      inputNumber: getGameStep(),
    }
  },
})
</script>

<style scoped>
.congratulation-text {
  animation: 2s anim infinite alternate;
}

@keyframes anim {
  0% {
    color: black;
  }
  20% {
    color: blue;
  }
  40% {
    color: green;
  }
  60% {
    color: orange;
  }
  100% {
    color: red;
  }
}
</style>