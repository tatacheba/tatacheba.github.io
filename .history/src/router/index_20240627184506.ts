import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import type {
    RouteLocationNormalized,
    RouteLocationNormalizedLoaded,
    ScrollPosition,
} from "vue-router";
import MainContent from "../views/MainContent.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "MainContent",
        component: MainContent,
    },
    {
        path: "/qaiunokian",
        name: "QaPageIUNokian",
        component: () => import("@/views/qaPages/QaPageIUNokian.vue"),
    },
    {
        path: "/qaapinokian",
        name: "QaPageAPINokian",
        component: () => import("@/views/qaPages/QaPageAPINokian.vue"),
    },
    {
        path: "/qamobilewiki",
        name: "QaMobileWiki",
        component: () => import("@/views/qaPages/QaPageMobileWiki.vue"),
    },
    {
        path: "/nannyoggapi",
        name: "NannyOggApi",
        component: () => import("@/views/backendPages/NannyOggApi.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash }; // <==== the important part
        }
        return { x: 0, y: 0 };
    },
});
router.beforeEach((to, from, next) => {
    // Прокручиваем страницу в начало
    window.scrollTo(0, 0);
    next();
});

export default router;
