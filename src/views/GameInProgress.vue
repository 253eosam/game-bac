<script setup lang="ts">
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
  </div>
</template>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
