<template>
    <div  v-if="goods">
        <headers :isshow="true"></headers>

        <div class="list">
            <div class="list_w">
                <a href="details.html" class="col">
                    商品详情
                    <span></span>
                </a>
                <a href="comment.html">商品评论</a>
            </div>
        </div>
        <div class="banner">
            <div class="banner_w">
                <mt-swipe :auto="3000" @change="handleChange">
                    <mt-swipe-item v-for="(banner,index) in goods.gbanner1" :key="index">
                        <img :src="host + banner" alt="">
                    </mt-swipe-item>
                </mt-swipe>
                <div class="page">
                    <span style="color: #000000;font-size:0.24rem;line-height:0.3rem;">
                        {{goods.gbanner1.length}}<span>{{bannerlength}}/</span></span>
                </div>
            </div>
        </div>

        <div class="bosc">
            <div class="bosc_w" >
                <p class="bo">{{goods.gename}} {{goods.gname}}</p>
                <span class="do">
                        <span class="du"></span>
                </span>
                <p class="mod"> 种类&nbsp;&nbsp;&nbsp;{{goods.gtype}}</p>
                <p class="gug"> 规格&nbsp;&nbsp;&nbsp;{{goods.gsize}}</p>
                <p class="col">颜色
                    <div class="quu">
                        <div class="color" v-for="(color,index) in goods.gcolor1" :key="index"
                            :style="{borderColor:color,backgroundColor:'#fff',
                            boxShadow:'0 0 0 0.02rem color,0 0 0 0.1rem #ffffff,0 0 0 0.11rem color'}"
                             ref="color"
                             @click="chagecolor(color,index)"
                        ></div>
                    </div>
                </p>
                <p class="pei"> 配送&nbsp;&nbsp;&nbsp;{{goods.gdel}} </p>
                <span class="do">
                        <span class="du"></span>
                    </span>
                <p class="pric">{{goods.gprice}}<span class="rem">REM</span></p>
                <div class="shop">
                    购买数量
                    <div class="jia">
                        <span class="oo">-</span>
                        <span class="oo">1</span>
                        <span class="oo">+</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="lil">
            <div class="lil_w">
                您已经<span>浏览</span>过的商品
                <span class="lan"></span>
            </div>
        </div>

        <div class="read">
            <div class="read_w">
                <div class="rel">
                    <a href="details.html">
                        <img src="../../assets/img/6-1、微网站详情_05.png" alt="">
                    </a>
                    <div class="eq"></div>
                    <p class="vios">VERFO LAB</p>
                    <p class="sah"> 现代简约时尚布艺沙发</p>
                    <div class="xia">
                        REM
                        <span>800</span>
                        <a href="shopcar.html">
                            <button>
                                <i class="iconfont iconadd121"></i>
                                点击购买
                            </button>
                        </a>
                    </div>
                </div>
                <div class="rel">
                    <a href="details.html">
                        <img src="../../assets/img/6-1、微网站详情_003.png" alt="">
                    </a>
                    <div class="eq"></div>
                    <p class="vios">VERFO LAB</p>
                    <p class="sah"> 现代简约时尚布艺沙发</p>
                    <div class="xia">
                        REM
                        <span>800</span>
                        <a href="shopcar.html">
                            <button>
                                <i class="iconfont iconadd121"></i>
                                点击购买
                            </button>
                        </a>
                    </div>
                </div>
                <div class="rel">
                    <a href="details.html">
                        <img src="../../assets/img/6-1、微网站详情_05.png" alt="">
                    </a>
                    <div class="eq"></div>
                    <p class="vios">VERFO LAB</p>
                    <p class="sah"> 现代简约时尚布艺沙发</p>
                    <div class="xia">
                        REM
                        <span>800</span>
                        <a href="shopcar.html">
                            <button>
                                <i class="iconfont iconadd121"></i>
                                点击购买
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="deta">
            <div class="dat_bx">
                <span class="shor"></span>
                <span class="qwe"></span>
                <p>COMMODITY DETAILS</p>
                <p class="xq">商品 <span>详情</span></p>
                <span class="bln"></span>
            </div>
        </div>



        <div class="big" v-for="(detail,index) in goods.gdetail1" :key="index">
            <img :src="host + detail" alt="">
        </div>

        <div class="deta" style="margin-top:0.64rem;">
            <div class="dat_bx">
                <span class="shor"></span>
                <span class="qwe"></span>
                <p>COMMODITY DETAILS</p >
                <p class="xq">服务 <span>保障</span></p >
                <span class="bln"></span>
            </div>
        </div>

        <div class="liuc">
            <div class="li_w">
                <div class="sss">
                    <div class="un">
                        <span class="op">1</span>
                        <span class="small"></span>
                        <span class="sma"></span>
                    </div>
                    <div class="un">
                        <span class="op">2</span>
                        <span class="small"></span>
                        <span class="sma"></span>
                    </div>
                    <div class="un">
                        <span class="op">3</span>
                        <span class="small"></span>
                        <span class="sma"></span>
                    </div>
                    <div class="un">
                        <span class="op">4</span>
                        <span class="small"></span>
                        <span class="sma"></span>
                    </div>

                    <span class="cerr"></span>
                </div>
                <ul class="xxx">
                    <li>优质选材</li>
                    <li>科技生产</li>
                    <li>精湛工艺</li>
                    <li>贴心包装</li>
                </ul>
            </div>
            <div style="height:0.98rem;"></div>
        </div>


        <!-- 推荐商品开始 -->
        <div class="tuijian" v-if="Recommendgoods">
            <span></span>
            <p>推荐商品</p>
        </div>
        <div class="foorcontent" v-if="Recommendgoods">
            <ul>
                <li class="box" v-for="item in Recommendgoods" :key="item.gid">
                    <router-link :to="{name:'detail',query:{gid:item.gid,typeid:item.cid}}">
                        <div class="top">
                            <img :src="host + item.gthumb" alt="">
                        </div>
                    </router-link>
                    <div class="z-center">
                        <p class="one"></p>
                        <p class="logo">{{item.gename}}</p>
                        <span class="two">{{item.gname}}</span>
                    </div>
                    <div class="bottom">
                        <b>¥{{item.gprice}}</b>
                        <a href="orderSure.html">
                            <i class="iconfont iconyuanquanjiahao"></i>
                            <span class="mai">点击购买</span>
                        </a>

                    </div>
                </li>

            </ul>
        </div>

        <div class="jiag">
            <a href="">
                <i class="iconfont iconshoucang"></i>
                <span>收藏</span>
            </a>

            <span class="ko" @click="addCart">加入购物车</span>

            <button>立即购买</button>
        </div>
    </div>
