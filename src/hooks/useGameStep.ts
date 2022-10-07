import { ref } from "vue"

export default function useGameStep () {
  const DEFAULT_GAME_STEP = 4

  const gameStep = ref(DEFAULT_GAME_STEP)

  const setGameStep = (step: number) => {
    if (!(3 <= step && step <= 5)) {
      alert("게임 스텝은 3~5 사이의 숫자만 가능합니다.")
      throw new Error("Invalid game step")
    }
    gameStep.value = step
  }
  return {
    getGameStep() { return gameStep.value },
    upGameStep () { setGameStep(gameStep.value + 1) },
    downGameStep () { setGameStep(gameStep.value - 1) },
  }
}