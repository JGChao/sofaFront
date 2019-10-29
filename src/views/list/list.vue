<template>
    <div>
        <headers :isshow="true"></headers>
            <!-- 推荐商品开始 -->
            <div class="Bigbox">
                <mt-loadmore :top-method="loadTop" ref="loadmore"
                             :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
                            >
                    <ul>
                    <li class="box" v-for="item in goods" :key="item.gid">
                        <router-link tag="div"  class="top"
                                     :to="{name:'detail',query:{gid:item.gid,typeid:params.typeid}}"
                        >
                            <img :src="host + item.gthumb" alt="">
                        </router-link>
                        <div class="content">
                            <p class="one"></p>
                            <p class="logo">{{item.gename}}</p>
                            <span class="two">{{item.gname}}</span>
                        </div>
                        <div class="bottom">
                            <b>￥{{item.gprice}}</b>
                            <a href="shopcar.html">
                                <i class="iconfont iconyuanquanjiahao"></i>
                                <span class="mai">点击购买</span>
                            </a>

                        </div>
                    </li>
                </ul>
                </mt-loadmore>
            </div>
            <!-- 推荐商品结束 -->
    </div>
</template>

<script>
    // 组件
    import headers from "../../components/headers/headers";
    // 请求
    import code from '../../../config/code';
    import goods from "../../../api/goods"
    export default {
        name: "list",
        components:{
            headers
        },
        data(){
          return {
              params:{
                  typeid:0,
                  limit:8,
                  page:0,
              },
              goods:[],
              allLoaded:false,
          }
        },
        methods:{
            //下拉 获取
            getgoodstop(){
                this.params.page++;
                goods.queryCoodss(this.params).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        if(result.data.length){
                            this.goods.unshift(...result.data);
                        }else{
                            this.$toast('暂无数据');
                        }
                    }else{
                        this.$toast(result.msg);
                    }
                })
            },
            //上拉获取
            getgoodsbottom(){
                this.params.page++;
                goods.queryCoodss(this.params).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        if(result.data.length){
                            this.goods.push(...result.data);
                        }else{
                            this.$toast('暂无数据');
                            this.allLoaded = true;// 若数据已全部获取完毕
                        }
                    }else{
                        this.$toast(result.msg);
                    }
                })
            },
            //手动调用 loadmore 的 onTopLoaded 事件 下拉
            loadTop() {
                this.getgoodstop();
                this.$refs.loadmore.onTopLoaded();
            },
            //上拉
            loadBottom() {
                this.getgoodsbottom();
                this.$refs.loadmore.onBottomLoaded();
            },
        },
        computed:{
            host(){
                return this.$store.state.host;
            }
        },
        mounted() {
            this.getgoodstop();
        }
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
    @import "../../assets/css/search.css";
</style>