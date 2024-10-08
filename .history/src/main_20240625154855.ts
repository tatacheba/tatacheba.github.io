import { createApp } from "vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as vuetify from "vuetify";

import App from "./App.vue";
import router from "./router/index";
import { createVuetify } from "vuetify";

const app = createApp(App);

// Define your custom theme

const vuetify = createVuetify({
    components,
    directives,
});

app.use(router);
app.use(vuetify);
app.mount("#app");
