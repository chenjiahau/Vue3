import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { saveSnapshot } from './stores/plugins/saveSnapshot'

const pinia = createPinia();
pinia.use(saveSnapshot);

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')