import { createApp } from "vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import Vuetify from "vuetify";

import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

// Define your custom theme

app.use(Vuetify); // Add this line to use Vuetify

const vuetify = new Vuetify({
    components,
    directives,
});

app.use(router);
app.use(vuetify);
app.mount("#app");
