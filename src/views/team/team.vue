<template>
    <div>
        <headers :isshow="true"></headers>
        <!-- 推荐商品开始 -->
        <div class="Bigbox">
            <mt-loadmore :top-method="loadTop" ref="loadmore"
                         :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
            >
                <ul>
                    <li class="box" v-for="item in team" :key="item.id">
                        <div   class="top">
                            <img :src="host + item.avatar" alt="">
                        </div>
                        <div class="content">
                            <p class="logo">{{item.names}}</p>
                            <span class="two">{{item.des}}</span>
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
    import team from "../../../api/team"
    export default {
        name: "team",
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
                team:[],
                allLoaded:false,
            }
        },
        methods:{
            //下拉 获取
            getteamstop(){
                this.params.page++;
                team.queryTeams(this.params).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        if(result.data.length){
                            this.team.unshift(...result.data);
                        }else{
                            this.$toast('暂无数据');
                        }
                    }else{
                        this.$toast(result.msg);
                    }
                })
            },
            //上拉获取
            getteambottom(){
                this.params.page++;
                team.queryTeams(this.params).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        if(result.data.length){
                            this.team.push(...result.data);
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
                this.getteamstop();
                this.$refs.loadmore.onTopLoaded();
            },
            //上拉
            loadBottom() {
                this.getteambottom();
                this.$refs.loadmore.onBottomLoaded();
            },
        },
        computed:{
            host(){
                return this.$store.state.host;
            }
        },
        mounted() {
            this.getteamstop();
        }
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
    @import "../../assets/css/search.css";
</style>