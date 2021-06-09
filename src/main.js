import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mitt from 'mitt'

import toast from 'components/common/toast'


const app = createApp(App)
app.config.globalProperties.$bus = new mitt()
app.use(store).use(router).use(toast).mount('#app')
