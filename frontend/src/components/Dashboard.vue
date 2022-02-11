<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">
            <Sidebar />

            <div
                class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
                :class="sideBarOpen ? 'overlay' : ''"
                id="main-content"
            >
                <Navbar />

                <div class="p-6 bg-gray-100 mb-20 h-auto">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
    name: "Dashboard",
    data() {
        return {
            messages: [],
        };
    },
    computed: {
        ...mapState("ui", ["sideBarOpen"]),
    },
    components: {
        Sidebar,
        Navbar,
    },
};
</script>
