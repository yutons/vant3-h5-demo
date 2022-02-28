import { createApp } from 'vue'
import App from './App.vue'
import Vant from "vant"; //导入vant
import "vant/lib/index.css"; //导入样式
import "amfe-flexible"; //导入，用于设置rem基准值
import router from "./router"; //导入路由对象
import "./styles/index.css"; // 导入全局样式
import store from "./store"; //导入store
createApp(App).use(Vant).use(router).use(store).mount('#app'); //完成store的注册操作