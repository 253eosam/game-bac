<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    return {
      info () {
        const gameInfo = `
          1. 숫자야구 게임은 1부터 9까지 서로 다른 숫자로 이루어진 단계별로 N자리의 수를 맞추는 게임입니다.
          2. 같은 숫자가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 숫자가 전혀 없으면 낫싱입니다.
          3. 단계별로 N개의 숫자를 모두 맞히면 게임이 끝나고, 게임을 새로 시작하려면 상단의 새로고침 버튼을 클릭하세요.
          4. 게임을 새로 시작하면 새로운 숫자가 정해집니다.
        `
        alert(gameInfo)
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
