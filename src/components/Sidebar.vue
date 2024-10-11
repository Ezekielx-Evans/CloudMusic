<template>
    <div class="sidebar">
        <div class="favicon">
            <img src="../assets/img/music.png" style="width: 100px;height: 100px;">
        </div>
        <a class="menu">
            <img src="../assets/img/home.png" style="width: 32px;">
            首页
        </a>
        <a class="menu">
            <img src="../assets/img/rank.png" style="width: 32px;">
            排行榜
        </a>
        <a class="menu">
            <img src="../assets/img/song.png" style="width: 32px;">
            歌单
        </a>
        <a class="menu">
            <img src="../assets/img/mv.png" style="width: 32px;">
            MV
        </a>
        <a class="menu">
            <img src="../assets/img/songer.png" style="width: 32px;">
            歌手
        </a>
    </div>
</template>

<script setup>

</script>

<style scoped>
.sidebar {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    padding: 35px;
    width: 150px;
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

.favicon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
}
</style>