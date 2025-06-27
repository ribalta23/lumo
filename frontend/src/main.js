import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/fonts/fonts.css'

console.log('Creating app...')

const app = createApp(App)
app.use(router)
app.mount('#app')

console.log('App mounted!')
