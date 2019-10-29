import instance from "./axios";

export default {
    //注册
    register(form){
        return instance.post('api/userlogin',form);
    },
    //登录
    userlogin(form){
        return instance.put('api/userlogin'+'/1',form)
    }
}