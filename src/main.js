import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faPlay);
library.add(faPause);
library.add(faChevronDown);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
