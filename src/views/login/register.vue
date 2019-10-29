<template>
    <div>
        <div class="mainColumn">
            <div class="loginCard">
                <div class="loginTitle">
                    <span>用户注册</span>
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
                        <button class="submitBtn" @click.prevent="registerbtn">立即注册</button>
                    </div>
                </form>
                <div class="msbar">
                    <router-link to="/login">
                        <span>
                        去登陆
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import login from "../../../api/login";
    import code from '../../../config/code';
    export default {
        name: "register",
        data(){
            return {
                form:{
                    phone:'',
                    password:''
                }
            }
        },
        methods:{
            registerbtn(){
                login.register(this.form).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
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