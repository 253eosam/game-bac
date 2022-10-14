<template>
  <div class="w-full relative">
    <h1 class="py-4 absolute top-2 w-full text-base font-serif">SCORE BOARD</h1>
    <table class="absolute flex flex-col-reverse top-[5%] left-2 right-2 bottom-2 border-0" @keyup.enter="onSubmit">
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
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const boards = ref([
      { arr: [1, 2, 3, 4], strike: 0, ball: 0, isSuccess: false },
      { arr: [1, 2, 3, 4], strike: 0, ball: 0, isSuccess: false },
      { arr: [1, 2, 3, 4], strike: 0, ball: 0, isSuccess: false },
      { arr: [1, 2, 3, 4], strike: 0, ball: 0, isSuccess: false },
      { arr: [1, 2, 3, 4], strike: 0, ball: 0, isSuccess: false },
      { arr: [1, 2, 3, 4], strike: 0, ball: 0, isSuccess: false },
      { arr: [1, 2, 3, 4], strike: 0, ball: 0, isSuccess: false },
      { arr: [1, 2, 3, 4], strike: 0, ball: 0, isSuccess: false },
    ])

    return {
      boards,
    }
  },
})
</script>
