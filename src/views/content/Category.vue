<template>
    <div>
        <headers></headers>

        <!-- 搜索栏 -->
        <div class="search">
            <div class="kuang">
                <i class="iconfont iconfangdajing"></i>
                <input type="text" class="sear" placeholder="搜索店内精品">
            </div>
            <a href="javascript:;"><button class="bu">搜索</button></a>
        </div>
        <!-- 中心部分 -->
        <div class="shortcenter">
            <div class="left">
                <ul>
                    <li class="kuai" style="margin:0;"
                        :class="[0 == params.typeid? 'k1':'']"
                        @click="chagetype(0)"
                    >全部宝贝</li>
                    <li class="kuai" v-for="item in categoryLevel" :key="item.cid"
                        :class="[item.cid == params.typeid? 'k1':'']"
                        @click="chagetype(item.cid)"
                    >
                        {{item.cname}}
                    </li>
                </ul>
            </div>
            <div id="roll">
<!--                <div class="rollBox">-->
                    <div class="right"
                         v-infinite-scroll="getgoods"
                         infinite-scroll-disabled="loading"
                         infinite-scroll-distance="200"
                    >
                        <div class="topbox">
                            <div class="top">
                                <mt-swipe :auto="3000">
                                    <mt-swipe-item>
                                        <img src="../../assets/img/微网站我的1.png" alt="">
                                    </mt-swipe-item>
                                    <mt-swipe-item>
                                        <img src="../../assets/img/微网站我的1.png" alt="">
                                    </mt-swipe-item>
                                    <mt-swipe-item>
                                        <img src="../../assets/img/微网站我的1.png" alt="">
                                    </mt-swipe-item>
                                </mt-swipe>

                            </div>
                            <div class="cen">
                                <span class="l"></span>
                                <span class="c">新品到店</span>
                                <span class="r"></span>
                            </div>
                        </div>
                        <div class="bottom">
                            <ul>
                                <li class="ti" v-for="item in goods" :key="item.gid">
                                    <router-link :to="{name:'detail',query:{gid:item.gid,typeid:params.typeid}}">
                                        <img :src="host + item.gthumb" alt="">
                                    </router-link>
                                    <p>{{item.gname}}</p>
                                </li>

                            </ul>
                        </div>
                    </div>
<!--                </div>-->
            </div>

        </div>

        <tabs :activeindex="2"></tabs>
    </div>
</template>

<script>
    // 组件
    import tabs from "../../components/tabs/tabs";
    import headers from "../../components/headers/headers";

    // 请求
    import code from '../../../config/code';
    import category from '../../../api/category';
    import goods from "../../../api/goods"
    export default {
        name: "Category",
        components:{
            tabs,
            headers
        },
        data(){
            return {
                categoryLevel:[],
                goods:[],
                params:{
                    typeid:0,
                    limit:12,
                    page:0,
                },
                loading:false,
            }
        },
        methods:{
            //获取分类栏目
            getcategory(){
                category.getCategoryLevel1().then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        this.categoryLevel = result.data;
                    }else{
                        alert(result.msg)
                    }
                })
            },
            //点击切换
            chagetype(id){
                if(this.params.type == id){
                    return;
               }
                this.params.typeid = id;
                this.params.page = 0;
            },
            //获取商品数据
            getgoods(){
                this.params.page++;
                this.loading = true;
                goods.queryCoodss(this.params).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        if(result.data.length){
                            this.goods.push(...result.data);
                            this.$nextTick(()=>{
                                this.loading = false;
                            })
                        }else{
                            this.$toast('暂无数据');
                        }
                    }else{
                        this.$toast(result.msg);
                    }
                })
            },
        },
        watch:{
            "params.typeid"(){
                this.goods = [];
                this.getgoods();
            }
        },
        computed:{
            host(){
                return this.$store.state.host;
            }
        },
        mounted() {
            this.getcategory();
        }

    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
    @import "../../assets/css/sort.css";
</style>