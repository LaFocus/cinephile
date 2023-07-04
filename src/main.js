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
import BtnMore from "@/components/UI/BtnMore.vue";
import Actors from "@/components/UI/Actors.vue";

app.component('Loader', Loader)
app.component('BtnMore', BtnMore)
app.component('Actors', Actors)

app.mount('#app')
