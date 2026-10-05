import App from './App.vue';
import Aura from '@primeuix/themes/aura';
import Card from 'primevue/card';
import PrimeVue from 'primevue/config';
import ScrollTop from 'primevue/scrolltop';
import router from './router/router';
import { createApp } from 'vue';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode',
    },
  },
});
app.use(router);

app.component('Card', Card);
app.component('ScrollTop', ScrollTop);

app.mount('#app');
