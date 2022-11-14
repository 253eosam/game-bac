import { ref, computed, watch } from 'vue';

export type OX = 'O' | 'X'

const useColors = () => {
  const colors = {
    'red': '빨강',
    'blue': '파랑',
    'green': '초록',
    'yellow': '노랑',
    'purple': '보라',
    'white': '하양',
    'pink': '분홍',
  } as const
  type EngColor = keyof typeof colors

  const engColors = Object.keys(colors)
  const korColors = Object.values(colors)

  const getRandomNumber = (min: number, max: number) => {
    const flag = Math.floor(Math.random() * 10) % 2 === 0
    const random1 = Math.floor(Math.random() * (max - min + 1)) + min
    const random2 = Math.floor(Math.random() * (max - min + 1)) + min

    return flag ? [random1, random2] : [random1, random1]
  }

  const getEachColor = () => {
    const [randomEndIndex, randomKorIndex] = getRandomNumber(0, engColors.length - 1)
    const randomColorEng = engColors[randomEndIndex] as EngColor
    const randomColorKor = korColors[randomKorIndex]
    return {
      randomColorEng, randomColorKor
    }
  }

  return {
    getEachColor,
    colors
  }
}

const useCorrectColorGame = () => {
  const TIME_INTERVAL = 50
  const TIME_LIMIT = 30 * 1000

  const { getEachColor, colors } = useColors()
  const startFlag = ref(false)
  const point = ref(0)
  const time = ref(0)
  const eachColor = ref(getEachColor())
  let setTimeoutID: NodeJS.Timer | string | null = null

  const init = () => {
    startFlag.value = false
    point.value = 0
    time.value = 0
  }

  watch(time, () => {
    if (time.value >= TIME_LIMIT) {
      console.log('time over');
      startFlag.value = false
      clearTimeout(setTimeoutID as any)
    }
  })
  const next = () => eachColor.value = getEachColor()
  const obtainPoint = () => point.value += 1
  const lostPoint = () => point.value -= 1

  return {
    TIME_LIMIT,
    eachColor,
    play () {
      init()
      startFlag.value = true
      clearTimeout(setTimeoutID as any)
      setTimeoutID = setInterval(() => {
        time.value += TIME_INTERVAL
      }, TIME_INTERVAL)
      next()
    },
    comFlag: computed(() => startFlag.value),
    comTime: computed(() => time.value),
    comPoint: computed(() => point.value),
    next,
    submit (param: OX): boolean {
      if (param === 'O') {
        if (colors[eachColor.value.randomColorEng] === eachColor.value.randomColorKor) {
          obtainPoint()
          return true
        }
        else {
          lostPoint()
          return false
        }
      } else {
        if (colors[eachColor.value.randomColorEng] !== eachColor.value.randomColorKor) {
          obtainPoint()
          return true
        }
        else {
          lostPoint()
          return false
        }
      }
    }
  }
}

export default useCorrectColorGame