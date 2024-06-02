import { createApp } from 'vue'
import App from './App.vue'
import routers from './router'

import '../src/assets/scss/main.scss'

const app = createApp(App)
app.use(routers)
app.mount('#app')
