<template>
    <div class="login-container">
        <!-- 导航栏 -->
        <van-nav-bar title="登录" class="page-nav-bar" />
        <!-- 导航栏结束 -->
        <!-- 登录表单 -->
        <van-form @submit="onSubmit">
            <van-field
                name="userName"
                v-model="userName"
                placeholder="请输入用户名"
                left-icon="manager"
                :rules="userFormRules.userName"
            />
            <van-field
                name="userPwd"
                v-model="userPwd"
                placeholder="请输入密码"
                left-icon="lock"
                :rules="userFormRules.userPwd"
            />
            <div style="margin: 16px">
                <van-button block type="primary" native-type="submit">提交</van-button>
            </div>
        </van-form>
        <!-- 登录表单结束 -->
    </div>
</template>

<script>
import { Toast } from "vant";
import { reactive, toRefs } from "vue";
import { login } from "../../api/user"; //导入login方法，进行请求的发送
import { useStore } from "vuex"; //导入useStore
function useSubmit(user) {
    const store = useStore();
    const onSubmit = async () => {
        //1、获取表单数据
        //2、表单验证
        //3、提交表单请求
        Toast.loading({
            message: "登录中...",
            forbidClick: true, //禁用背景点击
            duration: 0, //持续时间，默认是2000毫秒，如果为0则持续展示
        });
        const res = await login(user);
        if (res.data.code === 0) {
            Toast.success("用户登录成功");
            store.commit('setUser',res.data);
        } else {
            Toast.fail("用户名或密码错误");
        }

        //4、根据请求响应结果处理后续操作。
    };
    return {
        onSubmit,
    };
}
export default {
    setup() {
        const user = reactive({
            userName: "", //用户名
            userPwd: "", //用户密码
        });
        //定义校验规则
        const userFormRules = {
            userName: [{ required: true, message: "请填写用户名" }],
            userPwd: [
                {
                    required: true,
                    message: "请填写密码",
                },
                {
                    pattern: /^\d{6}$/,
                    message: "密码格式错误",
                },
            ],
        };
        return {
            ...toRefs(user),
            ...useSubmit(user),
            userFormRules, //返回校验规则
        };
    }
};
</script>

<style></style>