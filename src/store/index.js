import { createStore } from "vuex";
import { setItem, getItem } from '../utils/storage';
const TOKEN_KEY = "VANT_USER";
const store = createStore({
    state: {
        //存储当前登录用户信息，包含token等数据
        // user: null,
        // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY)),
        user: getItem(TOKEN_KEY),
    },
    mutations: {
        setUser(state, data) {
            state.user = data;
            setItem(TOKEN_KEY, state.user);
            // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user));
        },
    },
});
export default store;