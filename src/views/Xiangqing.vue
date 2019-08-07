<template>
    <div class="mui-views mui-fullscreen" data-view="1">
        <div class="mui-view">
            <mt-header title="详情">
                <router-link to="/home" slot="left">
                    <mt-button icon="back">首页</mt-button>
                </router-link>
            </mt-header>

            <div class="mui-pages">
                <div id="setting" class="mui-page mui-page-center" style>
                    <!--页面主内容区开始-->
                    <div class="mui-page-content">
                        <div class="mui-scroll">
                            <!-- 播放视频画面 -->
                            <iframe
                                id="myIframe"
                                name="myIframe"
                                :src="shipinTem.shipinIframe"
                                scrolling="no"
                                border="0"
                                frameborder="no"
                                framespacing="0"
                                allowfullscreen="true"
                            ></iframe>
                            <img src="../assets/img/adv3.png" alt>
                            <!-- 视频信息 -->
                            <div class="shipinInfo">
                                <!-- 视频题目 -->
                                <div class="title">
                                    <a>
                                        <img src="../assets/img/fire.svg" alt>热门
                                    </a>
                                    <span>{{shipinTem.biaoti}}</span>
                                    <!-- <span>转生成为女人？主角的操作震撼我妈30年【高能吐槽】</span> -->
                                </div>
                                <!-- 内容 -->
                                <div class="content">
                                    <a>
                                        <img src="../assets/img/touxiangTem.jpg" alt>
                                        <!-- <img :src="shipinTem.touxiang" alt> -->
                                        {{shipinTem.fabuRen}}
                                    </a>
                                    <div class="bofang">
                                        <span>{{shipinTem.bofangNum}}</span>
                                        <span>{{shipinTem.danmuNum}}</span>
                                        <span>{{shipinTem.fabuTime}}</span>
                                    </div>
                                    <div class="jieshao">
                                        <span class="mui-icon mui-icon-close">未经作者授权禁止转载</span>
                                        <p>{{shipinTem.jieshao}}</p>
                                    </div>
                                </div>

                                <!-- 标签 -->
                                <ul class="biaoqian">
                                    <li v-for="(item,index) in biaoqianList" :key="index">{{item}}</li>
                                </ul>
                            </div>
                            <!-- 点赞，投币，收藏 三连操作 -->
                            <div class="sanlian">
                                <li>
                                    <span
                                        class="van-icon van-icon-like-o"
                                        @click="addLike()"
                                        ref="likeSpan"
                                    ></span>
                                </li>
                                <li>
                                    <span
                                        class="van-icon van-icon-star-o"
                                        @click="addShouCang()"
                                        ref="shouCangSpan"
                                    ></span>
                                </li>
                                <li>
                                    <span
                                        class="van-icon van-icon-gold-coin-o"
                                        @click="giveCoin()"
                                        ref="coinSpan"
                                    ></span>
                                </li>
                            </div>

                            <!-- 其他视频推荐部分 -->
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell mui-media"  v-for="(item,index) in tuijianShipin" :key="index" @click="changeXiangqing(item._id)">
                                    <a href="javascript:;">
                                        <img
                                            class="mui-media-object mui-pull-left"
                                            :src="item.thumbnailImg"
                                        >
                                        <div class="mui-media-body" >
                                            {{item.biaoti}}
                                            <p class="mui-ellipsis">{{item.fabuRen}}</p>
                                            <p
                                                class="mui-ellipsis"
                                            >{{item.bofangNum}}{{item.shoucang}}人收藏</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                            <!-- 其他视频推荐部分 end -->
                            <div class="comments">
                                <p>评论(123)</p>
                                <p class="shuoDian shuoDianTo">
                                    <img src="../assets/img/fire.svg" alt>
                                    <input type="text" placeholder="说点什么吧" v-model="commentVal">
                                    <button @click="addComment">提交评论</button>
                                </p>
                                <ul>
                                    <li
                                        class="shuoDian"
                                        v-for="(item,index) in $store.state.commentsInfo"
                                        :key="index"
                                    >
                                        <img src="../assets/img/fire.svg" alt>
                                        <div>
                                            <p>{{item.name}}</p>
                                            <p>{{item.content}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--页面主内容区结束-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            commentVal: "",
            shipinTem: {},
            biaoqianList: [],
            tuijianShipin: []
        };
    },
    methods: {
        addComment() {
            this.$store.commit("addComment", {
                name: "cris",
                content: this.commentVal
            });
            this.commentVal = "";
        },
        getSomeInfo() {
            var arrTem = [];
            var allData = this.$store.state.shipinList1;
            for (var i = 0; i < 20; i++) {
                var random = Math.floor(Math.random() * allData.length);
                arrTem.push(allData[random]);
            }
            this.tuijianShipin = arrTem;
        },
        // 添加稍后再看
        addLike() {
            var olikeSpan = this.$refs.likeSpan;
            var storeLike = this.$store.state.shaoHou;
            // console.log("likeData====>", this.shipinTem);
            if (olikeSpan.classList.contains("van-icon-like-o")) {
                olikeSpan.classList.remove("van-icon-like-o");
                olikeSpan.classList.add("van-icon-like");
                storeLike.push(this.shipinTem);
            } else {
                olikeSpan.classList.remove("van-icon-like");
                olikeSpan.classList.add("van-icon-like-o");
                for (let i = 0; i < storeLike.length; i++) {
                    if (storeLike[i]._id == this.shipinTem._id) {
                        storeLike.splice(i, 1);
                    }
                }
            }
            // console.log(storeLike);
        },
        // 添加收藏
        addShouCang() {
            // console.log("shouCangData====>", this.shipinTem);
            var oshouCangSpan = this.$refs.shouCangSpan;
            var storeshouCang = this.$store.state.shouCang;
            if (oshouCangSpan.classList.contains("van-icon-star-o")) {
                oshouCangSpan.classList.remove("van-icon-star-o");
                oshouCangSpan.classList.add("van-icon-star");
                storeshouCang.push(this.shipinTem);
            } else {
                oshouCangSpan.classList.remove("van-icon-star");
                oshouCangSpan.classList.add("van-icon-star-o");
                for (let i = 0; i < storeshouCang.length; i++) {
                    if (storeshouCang[i]._id == this.shipinTem._id) {
                        storeshouCang.splice(i, 1);
                    }
                }
            }
            // console.log(storeshouCang);
        },
        // 投放硬币
        giveCoin() {
            // console.log("coinData====>", this.shipinTem);
            if (
                this.$refs.coinSpan.classList.contains("van-icon-gold-coin-o")
            ) {
                this.$refs.coinSpan.classList.remove("van-icon-gold-coin-o");
                this.$refs.coinSpan.classList.add("van-icon-gold-coin");
                this.$store.state.coin.push(this.shipinTem);
            }
            // console.log(this.$store.state.coin);
        },
        // 改变详情页信息
        changeXiangqing(id) {
            console.log(id);
            var allshipin = this.$store.state.shipinList1;
            for (var i = 0; i < allshipin.length; i++) {
            if (id == allshipin[i]._id) {
                this.shipinTem = allshipin[i];
            }
        }
        },
    },
    created() {
        // 加载其他推荐视频
        this.getSomeInfo();
        // this.commentVal = this.$route.query.id; //获取路由跳转传过来的参数
        // 获取分类页面传过来的参数this.$route.query.id，与总数据做对比，返回响应的数据到data中，做渲染详情页的数据
        // console.log(this.$route.query.id)
        var allshipin = this.$store.state.shipinList1;
        for (var i = 0; i < allshipin.length; i++) {
            if (allshipin[i]._id == this.$route.query.id) {
                this.shipinTem = allshipin[i];
            }
        }
    },
    mounted() {
        // 分割获取到的标签数据
        var biaoqianTem = this.shipinTem.biaoqian.split("|");
        biaoqianTem.pop();
        // console.log(biaoqianTem);
        this.biaoqianList = biaoqianTem;
       
        // 加入历史记录
        this.$store.state.jilu.push(this.shipinTem);
        console.log(this.$store.state.jilu)
        // 判断是否收藏，稍后观看，投硬币
        var storeLike = this.$store.state.shaoHou;
        var storeShouCang = this.$store.state.shouCang;
        var storeCoin = this.$store.state.coin;
        if (storeLike) {
            for (var i = 0; i < storeLike.length; i++) {
                if (storeLike[i]._id == this.shipinTem._id) {
                    this.$refs.likeSpan.classList.remove("van-icon-like-o");
                    this.$refs.likeSpan.classList.add("van-icon-like");
                }
            }
        }
        if (storeShouCang) {
            for (var i = 0; i < storeShouCang.length; i++) {
                if (storeShouCang[i]._id == this.shipinTem._id) {
                    this.$refs.shouCangSpan.classList.remove("van-icon-star-o");
                    this.$refs.shouCangSpan.classList.add("van-icon-star");
                }
            }
        }
        if (storeCoin) {
            for (var i = 0; i < storeCoin.length; i++) {
                if (storeCoin[i]._id == this.shipinTem._id) {
                    this.$refs.coinSpan.classList.remove("van-icon-gold-coin-o");
                    this.$refs.coinSpan.classList.add("van-icon-gold-coin");
                }
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.mui-fullscreen {
    background-color: #fff;
    z-index: 1000;
}
.mint-header {
    background-color: #54b3af;
}
iframe {
    display: block;
    border: 0;
    width: 100%;
}
img {
    display: block;
    width: 90%;
    margin: 0 auto;
}
.mui-scroll {
    //   margin-top: 44px;
    background-color: #fff;
    overflow: hidden;
}
.shipinInfo {
    margin-top: 5px;
    padding: 0 10px;
    .title {
        font-size: 14px;
        a {
            background-color: #f4f4f4;
            height: 20px;
            padding: 0 6px;
            line-height: 20px;
            color: #fb7299;
            border-radius: 8px;
            text-align: center;
            font-size: 8px;
            margin-right: 4px;
            img {
                display: inline-block;
                text-align: center;
                width: 20px;
                margin-right: 5px;
                vertical-align: bottom;
            }
        }
    }
    .content {
        font-size: 12px;
        color: #666;
        > a {
            display: block;
            color: #000;
            // min-width: 40px;
            line-height: 40px;
            img {
                display: inline-block;
                text-align: center;
                width: 40px;
                vertical-align: bottom;
                border-radius: 50%;
            }
        }
        .bofang {
            line-height: 30px;
            span {
                margin: 0 5px;
            }
        }
        .jieshao {
            .mui-icon-close {
                font-size: 14px;
                color: #fb7299;
            }
            p {
                padding: 10px 0;
            }
        }
    }
    .biaoqian {
        width: 100%;
        overflow: hidden; //去除浮动
        li {
            float: left;
            // width: 60px;
            padding: 2px 10px;
            background-color: #ccc;
            text-align: center;
            border-radius: 8px;
            font-size: 12px;
            line-height: 20px;
            margin: 5px 5px;
        }
    }
}
// 其他视频
.mui-content {
    background-color: #fff;
}
.shipin {
    img {
        margin: 0 auto;
        display: block;
        width: 130px;
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

// 评论
.comments {
    padding: 40px 10px 0 10px;
    .shuoDian {
        display: flex;
        border-bottom: 1px solid #ccc;
        img {
            display: inline-block;
            width: 40px;
            height: 40px;
            vertical-align: middle;
            border-radius: 50%;
        }
        input {
            flex: 1;
            display: inline-block;
            border-radius: 8px;
            background: #f4f4f4;
            color: #333;
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            margin: 5px 0;
            padding: 0 8px;
        }
        button {
            width: 70px;
            height: 30px;
            background-color: #ccc;
            margin: 5px 0 0 5px;
            font-size: 12px;
        }
        div {
            flex: 1;
        }
    }
    .shuoDianTo {
        border: 0;
        padding-bottom: 10px;
    }
}
.sanlian {
    width: 100%;
    display: flex;
    margin: 10px 0 20px 0;
    li {
        flex: 1;
        text-align: center;
        span {
            font-size: 30px;
        }
    }
}
// 视频推荐
.mui-table-view {
    margin-top: 20px;
    .mui-media-body {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
    }
}
</style>

