import { Nullable } from '@src/types/global'
import { isNull } from 'lodash'
import { computed, ref } from 'vue'
import useGameStep from './useGameStep'

export type BoardItem = number[]
export interface Board {
  id: number
  items: BoardItem
  strike: number
  ball: number
}

export default function useBaseBallGame() {
  const { getGameStep, upGameStep, downGameStep } = useGameStep()
  const answer = computed<BoardItem>(() => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return Array.from(Array(getGameStep()), () => numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0])
  })
  const submitHistory = ref<Board[]>([])
  const isSuccessful = computed<boolean>(() => {
    const lastSubmit = submitHistory.value[submitHistory.value.length - 1]
    if (!lastSubmit) return false
    return lastSubmit.items.every((item, index) => item === answer.value[index])
  })
  const validate = (items: Nullable<number>[]) => {
    if (items.length !== getGameStep()) {
      throw new Error('비어있는 입력공간이 있습니다.', { cause: 'Invalid board item length'})
    }
    if (items.some((item) => isNull(item) || !(0 <= item && item <= 9))) {
      throw new Error('비어있는 입력공간이 있거나 잘못된 입력이 존재합니다. 확인 후 다시 제출바랍니다.', { cause: 'Invalid board item value'})
    }
    if (new Set(items).size !== items.length) {
      throw new Error('중복된 숫자가 존재합니다. 숫자가 겹치지않게 입력해주세요.', { cause: 'Duplicated board item value'})
    }
  }
  const getStrike = (items: BoardItem) => {
    return items.reduce((acc, item, index) => (item === answer.value[index] ? acc + 1 : acc), 0)
  }
  const getBall = (items: BoardItem) => {
    return items.reduce((acc, item) => (answer.value.includes(item) ? acc + 1 : acc), 0) - getStrike(items)
  }
  return {
    getGameStep,
    upGameStep,
    downGameStep,
    getAnswer() {
      return answer.value
    },
    comBoard: computed(() => submitHistory.value),
    comIsSuccessful: computed(() => isSuccessful.value),
    submit(boardItem: Nullable<number>[]) {
      validate(boardItem)
      const id = submitHistory.value.length + 1
      const items = [...boardItem] as BoardItem
      submitHistory.value.push({ id, items, strike: getStrike(items), ball: getBall(items) })
    },
  }
}
