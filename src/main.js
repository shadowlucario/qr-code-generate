import { createApp } from 'vue'
import App from './App.vue'
import 'boxicons'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).mount('#app')

// app.component(VueQrcode.name, VueQrcode);