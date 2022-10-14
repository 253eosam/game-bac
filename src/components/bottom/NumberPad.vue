<template>
  <ul class="w-full flex flex-col p-2">
    <li v-for="(row, y) in pad" :key="`row-${y}`" class="flex-1 flex items-center">
      <button v-for="(val, x) in row" :key="`col-${x}`" class="border mx-2 h-3/4 border-gray-300 rounded-full flex-1" @click="onClick(val)">
        {{ val }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBottom } from '@src/store/bottomSide'

export default defineComponent({
  setup() {
    const { submit } = useBottom()
    return {
      pad: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['C', 0, '⚾︎'],
      ],
      onClick (val: number | string) {
        switch(val) {
          case "1": submit(1); break
          case "2": submit(2); break
          case "3": submit(3); break
          case "4": submit(4); break
          case "5": submit(5); break
          case "6": submit(6); break
          case "7": submit(7); break
          case "8": submit(8); break
          case "9": submit(9); break
          case "0": submit(0); break
          case "C": submit('clear'); break
          case "⚾︎": submit('submit'); break
        }
      }
    }
  },
})
</script>
