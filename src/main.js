import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css';

const vuetify = createVuetify()

createApp(App)
  .use(vuetify)
  .mount('#app')
