<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    return {
      info () {
        const infoComment = `
          1. 게임이 시작되면 임의의 숫자 4(스텝마다 다름)개가 생성됩니다.
          2. 입력창에 숫자를 입력하여 게임을 진행합니다.
          3. 스트라이크의 경우 입력한 숫자와 위치가 일치합니다.
          4. 볼의 경우 입력한 숫자는 일치하지만 위치가 일치하지 않습니다.
          5. 각 게임마다 10번의 기회가 주어집니다.
          6. 10번의 기회안에 정답을 맞추지 못하면 게임이 종료됩니다.
          7. 정답을 맞추면 게임이 종료됩니다.
        `
        alert(infoComment)
      },
      refresh() {
        if (router.currentRoute.value.name === 'ready') {
          router.go(0)
        } else {
          router.push({ path: '/' })
        }
      }
    }
  },
})
</script>

<template>
  <div class="v-header w-full bg-black rounded-lg py-2 leading-none">
    <button class="p-0 bg-white text-black float-left mx-1" @click="info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    </button>

    <button class="p-0 bg-white text-black float-right mx-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <button class="p-0 bg-white text-black float-right mx-1" @click="refresh">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.v-header::after {
  content: '';
  display: block;
  clear: both;
}
</style>
