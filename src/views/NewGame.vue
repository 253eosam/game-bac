<script setup lang="ts">
import { ref } from 'vue'

type TMsg = { type: string, content: string }
const inputValue = ref('')
const messages = ref<TMsg[]>([])
const inputRef = ref<HTMLElement | null>(null)
const ws = new WebSocket("ws://dcbd-124-51-94-139.ngrok-free.app/")

ws.addEventListener("message", (event) => {
  try {
    const parsedMessage = JSON.parse(event.data) as TMsg

    if (parsedMessage.type === "entry") {
      messages.value.push(parsedMessage)
    } else if (parsedMessage.type === "mine") {
      messages.value.push(parsedMessage)
    } else if (parsedMessage.type === "yours") {
      messages.value.push(parsedMessage)
    }

    if (inputRef.value) {
      inputRef.value.scrollTop = inputRef.value.scrollHeight
    }
  } catch (error) {
    console.error("Error parsing JSON:", error)
  }
})

function sendMessage() {
  const message = inputValue.value

  // 입력한 메시지를 객체로 변환하여 전송
  ws.send(JSON.stringify({ content: message }))

  inputValue.value = ""
}

const handleInputKeypress = (e: any) => {
  console.log(inputValue.value);
  sendMessage()
}
</script>

<template>
  <div class="flex flex-col items-start p-5 h-full">
    <div class="border border-red-500 p-4 flex flex-col h-2/3 overflow-auto relative w-full">
      <div ref="inputRef">
        <p v-for="(message, idx) in messages" :key="idx" :class="`border-${message.type === 'mine' ? 'blue' : 'red'}-300`" class="border rounded-md p-2 mb-3">{{  message?.content ?? '' }}</p>
      </div>
    </div>
    <div class="mt-4 w-full">
        <input class="text-black  block" type="text" v-model="inputValue" @keydown.enter="handleInputKeypress">
    </div>
  </div>
</template>

<style></style>
