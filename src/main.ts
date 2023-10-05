import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../router';

// Vuetify のインポートを追加 **********/
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 以下を追加 **********/
const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App);
app.use(router);
// 以下のように .use(vuetify) を追加
createApp(App).use(vuetify).mount('#app')