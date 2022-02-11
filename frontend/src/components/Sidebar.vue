<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div
        class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30"
        :class="sideBarOpen ? '' : 'hidden'"
        id="main-nav"
    >
        <div
            class="w-full h-20 flex px-4 pr-6 mt-24 lg:mt-8 items-center justify-center mb-8"
        >
            <router-link to="/">
                <img
                    class="font-semibold text-3xl text-blue-400 pl-4 h-24"
                    src="@/assets/ちえり.png"
                    alt="logo"
                />
            </router-link>
        </div>

        <div class="mb-4 px-4 space-y-1">
            <p class="pl-4 text-sm font-semibold mb-1 uppercase">Test</p>
            <SidebarMenuItem to="index">
                <ChartBarIcon class="h-6 mr-2" />
                <span class="text-gray-700">Index</span>
            </SidebarMenuItem>
            <SidebarMenuItem to="again">
                <ChartBarIcon class="h-6 mr-2" />
                <span class="text-gray-700">Again</span>
            </SidebarMenuItem>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
    BeakerIcon,
    ChartBarIcon,
    HomeIcon,
    StatusOnlineIcon,
    IdentificationIcon,
} from "@heroicons/vue/outline";
import SidebarMenuItem from "@/components/SidebarMenuItem.vue";

export default {
    name: "Sidebar",
    components: {
        SidebarMenuItem,
        ChartBarIcon,
        StatusOnlineIcon,
        HomeIcon,
        BeakerIcon,
        IdentificationIcon,
    },
    computed: {
        ...mapGetters("ui", ["sideBarOpen"]),
    },
};
</script>
