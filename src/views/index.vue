<template>
    <div>
        <headers :isshow="false"></headers>
        <!-- 分类 -->
        <div class="fenlei">
            <router-link to="/list">
                <p class="sorts">产品分类</p>
            </router-link>
            <p class="sorts"> 案例展示</p>
            <router-link to="/team">
                <p class="sorts">设计团队</p>
            </router-link>
            <p class="sorts">品牌故事</p>
        </div>
                <!-- banner -->
                <div class="bannerr swiper-container">
                    <mt-swipe :auto="3000">
                        <mt-swipe-item>
                            <img src="../assets/img/1、微网站首页_02.jpg" alt="" class="ban swiper-slide">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../assets/img/1、微网站首页_02.jpg" alt="" class="ban swiper-slide">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../assets/img/1、微网站首页_02.jpg" alt="" class="ban swiper-slide">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
                <!-- 新品首发 -->
                <div class="newBox">
                    <div class="se"></div>
                    <div class="tiao"></div>
                    <p class="newen">NEW&nbsp;PRODUCT</p>
                    <div class="xinbox">
                        <p class="xin">新品</p>
                        <p class="xin xin1">首发</p>
                    </div>
                    <div class="di"></div>
                </div>
                <div class="sifen">
                    <p class="zhiyi"><span style="font-weight:bold;color:#FECA43;">1</span>/4</p>
                </div>
                <div class="proBox">
                    <div class="chang">
                        <a href="details.html">
                            <div class="box1">
                                <img src="../assets/img/1、微网站首页_08.jpg" alt="" class="image1">
                                <div class="kuai1"></div>
                                <p class="eng1">VERFO LAB</p>
                                <p class="nei"> 现代简约时尚布艺沙发</p>
                                <div class="pbox">
                                    <p class="price1"><span style="font-size:0.26rem;font-weight:bold;">800</span>RMB</p>
                                    <a href="" class="gou">
                                        <i class="iconfont iconyuanquanjiahao"></i>
                                        <p>点击购买</p>
                                    </a>
                                </div>
                            </div>
                        </a>

                        <div class="box1">
                            <img src="../assets/img/1、微网站首页_05.jpg" alt="" class="image1">
                            <div class="kuai1"></div>
                            <p class="eng1">VERFO LAB</p>
                            <p class="nei"> 现代简约时尚布艺沙发</p>
                            <div class="pbox">
                                <p class="price1"><span style="font-size:0.26rem;font-weight:bold;">800</span>RMB</p>
                                <a href="" class="gou">
                                    <i class="iconfont iconyuanquanjiahao"></i>
                                    <p>点击购买</p>
                                </a>
                            </div>
                        </div>
                        <div class="box1">
                            <img src="../assets/img/3、微网站列表_09.png" alt="" class="image1">
                            <div class="kuai1"></div>
                            <p class="eng1">VERFO LAB</p>
                            <p class="nei"> 现代简约时尚布艺沙发</p>
                            <div class="pbox">
                                <p class="price1"><span style="font-size:0.26rem;font-weight:bold;">800</span>RMB</p>
                                <a href="" class="gou">
                                    <i class="iconfont iconyuanquanjiahao"></i>
                                    <p>点击购买</p>
                                </a>
                            </div>
                        </div>
                        <div style="width:0.24rem;">&nbsp;&nbsp;</div>
                    </div>
                </div>
                <!-- 热销产品 -->
                <div class="newBox">
                    <div class="se"></div>
                    <div class="tiao"></div>
                    <p class="newen">HOT&nbsp;PRODUCT</p>
                    <div class="xinbox">
                        <p class="xin">热销</p>
                        <p class="xin xin1">产品</p>
                    </div>
                    <div class="di"></div>
                </div>

                <div class="sofaBox" v-for="goods in goods.slice(0,1)" :key="goods.gid">
                    <img :src="host + goods.gthumb" alt="" class="sofa1">
                    <div class="er">
                        <div class="zuo">
                            <p class="con1">{{goods.gname}}</p>
                            <p class="con2">{{goods.gdes}}</p>
                            <p class="con3"><span style="font-size:0.3rem;font-weight:bold;">{{goods.gprice}}</span> RMB</p>
                            <p class="con4">BUY NOW
                                <i class="iconfont iconjiang-copy"></i>
                            </p>
                        </div>
                        <div class="you">
                            <div class="dian"></div>
                            <div class="dian dian1"></div>
                            <div class="dian dian2"></div>
                        </div>
                    </div>
                </div>

                <div class="hang1">
                    <div class="nbox" v-for="goods in goods.slice(1,5)" :key="goods.gid">
                        <p class="en">{{goods.gename}}</p>
                        <p class="name">{{goods.gname}}</p>
                        <div class="botBox">
                            <div class="left">
                                <img :src="host + goods.gthumb" alt="" class="tu">
                                <p class="p1"><span style="font-size:0.26rem;font-weight:bold;">{{goods.gprice}}</span> RMB</p>
                                <p class="p2">BUY NOW
                                    <i class="iconfont iconjiang-copy" style="color:#FECA43;"></i>
                                </p>
                            </div>
                            <div class="right">
                                <div class="yuan"></div>
                                <div class="yuan yuan1"></div>
                                <div class="yuan yuan2"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="more">
                    <span></span>
                    <p>查看更多</p>
                    <span></span>
                </div>

                <!-- 案例展示 -->
                <div class="newBox newBox1">
                    <div class="se"></div>
                    <div class="tiao"></div>
                    <p class="newen">BRAND&nbsp;STORY</p>
                    <div class="xinbox">
                        <p class="xin">案例</p>
                        <p class="xin xin1">展示</p>
                    </div>
                    <div class="di"></div>
                </div>
                <div class="anBox">
                    <img src="../assets/img/1、微网站首页_33.jpg" alt="" class="tu2">
                    <p class="an1">About the chair designer.</p>
                    <p class="an2">透气性与柔和感并存，<br>
                        像三月的威风，也像五月的阳光，像恋人的热吻，<br>
                        也像傍晚归时的路灯。<br>
                        棉麻的柔软触感，让不大的客厅更加具有安全感，陷阱沙发<br>
                        的温柔里，追剧的日子变得幸福异常。
                    </p>
                    <a href="" class="learn">
                        <button>了解更多</button>
                    </a>
                </div>
                <!-- 品牌故事 -->
                <div class="newBox newBox2">
                    <div class="se"></div>
                    <div class="tiao"></div>
                    <p class="newen">COMMODITY&nbsp;DETAILS</p>
                    <div class="xinbox">
                        <p class="xin">品牌</p>
                        <p class="xin xin1">故事</p>
                    </div>
                    <div class="di"></div>
                </div>
                <img src="../assets/img/1、微网站首页_36.png" alt="" class="bigImg">




                <div style="width:7.5rem;height:0.98rem;"></div>

                <!-- tab -->

        <!--底部-->
        <tabs :activeindex="1"></tabs>
    </div>
</template>

<script>

    import tabs from "../components/tabs/tabs";
    import headers from "../components/headers/headers";

    //请求
    import code from '../../config/code';
    import goods from "../../api/goods";

    export default {
        name: "index",
        components:{
            tabs,
            headers
        },
        data(){
            return {
                goods:[],
                params:{
                    typeid:0,
                    limit:5,
                    page:0,
                },
            }
        },
        methods:{
            getGoods(){
                goods.queryCoodss(this.params).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS && result.data.length){
                        this.goods = result.data;
                    }else{
                        this.$toast(result.msg);
                    }
                })
            },
            initTotals(){
                goods.getTotal().then(res=>{
                    if(res.data.code == code.CODE_SUCCESS){
                        let total = res.data.data;
                       this.$store.dispatch('initTotal', {
                            total: total,
                        });
                    }
                });
            },
        },
        computed:{
            host(){
                return this.$store.state.host;
            }
        },
        mounted() {
            this.getGoods();
            this.initTotals();
        }
    }
</script>
<style scoped>
    @import "../assets/css/index.css";
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
</style>