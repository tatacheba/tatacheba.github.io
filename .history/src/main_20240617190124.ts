import "./assets/styles/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdiSvg',
    values: {
      custom-icon: {
        component: '@/path/to/your/custom-icon.vue', // Путь к вашему компоненту иконки
      },
    },
  },
});


app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
