// import "./assets/styles/main.css";
// import "vuetify/dist/vuetify.min.css"; // Add this line
// import { createApp } from "vue";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";
// import { createVuetify } from "vuetify";
// import App from "./App.vue";
// import router from "./router/index";

// const app = createApp(App);

// const vuetify = createVuetify({
//     components,
//     directives,

// });

// app.use(router);
// app.use(vuetify);
// app.mount("#app");
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"; // Add this line

Vue.use(Vuetify);
const opts = {
    theme: {
        dark: false,
    },
    options: {
        customProperties: true,
    },
    icons: {
        iconfont: "mdi",
    },
};

export default new Vuetify(opts);
