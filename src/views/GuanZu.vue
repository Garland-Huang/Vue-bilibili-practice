<template>
    <div class="guanzu">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">关注</h1>
        </header>
        
        <ul class="mui-table-view">
                    <li
                        class="mui-table-view-cell mui-media"
                        v-for="(item,index) in this.$store.state.dongtaiGuanzu"
                        :key="index"
                    >
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" :src="item.img">
                            <div class="mui-media-body">
                                {{item.name}}
                                <p class="mui-ellipsis">{{item.miaoshu}}</p>
                            </div>
                        </a>
                    </li>
                </ul>
    </div>
</template>
<script>
import mui from "../assets/mui/js/mui";
export default {

};
</script>
<style lang="scss">
*{
    touch-action: pan-y;
}
.guanzu {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #fff;
}
.mui-table-view{
    margin-top:44px;
}
</style>

