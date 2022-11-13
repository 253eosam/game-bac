<template>
  <div class="flex h-full w-full">
    <button @click="onClickPositive" class="flex-1 shrink border-r-[.5px]"><img src="@src/assets/o.png" alt="o" class="h-full w-full"></button>
    <button @click="onClickNegative" class="flex-1 shrink border-l-[.5px]"><img src="@src/assets/x.png" alt="x" class="h-full w-full"></button>
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
