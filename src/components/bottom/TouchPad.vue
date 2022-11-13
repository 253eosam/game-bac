<template>
  <div class="flex h-full w-full">
    <button @click="onClickPositive" class="transition-transform active:scale-90 flex-1 shrink"><img draggable="false" src="@src/assets/o.png" alt="o" class="h-full w-full"></button>
    <div class="border border-white"></div>
    <button @click="onClickNegative" class="transition-transform active:scale-90 flex-1 shrink"><img draggable="false" src="@src/assets/x.png" alt="x" class="h-full w-full"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export type OX = 'O' | 'X'
export default defineComponent({
  setup(_, { emit }) {
    const deliveryTop = (payload: OX) => emit('deliveryTop', payload)

    return {
      onClickPositive() {
        deliveryTop('O')
      },
      onClickNegative() {
        deliveryTop('X')
      }
    }
  },
})
</script>
