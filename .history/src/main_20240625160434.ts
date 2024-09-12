import { createApp } from "vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify, type ThemeDefinition } from "vuetify"; // Import ThemeOptions

import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

// Define your custom theme
const theme: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        primary: "#6200EE",
        "primary-darken-1": "#3700B3",
        secondary: "#03DAC6",
        "secondary-darken-1": "#018786",
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
    },
};

const vuetify = createVuetify({
    components,
    directives,
    themes: {}, // Pass the theme object as an option
});

app.use(router);
app.use(vuetify);
app.mount("#app");
