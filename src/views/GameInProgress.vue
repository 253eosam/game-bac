<script setup lang="ts">
<<<<<<< HEAD
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
=======
import { ref, watch } from 'vue'
const INPUT_COUNT = 3
const inputs = ref(Array(INPUT_COUNT).fill(null))

const inputEls = ref<HTMLInputElement[]>()
function onInput (evt: any, index: number) {
  const value = evt.data
  if (!value) return
  inputs.value[index] = inputOnlyNumber(value)
  if (isNaN(value)) return
  focusNextInputEl()

  function focusNextInputEl () {
    if (index < INPUT_COUNT - 1) {
      inputEls.value![index + 1].focus()
    }
  }
  function inputOnlyNumber (value: string) {
    return value.replace(/[^0-9]/g, '')
  }
}

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
        class="border-black border-2 rounded-md text-center font-bold text-xl w-20 h-8 mx-10"
        ref="inputEls"
        type="text"
        maxlength="1"
        v-for="i in INPUT_COUNT" 
        :key="`input-${i}`" 
        v-model="inputs[i - 1]" 
        @input="onInput($event, i-1)"
      />
    </div>
    {{ inputs }}
>>>>>>> 9129df5040c1f81764d1d6ec7cf2a7806229789b
  </div>
</template>

<style>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
