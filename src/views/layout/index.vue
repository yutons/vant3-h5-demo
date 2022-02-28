<template>
    <div class="layout-container">
        <!-- 子路由的出口 -->
        <router-view></router-view>
        <!-- 标签导航栏 -->
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/qa">问答</van-tabbar-item>
            <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const active = ref(0);
        return {
            active,
        };
    },
};
</script>

<style></style>