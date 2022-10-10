import { computed, ref } from "vue"
import useGameStep from "./useGameStep"

export default function useBaseBallGame () {
  const { getGameStep, upGameStep, downGameStep } = useGameStep()
  const answer = computed<BoardItem>(() => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return Array.from(
      Array(getGameStep()), 
      () => numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]
    )
  })
  const submitHistory = ref<Board[]>([])
  const isSuccessful = computed<boolean>(() => {
    const lastSubmit = submitHistory.value[submitHistory.value.length - 1]
    if (!lastSubmit) return false
    return lastSubmit.items.every((item, index) => item === answer.value[index])
  })
  const validate = (items: BoardItem) => {
    if (items.length !== getGameStep()) {
      throw new Error("Invalid board item length")
    }
    if (items.some(item => !(0 <= item && item <= 9))) {
      throw new Error("Invalid board item value")
    }
    if (new Set(items).size !== items.length) {
      throw new Error("Duplicated board item value")
    }
  }
  return {
    getGameStep, upGameStep, downGameStep,
    getAnswer () { return answer.value },
    getBoard () { return submitHistory.value },
    getSuccess () { return isSuccessful.value },
    submit (boardItem: BoardItem) {
      validate(boardItem)
      const id = submitHistory.value.length + 1
      const items = [...boardItem]
      submitHistory.value.push({ id, items })
    },
  }
}


export type BoardItem = number[]
export interface Board {
  id: number,
  items: BoardItem,
}