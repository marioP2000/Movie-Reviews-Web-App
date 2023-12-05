import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

import CategoriesMenu from '@/frontend/components/global_components/CategoriesMenu.vue';
import PageFooter from '@/frontend/components/PageFooter.vue'

app.component("CategoriesMenu", CategoriesMenu),
app.component("PageFooter", PageFooter)


app.mount('#app');

