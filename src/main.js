import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives
})

const pinia = createPinia()
const app = createApp(App).use(vuetify).use(pinia)

app.use(router)

app.mount('#app')
