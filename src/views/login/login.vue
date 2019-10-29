<template>
    <div>
        <div class="mainColumn">
            <div class="loginCard">
                <div class="loginTitle">
                    <span>用户登录</span>
                </div>
                <form action="" class="loginForm">
                    <div class="loginForm-item">
                        <div class="inputWrap">
                            <input type="text" v-model="form.phone" class="loginForm-input" name="username" placeholder="请输入手机号">
                        </div>
                    </div>
                    <div class="loginForm-item">
                        <div class="inputWrap">
                            <input type="password" v-model="form.password" class="loginForm-input" name="password" placeholder="请输入密码">
                        </div>
                    </div>
                    <div class="loginForm-item">
                        <button class="submitBtn" @click.prevent="successlogin">立即登录</button>
                    </div>
                </form>
                <div class="msbar">
                    <router-link to="/register">
                        <span>
                            立即注册
                        </span>
                    </router-link>

                <span>
                    <a href="">忘记密码？</a>
                </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //请求
    import code from '../../../config/code';
    import login from "../../../api/login";
    export default {
        name: "login",
        data(){
            return {
                form:{
                    phone:'',
                    password:''
                }
            }
        },
        methods:{
            successlogin(){
                login.userlogin(this.form).then(res=>{
                    console.log(res);
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        sessionStorage.setItem('token',result.token);
                        let redirect = this.$route.query.redirect || 'my';
                        this.$router.push(redirect);
                        this.$toast(result.msg);
                    }else{
                        this.$toast(result.msg);
                    }
                });
            }
        }
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
    @import "../../assets/css/login.css";
</style>