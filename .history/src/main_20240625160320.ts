import { createApp } from "vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify, type ThemeDefinition } from "vuetify"; // Import ThemeOptions

import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

// Define your custom theme
const theme: ThemeDefinition = {
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
    theme, // Pass the theme object as an option
});

app.use(router);
app.use(vuetify);
app.mount("#app");
