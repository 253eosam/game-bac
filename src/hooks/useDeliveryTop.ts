import { getCurrentInstance, onMounted, ref } from "vue"

export function useDeliveryTop (cb: (payload: any) => void) {
  const internalInstance = getCurrentInstance()
  const emitter = internalInstance?.appContext.config.globalProperties.emitter
  
  onMounted(() => {
    emitter.on('deliveryTop', (payload: any) => {
      cb(payload)
    })
  })

}