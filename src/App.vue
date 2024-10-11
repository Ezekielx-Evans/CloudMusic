<template>
    <div class="layout">
        <Sidebar />
        <RouterView />
    </div>
</template>

<script setup>
    import Sidebar from './components/Sidebar.vue';
</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
}
</style>
