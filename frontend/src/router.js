import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

import Dashboard from "./components/Dashboard.vue";
import PageNotFound from "./components/PageNotFound.vue";

import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorldAgain from "@/components/HelloWorldAgain.vue";

const group = (prefix, routes) => {
    return routes.map((route) => {
        route.path = `/${prefix}${route.path}`;
        route.name = `${prefix}.${route.name}`;

        return route;
    });
};

const routes = [
    {
        path: "/",
        component: Dashboard,
        children: [
            { path: "/", name: "index", component: HelloWorld },
            { path: "/again", name: "again", component: HelloWorldAgain },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        component: PageNotFound,
        meta: { title: "404" },
    },
];

let router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

/**
 * @param {string} defaultTitle
 */
export const registerDefaultTitle = (defaultTitle) => {
    router.afterEach(async (to, from) => {
        await nextTick(() => {
            if (typeof to.meta?.title === "undefined") {
                document.title = defaultTitle;
                return;
            }

            let title =
                typeof to.meta.title === "function"
                    ? to.meta.title(to)
                    : to.meta.title;

            document.title = `${defaultTitle} :: ${title}`;
        });
    });
};
