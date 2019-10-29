<template>
    <div>
        <headers :isshow="false"></headers>
        <!-- 购物车选购开始 -->
        <div class="shops" v-if="cart">
            <div class="car" v-for="goods in cart.goods">
                <a href="javascript:;" class="car2" @click.prevent="changeState(goods.gid)">
                    <div class="car3" v-if="goods.state" ></div>
                </a>
                <div class="picture">
                    <img :src="host + goods.gthumb" alt="">
                </div>
                <div class="font">
                    <p class="font2">{{goods.gename}}</p>
                    <p class="font3">{{goods.gname}}</p>
                    <h6>{{goods.gtype}}</h6>
                    <p class="font4">{{goods.gprice}}<span class="fontsamll">RMB</span></p>
                </div>
                <div class="button">
                    <i class="iconfont iconjian" @click="redNumber(goods.gid,goods.gprice,'red')"></i>
                    <span class="amount">{{goods.num}}</span>
                    <i class="iconfont iconjia" @click="addNumber(goods.gid,goods.gprice,'add')"></i>
                </div>
            </div>
        </div>
        <!-- 购物车选购结束 -->

        <!-- 去结算开始 -->
        <div class="balance" v-if="cart">
            <div class="balance2">
                <div class="left">
                    <button  :style="{backgroundColor:this.cart.goods.every(ele=>ele.state) ? '#ffcb3f' : '#fff'}"
                             @click="changeAllState"
                    ></button>
                    <span style="font-size: 0.24rem;">全选</span>
                    <div class="amountto">
                        <span style="font-size: 0.26rem">合计:</span>
                        <b style="color:#ffcb3f;">{{cart.price}}</b>
                        <span style="font-size: 0.18rem;">RMB</span>
                        <p style="font-size:0.18rem;color:#9D9D9D;color: rgb(255, 203, 63);">总数：{{cart.total}}</p>
                    </div>
                </div>
                <a href="javascript:;" class="right" @click.prevent="goplay">
                    <b>去结算</b>
                </a>
            </div>
        </div>
        <!-- 去结算结束 -->
        <div v-else="" class="else">
            <img src="../../assets/img/shopping.gif" alt="" class="shopimg">
        </div>
        


        <tabs :activeindex="3"></tabs>
    </div>
</template>

<script>
    // 组件
    import tabs from "../../components/tabs/tabs";
    import headers from "../../components/headers/headers";

    //请求
    import code from '../../../config/code';
    import cart from"../../../api/cart";
    import { mapMutations } from 'vuex';
    import order from '../../../api/orders'

    export default {
        name: "shopping",
        components:{
            tabs,
            headers
        },
        data(){
            return {
                cart:null,
            }
        },
        methods:{
            getCarts(){
                cart.getCart().then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        this.cart = result.data;
                    }else{
                        this.$toast(result.msg);
                    }
                });
            },
            //加
            addNumber(gid,price,type){
                cart.upGoodsCount(gid,price,type).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        let goods = this.cart.goods.filter(ele=>ele.gid == gid)[0];
                        goods.num++;
                        this.increment();
                        this.calcPriceCount();
                    }else{
                        this.$toast(result.msg);
                    }
                });
            },
            //减
            redNumber(gid,price,type){
                cart.upGoodsCount(gid,price,type).then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        let goods = this.cart.goods.filter(ele=>ele.gid == gid)[0];
                        goods.num--;
                        this.reduce();
                        if(goods.num == 0){
                            this.cart.goods = this.cart.goods.filter(ele => ele.gid != gid);
                        }
                        this.calcPriceCount();
                    }else{
                        this.$toast(result.msg);
                    }
                });
                
            },
            //加
            ...mapMutations(['increment']),
            //减
            ...mapMutations(['reduce']),
            //状态
            changeState(gid){

                let goods=this.cart.goods.filter(ele=>ele.gid==gid)[0];
                goods.state = !goods.state * 1;
                let amout = goods.state? goods.num : -goods.num;
                this.$store.dispatch('changeTotal', {
                    amount: amout,
                })
                this.calcPriceCount();
            },
            //商品数量，商品总价
            calcPriceCount(){
                let activeGoods = this.cart.goods.filter(ele=>ele.state);
                let total = 0, price = 0;
                total = activeGoods.reduce(function(prev, cur) {
                    return cur.num + prev;
                }, 0);
                price = activeGoods.reduce(function(prev, cur) {
                    return cur.num*cur.gprice + prev;
                }, 0);
                price = parseFloat(price).toFixed(2);
                this.cart.total = total;
                this.cart.price = price;
            },
            //去结算
            goplay(){
                if(!this.cart.goods.some(ele=>ele.state)){
                    return;
                }
                order.placeOrder().then(res=>{
                    let result = res.data;
                    if(result.code == code.CODE_SUCCESS){
                        this.$router.push({name:'orders',query:{ordernum:result.data}});
                    }else{
                        this.$toast(result.msg);
                    }
                });

            },
            //点击全选状态
            changeAllState(){
                if(this.cart.goods.every(ele=>ele.state)){
                    this.cart.goods.forEach(ele=>{
                        ele.state = 0;
                        let amout = ele.state? ele.num : -ele.num;
                        this.$store.dispatch('changeTotal', {
                            amount: amout,
                        });
                        this.calcPriceCount();
                    })
                }else{
                    this.cart.goods.forEach(ele=>{
                        ele.state = 1;
                        let amout = ele.state? ele.num : -ele.num;
                        this.$store.dispatch('changeTotal', {
                            amount: amout,
                        });
                        this.calcPriceCount();
                    })
                }
            },
        },
        computed:{
            host(){
                return this.$store.state.host;
            }
        },
        mounted() {
            this.getCarts();
        }
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1209019_eo4e9k086mv.css";
    @import "../../assets/css/shopCart.css";

    .else ,.shopimg{
        width: 4rem;
        height: 3rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    body{
        background: #fff;
    }
</style>