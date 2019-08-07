<template>
    <div class="guanzu">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">我的动态</h1>
        </header>
        <div
            class="mui-card page_margin"
            v-for="(item,index) in this.$store.state.myDongTai"
            :key="index"
        >
            <!--页眉，放置标题-->
            <div class="mui-card-header card_header">
                <div>
                    <img :src="item.img" alt>
                    <span>{{item.name}}</span>
                    <p>{{item.time}}</p>
                </div>
            </div>
            <!--内容区-->
            <article class="mui-card-content card_content">
                <div>
                    <div class="contentBox">{{item.zhuanpin}}</div>
                    <div class="card_fw">
                        <div class="card-wrap_fw">
                            <div class="m-img-box_fw">
                                <img :src="item.fw.img" alt>
                            </div>
                            <div class="m-box-col_fw">
                                <h3>@{{item.fw.name}}</h3>
                                <h4>{{item.fw.content}}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <div class="mui-card-footer card_footer">
                <span></span>
            </div>
        </div>
    </div>
</template>
<script>
import mui from "../assets/mui/js/mui";
export default {};
</script>
<style lang="scss">
* {
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
.page_margin {
    margin-top: 44px;
    .mui-card-footer{
        min-height: 20px;
    }
}
</style>

