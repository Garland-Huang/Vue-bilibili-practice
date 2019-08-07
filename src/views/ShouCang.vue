<template>
    <div class="shou">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">我的收藏</h1>
        </header>

        <van-tabs class="fenlie" v-model="active">
            <van-tab title="视频">
                <div class="mui-content">
                    <div class="mui-row">
                        <div
                            class="mui-col-sm-6 mui-col-xs-6"
                            v-for="(item,index) in this.$store.state.shouCang"
                            :key="index"
                        >
                            <div v-if="item">
                                <li
                                    class="mui-table-view-cell shipin"
                                    @click="goXiangqing(item._id)"
                                >
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
            </van-tab>
            <van-tab title="动态">
                <ul class="mui-table-view">
                    <li
                        class="mui-table-view-cell mui-media"
                        v-for="(item,index) in this.$store.state.dongtaishou"
                        :key="index"
                    >
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" :src="item.img">
                            <div class="mui-media-body">
                                {{item.name}}
                                <p class="mui-ellipsis">{{item.content}}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import mui from "../assets/mui/js/mui";
export default {
    data() {
        return {
            active: 2
        };
    },
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
    },
    created() {

    }
};
</script>
<style lang="scss">
* {
    touch-action: pan-y;
}
.shou {
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
.fenlie {
    margin-top: 44px;
}
.van-tabs--line{
    // padding-top: 1px;
}
</style>

