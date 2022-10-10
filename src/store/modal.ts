import { defineStore } from 'pinia'
import { Component, computed, h, ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const toggle = ref(false)
  const component = ref<Component | null>(null)

  return {
    toggle,
    getToggle: computed(() => toggle.value),
    getComponent: computed(() => component.value),
    setComponent (pCompo: Component) { component.value = pCompo },
    openModal () { toggle.value = true },
    closeModal () { 
      toggle.value = false 
      component.value = null 
    },
  }
})
