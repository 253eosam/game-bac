import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router'
import App from './App.vue'
import mitt from 'mitt'

const emitter = mitt()

const app = createApp(App)
  .use(router)
  .use(createPinia())

app.config.globalProperties.emitter = emitter
app.mount('#app')