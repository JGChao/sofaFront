<template>
    <!-- 头部 -->
    <div id="header">
        <div class="hea_w">
            <a href="javascript:history.back();" class="w-back">
                <i class="iconfont iconzuo" v-show="isshow"></i>
            </a>
            <slot>
                <span class="title">V<span>I</span>COR</span>
            </slot>
            <a href="" class="set">
                <span class="itm"></span>
                <span class="itm"></span>
                <span class="itm"></span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headers",
        props:['isshow']
    }
</script>

<style scoped>
    @import "../../assets/css/headers.css";
</style>