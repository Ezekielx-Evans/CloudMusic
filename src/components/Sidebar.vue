<template>
    <div class="sidebar">
        <div class="favicon">
            <img src="/img/music.png">
        </div>
        <RouterLink class="menu" v-for="(item, index) in menuItems" :key="index" :to="item.path">
            <img :src="item.icon">
            {{ item.text }}
        </RouterLink>
    </div>
</template>

<script setup>
const menuItems = [
    { icon: "/img/home.png", text: "首页", path: "/" },
    { icon: "/img/rank.png", text: "排行榜", path: "/rank" },
    { icon: "/img/song.png", text: "歌单",path: "/song" },
    { icon: "/img/mv.png", text: "MV", path: "/mv" },
    { icon: "/img/singer.png", text: "歌手", path: "/singer"},
];
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    padding: 35px;
    width: 220px;
    height: 100%;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

.menu img {
    width: 32px;
}

.menu:hover {
    background-color: #dadada;
}

.favicon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
}

.favicon img {
    width: 100px;height: 100px;
}
</style>