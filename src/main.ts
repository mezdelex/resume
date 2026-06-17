import App from '@/App.vue';
import Card from 'primevue/card';
import PrimeVue from 'primevue/config';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import router from './router/router';
import { createApp } from 'vue';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-dark-green/theme.css';

createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(router)
  .component('Card', Card)
  .component('ScrollTop', ScrollTop)
  .component('Skeleton', Skeleton)
  .mount('#app');
