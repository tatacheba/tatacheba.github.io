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

// Define your custom theme
const theme = {
    themes: {
        light: {
            primary: "#3f51b5",
            secondary: "#b0bec5",
            accent: "#8c9eff",
            error: "#b71c1c",
        },
        dark: {
            primary: "#1976d2",
            secondary: "#424242",
            accent: "#82b1ff",
            error: "#ff5252",
        },
    },
};

const vuetify = createVuetify({
    components,
    directives,
    theme,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
