<template>
  <div class="absolute flex flex-col w-full">
    <GameSelection
      v-for="({ id, onClickStartGame, title, description, color }, idx) in gameSelections" 
      :key="id" 
      @onClickStartGame="onClickStartGame"
      :title="`${idx+1}. ${id} - ${title}`" 
      :description="description"
      :color="color"
      class="border-blue-500 hover:shadow-blue-500 basis-0 flex-1"
    />
    <!-- NOTE: 색상부분 동적으로 적용이 안됨. -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import GameSelection from '@src/components/home/GameSelection.vue'

type TGameSelection = {
  id: string
  title: string
  description: string
  color: string
  onClickStartGame: () => void
}

export default defineComponent({
  components: {
    GameSelection,
  },
  setup() {
    const { push } = useRouter()
    return {
      gameSelections: [
        {
          id: 'Baseball',
          title: '숫자 야구 게임',
          description: `0 ~ 9까지 숫자가 랜덤하게 위치히고 있습니다.<br>각 위치에 맞는 숫자를 맞춰보세요!`,
          color: 'blue',
          onClickStartGame() {
            push({ name: 'Baseball' })
          },
        },
      ] as TGameSelection[],
    }
  },
})
</script>
