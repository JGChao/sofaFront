<template>
    <div>
        <headers :isshow="true">
            我的收藏
        </headers>
        <div class="bigbox" v-if="collect.length">
            <div class="box1" v-for="item in collect" :key="'collect' + item.gid">
                <img :src="host + item.gthumb" alt="">
                <div class="zj">
                    <div class="zj1">
                        <span>{{item.gename}}</span>
                        {{item.gname}}</div>
                    <div class="zj2">{{item.gtype}}</div>
                    <div class="zj3">{{item.create_time}}</div>
                </div>
                <div class="ybz">￥{{item.gprice}}</div>
                <div class="qx">取消收藏</div>
                <div class="jrgwc">加入购物车</div>
            </div>
        </div>
    </div>
</template>

<script>
    import headers from "../../components/headers/headers";

    import collect from "../../../api/collect";
    import code from '../../../config/code';
    export default {
        name: "collect",
        components:{
            headers
        },
        data(){
            return {
                collect:[],
            }
        },
        methods:{
            getcollectone(){
                collect.collectqueryone().then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        this.collect = result.data;
                    }else{
                        this.$toast(result.msg);
                    }
                });
            }
        },
        computed:{
            host(){
                return this.$store.state.host;
            }
        },
        mounted() {
            this.getcollectone();
        }
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
    .bigbox{
        width: 7.5rem;
        height:auto;
        background-color: #F8f8f8;
        padding: 0 0.24rem;
        box-sizing: border-box;
        margin-top: 0.88rem;
        overflow: hidden;
    }
    .bigbox .box1{
        width: 7.02rem;
        height: 2.62rem;
        background: #ffffff;
        margin-top: 0.23rem;
        border-radius: 0.2rem;
        display: flex;
        flex-direction: row;
        position: relative;
        box-shadow: 0px 1px 10px 0px
        rgba(0, 0, 0, 0.09);

    }
    .bigbox .box1 img{
        width: 1.86rem;
        height: 1.31rem;
        margin-top: 0.52rem;
        margin-left: 0.2rem;
    }
    .bigbox .box1 .zj{
        margin-top: 0.66rem;
        margin-left: 0.14rem;
    }
    .bigbox .box1 .zj1{
        font-size: 0.24rem;
    }
    .bigbox .box1 .zj1 span{
        font-size: 0.18rem;
    }
    .bigbox .box1 .zj2{
        margin-top: 0.03rem;
        font-size: 0.18rem;
        color: #737373;
    }
    .bigbox .box1 .zj3{
        font-size: 0.18rem;
        margin-top: 0.37rem;
    }

    .box1 .ybz{
        width: 0.96rem;
        height: 0.24rem;
        font-size: 0.24rem;
        margin-top: 0.69rem;
        margin-left: 0.65rem;
    }
    .box1 .ybz1{
        width: 1.17rem;
        height: 0.4rem;
        display: flex;
        flex-direction: row;
        font-size: 0.15rem;
        line-height: 0.4rem;
        position: absolute;
        right: 0.15rem;
        bottom: 0.64rem;
    }
    .box1 .ybz1 span{
        font-size: 0.3rem;
        font-weight: bold;
    }
    .box1 .qx{
        color: #999999;
        font-size: 0.24rem;
        position: absolute;
        right: 2.2rem;
        bottom: 0.23rem;
    }
    .box1 .jrgwc{
        width: 1.59rem;
        height: 0.44rem;
        border-radius: 0.04rem;
        border: solid 0.01rem #ffcb3f;
        position: absolute;
        right: 0.12rem;
        bottom: 0.13rem;
        color: #ffcb3f;
        font-size: 0.24rem;
        text-align: center;
        line-height: 0.44rem;
    }
</style>