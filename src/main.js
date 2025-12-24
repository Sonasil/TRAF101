import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css'; // or './styles/main.css' if we made one, I'll stick to style.css for simplicity as requested "mevcutsa onu kullan" but I might overwrite it later

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
