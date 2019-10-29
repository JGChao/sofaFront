<template>
    <div>
        <headers :isshow="true"></headers>
        <!-- 导航栏结束 -->
        <!-- 收货地址开始 -->
        <div class="site" v-if="Receiving">
            <div class="site3">
                <p>收货地址</p>
                <span class="yellow"></span>
            </div>
            <div class="bottom">
                <div class="home">
                    <b>{{Receiving.label}}</b>
                </div>
                <p class="homesite">{{Receiving.region}}</p>
                <p class="home2">{{Receiving.detress}}</p>
                <span class="phone">{{Receiving.contacts}}  {{Receiving.tel}}</span>
                <a href="addressAdd.html" class="fanhui"><i class="iconfont iconzuo1"></i></a>
            </div>
            <div class="pencil">
                <p class="pencil2">
                </p>
                <p class="pencil3"></p>
                <p class="pencil2">
                </p>
                <p class="pencil3"></p>
                <p class="pencil2">
                </p>
                <p class="pencil3"></p>
                <p class="pencil2">
                </p>
                <p class="pencil3"></p>
                <p class="pencil2">
                </p>
                <p class="pencil3"></p>
            </div>
        </div>
        <!-- 收货地址结束 -->
        <!-- 订单确认开始 -->
        <div class="order" v-if="orders">
            <div class="order2">
                <div class="site3">
                    <p>订单确认</p>
                    <span class="yellow"></span>
                </div>
                <div class="center" v-for="item in orders.goods" :key="'goods'+ item.gid">
                    <div class="z-le">
                        <div class="img">
                            <img :src="host + item.gthumb" alt="">
                        </div>
                        <div class="BOS">
                            <p class="BOS2">{{item.gename}}</p>
                            <p class="BOS3">{{item.gname}}</p>
                            <p class="BOS4">{{item.gtype}}</p>
                        </div>
                    </div>
                    <div class="ri">
                        <b class="rmb">{{item.gprice}} <span class="rmb2">RMB</span></b>
                        <span class="rmb3">X{{item.num}}</span>
                        <span class="rmb4">{{item.gstock}}</span>
                    </div>

                </div>
                <div class="site3 site4">
                    <p style="font-size:0.24rem;">商品总价</p>
                    <span class="total" style="font-size:0.24rem">{{orders.price}} <span class="total" style="font-size:0.18rem;">RMB</span></span>
                </div>
                <div class="site3 site4" v-for="item in orders.goods" :key="'goodss'+ item.gid">
                    <p style="font-size:0.24rem;">运费</p>
                    <span class="total" style="font-size:0.24rem">{{item.gdel}}</span>
                </div>
                <div class="remarks">
                    <p style="font-size:0.12rem;">备注</p>
                    <input type="text" placeholder="限45个字（请将购买需求在备注中做详细说明）" style="padding-left:0.36rem;font-size:0.18rem;">
                </div>
            </div>

        </div>
        <!-- 订单确认结束 -->
        <!-- 发票信息开始 -->
        <div class="bill" v-if="orders">
            <div class="bill2">
                <div class="site3">
                    <p>发票信息</p>
                    <span class="yellow"></span>
                </div>
                <div class="site3">
                    <p style="font-size:0.24rem;">不开发票</p>
                </div>
            </div>
        </div>
        <!-- 发票信息结束 -->

        <!-- Tab开始 -->
        <div class="payoff" v-if="orders">
            <div class="left"><span class="fone">付款 </span>
                <span class="fone2">{{orders.price}}</span>
                <span class="fone3">RMB</span>
            </div>
            <a href="javascript:;" class="right" @click="ordersuccess"><b>去支付</b></a>
        </div>
        <!-- Tab结束 -->
    </div>
</template>

<script>
    import headers from "../../components/headers/headers";

    //请求
    import order from '../../../api/orders';
    import code from '../../../config/code';

    export default {
        name: "orders",
        components:{
            headers
        },
        data(){
            return {
                //收货信息
                Receiving:{
                    label:'住宅',
                    region:'山西省 太原市 小店区 凯通大厦',
                    detress:'杨家堡小区南4号楼401',
                    contacts:'王清',
                    tel:'18735184726'
                },
                orders:null
            }
        },
        methods:{
            getOrders(ordernum){
                order.getOrdersDetail(ordernum).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        this.orders = result.data;
                    }else{
                        this.$toast(result.msg);
                    }
                });
            },
            ordersuccess(){
                this.$router.push({name:'successful'})
            }
        },
        computed:{
            host(){
                return this.$store.state.host;
            }
        },
        mounted() {
           let ordernum = this.$route.query.ordernum;
           this.getOrders(ordernum);
        }

    }
</script>

<style scoped>
    @import "../../assets/css/orderSure.css";
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
</style>