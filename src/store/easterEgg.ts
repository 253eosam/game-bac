import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useEasterEgg = defineStore('easterEgg', () => {
  const data = ref<any>('')
  
  return {
    setData (pValue: any) { 
      data.value = pValue 
    },
    comData: computed(() => data.value),
  }
})
