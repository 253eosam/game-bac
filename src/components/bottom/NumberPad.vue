<template>
  <ul class="w-full flex flex-col p-2">
    <li v-for="(row, y) in pad" :key="`row-${y}`" class="flex-1 flex items-center">
      <button v-for="(v, x) in row" :key="`col-${x}`" class="active:scale-90 transition-transform border-4 mx-2 h-3/4 border-gray-300 rounded-full flex-1 " @click="onClick(v)">
        {{ v }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const pad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['clear', 0, 'submit']] as const
export type NumberPad = typeof pad[number][number]
export default defineComponent({
  setup(_, { emit }) {
    const deliveryTop = (payload: NumberPad) => {
      emit('deliveryTop', payload)
    }

    return {
      pad,
      onClick(v: NumberPad) {
        deliveryTop(v)
      },
    }
  },
})
</script>
