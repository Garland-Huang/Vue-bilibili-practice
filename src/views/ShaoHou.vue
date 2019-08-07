<template>
    <div class="shaohou">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">稍后再看</h1>
        </header>
        <div class="mui-content">
            <div class="mui-row">
                <div
                    class="mui-col-sm-6 mui-col-xs-6"
                    v-for="(item,index) in this.$store.state.shaoHou"
                    :key="index"
                >
                    <div v-if="item">
                        <li class="mui-table-view-cell shipin" @click="goXiangqing(item._id)">
                            <img :src="item.thumbnailImg" alt>
                            <div>
                                <p class="title">{{item.biaoti}}</p>
                                <p class="miaoshu">{{item.biaoqian}}</p>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mui from "../assets/mui/js/mui";
export default {
    methods: {
        // 带参数跳转至详情页
        goXiangqing(id) {
            console.log(id);
            this.$router.push({
                path: "/xiangqing",
                query: {
                    id: id
                }
            });
        }
    }
};
</script>
<style lang="scss">
*{
    touch-action: pan-y;
}
.shaohou {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #fff;
}
.mui-content {
    background-color: #fff;
    .shipin {
        img {
            margin: 0 auto;
            display: block;
            height: 82px;
        }
        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 5px;
        }
        p.miaoshu {
            color: #ccc;
            font-size: 12px;
        }
    }
}
</style>

