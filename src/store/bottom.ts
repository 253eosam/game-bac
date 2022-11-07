import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBottom = defineStore('bottom', () => {
  const data = ref<any>('')
  
  return {
    submit (pValue: any) { 
      data.value = pValue 
    },
    getValue: computed(() => data.value),
  }
})
