<template>
    <div class="app-container">
        <transition>
            <router-view/>
        </transition>
        <Footer></Footer>
    </div>
</template>


<script>
import Footer from "./components/Footer.vue";
export default {
    methods: {
        getshipinInfo() {
            // 异步转同步 promise async/await 取出数据库中的数据
            return new Promise((resolve, reject) => {
                this.$axios.get("http://47.101.205.157:3000/").then(function(data) {
                    // console.log(data.data.result);
                    resolve(data.data.result);
                });
            });
        },

         // 小推荐视频，固定推荐数量
        getManyInfo() {
            var arrTem = [];
            // var allData = JSON.parse(localStorage.getItem("allData"));
            var allData = this.$store.state.shipinList1;
            // console.log(
            //     "HomeVue getManyInfo取总数据：=>",
            // this.$store.state.shipinList1)
            // );
            for (var i = 0; i < 6; i++) {
                var random = Math.floor(Math.random() * allData.length);
                // console.log("函数info2=>" + random + "对应数据：" + allData[random]);
                arrTem.push(allData[random]);
            }
            return arrTem;
        },
    },
    async created() {
        var allData = await this.getshipinInfo();
        // 处理数据 添加缩略图
        for(var i = 0; i < allData.length; i++){
            allData[i].thumbnailImg = "../assets/img/list"+ i%20 +".webp";
        }
        this.$store.commit("putInData",allData);
        // localStorage.setItem("allData",JSON.stringify(allData));
        // console.log("appVue created数据=>",this.$store.state.shipinList1);
        this.$store.state.someShiPin = this.getManyInfo();
        this.$store.state.someShiPin2 = this.getManyInfo();
    },
    components: {
        Footer
    },
};
</script>

<style lang="scss">
//去除 默认样式
* {
    margin: 0;
    padding: 0;
}
ul,
li,
ol {
    list-style: none;
}
.app-container {
    // padding-top: 40px;
    overflow: hidden;
    background-color: #fff;
}
.mint-tab-item {
    color: #818181;
}
.mint-tab-item.is-selected {
    color: #0099ff;
}
//增大字体图标大小
.mint-tab-item-icon span {
    font-size: 20px;
}
</style>
