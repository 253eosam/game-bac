<script setup lang="ts">
import { ref } from 'vue'
const INPUT_COUNT = 4
const inputs = ref(Array(4).fill(null))
</script>

<template>
  <div class="w-full h-full relative ">
    <h1 class="py-4 absolute top-10 w-full">SCORE BOARD</h1>
    <table class="absolute flex flex-col-reverse  top-[40%] left-2 right-2 bottom-2  border-0">
      <thead class="block w-full" >
        <tr class="flex w-full">
          <td v-for="i in INPUT_COUNT" :key="`input-${i}`" class="flex-1">
            <input class="border-black border-2 text-center rounded-md " type="number" v-model="inputs[i - 1]" />
          </td>
        </tr>
      </thead>
      <tbody class="block w-full h-5/6 mt-2 overflow-auto">
        <tr v-for="i in 30" :key="i" class="">
          <td class="w-1/4">1</td>
          <td class="w-1/4">1</td>
          <td class="w-1/4">1</td>
          <td class="w-1/4">1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
