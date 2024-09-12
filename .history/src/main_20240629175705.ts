import "./assets/styles/main.css";
import "vuetify/dist/vuetify.min.css";
import { createApp } from "vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import router from "./router/index";
import VueScrollTo from "vue-scrollto";
import { VueScrollToOptions } from "@types/vue-scrollto";

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
});

app.use(router);
app.use(vuetify);
app.use(VueScrollTo);
app.mount("#app");
