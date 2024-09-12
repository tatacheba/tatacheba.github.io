import { createApp } from "vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify, type ThemeDefinition } from "vuetify"; // Import ThemeOptions

import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

// Define your custom theme
const theme: ThemeDefinition = {
    dark: {
        primary: "#1976d2",
        secondary: "#424242",
        accent: "#82b1ff",
        error: "#ff5252",
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
