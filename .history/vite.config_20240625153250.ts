import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
import Vuetify from "vuetify";

// https://vitejs.dev/config/
export default defineConfig({
    // base: '/tatacheba.github.io/',
    plugins: [vue(), vueJsx(), VueDevTools()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        outDir: "dist",
    },
});
