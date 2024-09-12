import "./assets/styles/main.css";
import { createApp } from "vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify, type ThemeDefinition } from "vuetify";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

// Define your custom theme
const theme: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#333",
        surface: "#111",
        primary: "#333",

        secondary: "#333",

        error: "#333",
        info: "#333",
        success: "#333",
        warning: "#333",
    },
};

const vuetify = createVuetify({
    components,
    directives,

    theme: {
        themes: {
            theme,
        },
    },
});

app.use(router);
app.use(vuetify);
app.mount("#app");
