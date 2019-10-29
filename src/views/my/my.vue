<template>
    <div>
        <headers :isshow="false"></headers>
        <!-- 背景 -->
        <div class="bj">
            <img src="../../assets/img/1、微网站首页_02.jpg" alt="">
        </div>
        <!-- 用户 -->
        <div class="yh">
            <div class="yhh">
                <div class="yhhs" v-if="my">
                    <p class="zzz">{{my.uname}}<i class="iconfont iconxunzhang"></i></p>
                    <router-link to="">
                        <p class="zz">编辑个人资料</p>
                    </router-link>
                    <div class="zzt">
                        <img :src="host + my.avatar" alt="">
                    </div>
                </div>
                <div class="yhhx">
                    <div class="yt">
                        <a href="">
                            <i class="iconfont icondaifukuan" ></i>
                            <span class="yhz">待付款</span>
                        </a>
                    </div>
                    <div class="yt">
                        <a href="">
                            <i class="iconfont icondaifahuo6" ></i>
                            <span class="yhz">待发货</span>
                        </a>
                    </div>
                    <div class="yt">
                        <a href="">
                            <i class="iconfont icondaishouhuo2" ></i>
                            <span class="yhz">待收货</span>
                        </a>
                    </div>
                    <div class="yt">
                        <a href="">
                            <i class="iconfont iconpingjia" ></i>
                            <span class="yhz">待评价</span>
                        </a>
                    </div>
                    <div class="yt">
                        <a href="refund.html">
                            <i class="iconfont icontuikuan" ></i>
                            <span class="yhz">退款</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- icon -->
        <div class="tb">
            <div class="tbnk">
                <div class="tbic">
                    <div class="tbict">
                        <router-link to="/myorder">
                            <i class="iconfont iconwodedingdan" ></i>
                            <span class="tbz">我的订单</span>
                        </router-link>
                    </div>
                    <div class="tbict">
                        <router-link to="/collect">
                            <i class="iconfont iconstar" ></i>
                            <span class="tbz">我的收藏</span>
                        </router-link>
                    </div>
                    <div class="tbict">
                        <a href="coupon.html">
                            <i class="iconfont iconyouhuiquan" ></i>
                            <span class="tbz">优惠券</span>
                        </a>
                    </div>
                </div>
                <div class="tbic">
                    <div class="tbict">
                        <router-link to="">
                            <i class="iconfont iconm-per-record-01" ></i>
                            <span class="tbz">浏览记录</span>
                        </router-link>
                    </div>
                    <div class="tbict">
                        <a href="addressGet.html">
                            <i class="iconfont icondizhi1" ></i>
                            <span class="tbz">收货地址</span>
                        </a>
                    </div>
                    <div class="tbict">
                        <a href="service.html">
                            <i class="iconfont iconkefu" ></i>
                            <span class="tbz">客服</span>
                        </a>
                    </div>
                </div>
                <div class="tbic">
                    <div class="tbict">
                        <a href="setUp.html">
                            <i class="iconfont iconshezhi" ></i>
                            <span class="tbz">设置</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- bottom -->
        <div class="xx">
            <div class="xxnk">
                <div class="nkx">
                    <div class="nnn"><i class="iconfont iconguanlian"></i>关联账户</div>
                    <a href="">
                        <i class="iconfont iconyou"></i>
                    </a>
                </div>
                <div class="nkx">
                    <div class="nnn"><i class="iconfont iconbiaoqian"></i>关于我们</div>
                    <a href="">
                        <i class="iconfont iconyou"></i>
                    </a>
                </div>
            </div>
        </div>

        <tabs :activeindex="4"></tabs>
    </div>
</template>

<script>
    import tabs from "../../components/tabs/tabs";
    import headers from "../../components/headers/headers";

    //请求
    import my from "../../../api/my";
    import code from '../../../config/code';

    export default {
        name: "my",
        components:{
            tabs,
            headers
        },
        data(){
            return {
               my:null
            }
        },
        methods:{
            getmy(){
                my.myqueryone().then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        this.my = result.data;
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
           this.getmy();
        }
    }
</script>

<style scoped>
    @import "../../assets/css/mine.css";
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
    @import "https://at.alicdn.com/t/font_1209023_zjh3kyd8ak.css";
</style>