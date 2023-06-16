import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueLazyload from "vue-lazyload";
import errorImage from "@/assets/images/error.png";


import '@/assets/styles/main.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(VueLazyload, {
    error: errorImage,
})

import Loader from '@/components/UI/Loader.vue'
app.component('Loader', Loader)

app.mount('#app')
