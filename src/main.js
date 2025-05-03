import '@/assets/style.css'

import Box from './UI_components/Box.vue'
import PrimaryButton from './UI_components/PrimaryButton.vue'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('Box', Box)
app.component('PrimaryButton', PrimaryButton)
app.mount('#app')

