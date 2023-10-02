import './index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import withUUID from 'vue-uuid';

import App from './App.vue';

const app = withUUID(createApp(App));
const pinia = createPinia();

app.use(pinia).mount('#app');
