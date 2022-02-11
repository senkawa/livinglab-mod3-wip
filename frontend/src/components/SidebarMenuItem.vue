<template>
    <router-link
        class="w-full flex items-center text-sunset-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        :to="{ name: to, params: params }"
    >
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    name: "SidebarMenuItem",
    props: {
        to: {
            type: String,
            required: true,
        },
        params: Object,
    },
};
</script>

<style lang="postcss" scoped>
.router-link-exact-active {
    @apply bg-gray-200;
}
</style>
