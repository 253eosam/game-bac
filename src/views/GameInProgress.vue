<script setup lang="ts">
import { ref } from 'vue'
const INPUT_COUNT = 4
const inputs = ref(Array(4).fill(''))
</script>

<template>
  <div>
    <div>
      <h1>score board</h1>
      <ol class="overflow-scroll h-80">
        <li
          v-for="i in 101"
          :key="i"
        >{{ i }}</li>
      </ol>
    </div>
    <div>
      <input 
        class="border-black border-2 rounded-md"
        type="number" 
        v-for="i in INPUT_COUNT" 
        :key="`input-${i}`" 
        v-model="inputs[i - 1]" 
      />
    </div>
    {{ inputs }}
  </div>
</template>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
