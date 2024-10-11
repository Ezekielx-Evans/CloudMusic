<template>
    <div class="sidebar">
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
    gap:20px;
    padding: 35px;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    background-color: antiquewhite;
    border-radius: 10px;
    
}
</style>