<template>
    <div class="advertisement">
        <img src="../assets/img/gg1.jpg" alt>
        <button class="close_btn">
            <span v-if="isZero">{{waitTime}}秒可关闭</span>
            <span class='van-icon van-icon-cross' @click='closeAd' v-if="!isZero"></span>
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isZero:true,
            waitTime: 3,
            cleardata: null
        };
    },
    methods:{
        closeAd(){
            this.$router.push("/home");
        }
    },
    created() {
        this.cleardata = setInterval(() => {
            if (this.waitTime == 1) {
                this.isZero = false;
                clearInterval(this.cleardata);
            } else {
                this.waitTime--;
            }
        }, 1000);
    },
    beforeDestroy() {
        //销毁数据与方法
        clearInterval(this.cleardata);
    }
};
</script>
<style lang="scss" scoped>
.advertisement {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #fff;
    img {
        margin-left:-30px;
        height: 100%;
    }
}
// 关闭按钮
.close_btn {
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    border: 0;
    color:#fff;
}
</style>

