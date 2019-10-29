<template>
    <div class="footer">
        <div class="box">
            <router-link to="/">
                <i class="iconfont iconyizi" :class="[activeindex==1?'fot-i':'']"></i>
                <span class="text" :class="[activeindex==1?'fot-f':'']">首页</span>
            </router-link>
        </div>
        <div class="box">
            <router-link to="/Category">
<!--            <a href="/Category">-->
                <i class="iconfont iconicon--" :class="[activeindex==2?'fot-i':'']"></i>
                <span class="text" :class="[activeindex==2?'fot-f':'']">分类</span>
            </router-link>
<!--            </a>-->
        </div>
        <div class="box sub" >
            <div class="number" v-if="$store.state.total">{{$store.state.total}}</div>
            <router-link to="/shopping">
                <i class="iconfont icongouwuche" :class="[activeindex==3?'fot-i':'']"></i>
                <span class="text" :class="[activeindex==3?'fot-f':'']">购物车</span>
            </router-link>
        </div>
        <div class="box">
            <router-link to="/my">
                <i class="iconfont iconwode" :class="[activeindex==4?'fot-i':'']"></i>
                <span class="text" :class="[activeindex==4?'fot-f':'']">我的</span>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "tabs",
        props:['activeindex']
    }
</script>

<style scoped>
    @import "../../assets/css/tabs.css";
</style>