</template>

<script>
    // 组件
    import headers from "../../components/headers/headers";

    //请求
    import code from '../../../config/code';
    import goods from "../../../api/goods";
    import cart from"../../../api/cart";

    export default {
        name: "detail",
        components:{
            headers
        },
        data(){
            return {
                goods:[],
                //历史记录
                Historygoods:[],
                //推荐商品
                Recommendgoods:[],
                bannerlength:1,
            }
        },
        methods:{
            chagecolor(color,index){
                this.goods.gcolor1.forEach((ele,i)=>{
                    this.$refs.color[i].style.cssText = `
                        background-color:#fff;
                        border-color:${ele};
                        box-shadow:none;
                    `;
                    this.$refs.color[index].style.cssText = `
                        background-color:${color};
                        border-color:#fff;
                        box-shadow:0 0 0 0.02rem ${color},0 0 0 0.1rem #ffffff,0 0 0 0.11rem ${color};
                    `
                })
            },
            handleChange(index) {
                this.bannerlength = index + 1;
            },
            //获取某一条商品
            getoneGoods(gid){
                goods.queryGood(gid).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS && result.data){
                        this.goods = result.data;
                        this.goods.gbanner1 = this.goods.gbanner.split(',');
                        this.goods.gcolor1 = this.goods.gcolor.split(',');
                        this.goods.gdetail1 = this.goods.gdetail.split(',');
                        this.$nextTick(()=>{
                            this.chagecolor(this.goods.gcolor1[0],0)
                        })
                    }else{
                        this.$toast(result.msg);
                    }
                })
            },
            // 推荐商品
            getRecommendgoods(gid,typeid){
                goods.RecommendGoods(gid,typeid).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS && result.data.length){
                            this.Recommendgoods = result.data;
                    }else{
                        this.$toast(result.msg);
                    }
                })
            },
            //历史记录
            getHistorygoods(gid){
                if(!localStorage.getItem('historys')){
                    localStorage.setItem('historys',gid);
                }
                let his = localStorage.getItem('historys');
                let arr = his.split(',');
                let arrs = arr.some(ele=>ele.gid);
                // if(!arrs){
                //
                // }
                console.log(arrs);

            },
            //购物车添加商品
            addCart(){
                let gid = this.$route.query.gid;
                let price = this.goods.gprice;
                cart.addGoods({gid,price}).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        this.$store.commit('increment');
                        this.$toast(result.msg);
                    }else{
                        this.$toast(result.msg);
                    }
                });
            },
        },
        computed:{
            host(){
                return this.$store.state.host;
            }
        },
        watch:{
            $route(newv){
                let {typeid,gid} = newv.query;
                this.getoneGoods(gid);
                this.getRecommendgoods(gid,typeid);
            }
        },
        mounted() {
            let {gid,typeid} = this.$route.query;
            this.getoneGoods(gid);
            this.getRecommendgoods(gid,typeid);
            this.getHistorygoods(gid);
        }
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
    @import "../../assets/css/detail.css";
</style>