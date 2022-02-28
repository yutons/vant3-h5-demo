// 存储数据
export const setItem = (key, value) => {
    //将数组，对象类型的数据转换为JSON格式的字符串进行存储
    if (typeof value === "object") {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
};
//获取数据
export const getItem = (key) => {
    const data = window.localStorage.getItem(key);
    //这里使用try..catch的，而不是通过if判断一下是否为json格式的字符串，然后在通过parse进行转换呢，目的就是是为了方便处理，因为对字符串进行判断看一下是否为json格式的字符串，比较麻烦一些。还需要通过正则表达式来完成。而通过try..catch比较方便
    // 如果data不是一个有效的json格式字符串，JSON.parse就会出错。
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
};
//删除数据
export const removeItem = (key) => {
    window.localStorage.removeItem(key);
}