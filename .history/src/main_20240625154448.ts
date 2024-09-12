import { createApp } from "vue";
import { createPinia } from "pinia"; // Import ThemeDefinition instead of Theme
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

// Define your custom theme

const vuetify = createVuetify({
    components,
    directives,
    theme,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
