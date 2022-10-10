<template>
  <div class="absolute flex w-full">
    <div class="card w-10 h-10 rounded border-y flex-1 hover:shadow-lg my-5 cursor-pointer origin-center hover:h-[130px]"
      :class="`border-${COLORS[0]}-500 hover:shadow-${COLORS[0]}-500`"
    >
      <p class="title text-center leading-10">야구공 맞추기</p>
      <p class="subtitle px-3">
        0 ~ 9까지 숫자가 랜덤하게 위치하고 있습니다. <br>
        숫자를 맞춰보세요!
      </p>
      <a href="#" @click.prevent="startGame(0)" class="card-tool inline-block float-right px-3" :class="`text-${COLORS[0]}-500`">게임하기</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
const GAME_INDEX = ['Baseball']
const COLORS = ['violet']

export default defineComponent({
  setup() {
    const { push } = useRouter()
    return {
      COLORS,
      startGame: (gameId: number) => {
        push({ name: GAME_INDEX[gameId] })
      }
    }
  },
})
</script>

<style scoped>
.card {
  transition: height 0.5s, box-shadow 0.5s;
}
.subtitle {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s;
}
.title {
  transition: font-size 0.5s, font-weight 0.5s;
}
.card:hover > .title {
  font-size: 1.3rem;
  font-weight: 800;
  transition: font-size 0.5s, font-weight 0.5s;
}
.card:hover > .subtitle {
  visibility: visible;
  opacity: 1;
  transition: visibility 1s linear 0s, opacity 1s;
}
.card-tool {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s;
}
.card:hover > .card-tool {
  visibility: visible;
  opacity: 1;
  transition: visibility 2.5s linear 0s, opacity 2.5s;
}
</style>
