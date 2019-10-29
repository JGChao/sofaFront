<template>
    <div>
        <headers :isshow="true">
            我的订单
        </headers>

        <div class="listss" >
            <ul v-if="titleOrder.length">
                <li v-for="(item,index) in titleOrder"
                        :key="index"
                        :class="[item.state == currentType? 'z-tab li': '']"
                        @click="changeState(item.state)">{{item.name}}</li>
            </ul>
        </div>
        <div class="orderbox" v-if="orders.length">
            <div class="goods" v-for="(items,index) in orders" :key="index">
                <div class="goods_w">
                    <router-link to="{name:detail,query:{gid:items.goods.gid,cid:items.goods.cid}}">
                        <img :src="host + items.goods.gthumb" alt="">
                    </router-link>
                    <div class="titl">
                        <p>{{items.goods.gname}}<span>{{items.goods.gename}}</span>
                            <span class="wue" style="padding-left: 0.5rem">￥{{items.goods.gprice}}</span>
                        </p>
                        <p>{{items.goods.gtype}}</p>
                        <p style="margin-top: 0.37rem;">{{items.create_time}}</p>
                        <div class="fuk">
                            <h6 class="pp">{{items.price}}<span>REM</span></h6>
                            <p>{{items.states}}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headers from "../../components/headers/headers";

    //请求
    import order from "../../../api/orders"
    import code from '../../../config/code';

    export default {
        name: "myOrder",
        components:{
            headers,
        },
        data(){
            return{
                titleOrder:[],
                orders:[],
                currentType:'',
            }
        },
        methods:{
            //获取订单分类
            getorderstate(){
                this.titleOrder = [
                    {state: 0,name:'全部'},
                    {state: 1,name:'待付款'},
                    {state: 2,name:'待发货'},
                    {state: 3,name:'待收货'},
                    {state: 4,name:'待评价'}
                ]
                this.currentType = this.titleOrder[0].state;
            },
            //点击订单分类
            changeState(state){
                if(state == this.currentType){
                    return;
                }
                this.currentType = state;
            },
            //获取订单分类信息
            getorders(){
                order.orderState(this.currentType).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        this.orders = result.data;
                    }else{
                        this.$toast(result.msg);
                    }
                });
            }
        },
        watch:{
            //监听state变化
            currentType(){
                this.orders = [];
                this.getorders();
            }
        },
        computed:{
            host(){
                return this.$store.state.host;
            }
        },
        mounted() {
            this.getorderstate();
        }
    }
</script>

<style scoped src="../../assets/css/myOrder.css"></style>
<style scoped>
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";

</style>