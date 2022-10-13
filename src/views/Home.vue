<template>
  <div class="absolute flex w-full">
    <GameSelection
      v-for="({ id, onClickStartGame, title, description, color }, idx) in gameSelections" 
      :key="id" 
      @onClickStartGame="onClickStartGame"
      :title="`${idx+1}. ${id} - ${title}`" 
      :description="description"
      :color="color"
      class="border-blue-500 hover:shadow-blue-500"
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
          title: '야구공 맞추기',
          description: `0 ~ 9까지 숫자가 랜덤하게 위차히고 있습니다.<br>숫자를 맞춰보세요!`,
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
