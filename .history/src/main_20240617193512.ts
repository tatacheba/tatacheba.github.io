import "./assets/styles/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import ApiIcon from "./assets/styles/api-icon.vue"; // Import your component

import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: "mdi", // Use the Material Design Icons set
        values: {
            apiIcon: {
                component: ApiIcon, // Use the imported component
            },
        },
    },
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
