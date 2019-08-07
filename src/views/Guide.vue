<template>
    <div>
        <!-- Swiper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="animated" src="../assets/img/yindao1.jpg" alt>
                </div>
                <div class="swiper-slide">
                    <img class="animated" src="../assets/img/yindao3.jpg" alt>
                </div>
                <div class="swiper-slide">
                    <img class="animated" src="../assets/img/yindao5.jpg" alt>
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/yindao2.jpg" alt>
                    <van-button plain hairline type="danger" size="small" to="/home">开启新世界</van-button>
                </div>
            </div>

            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import { create } from "domain";
export default {
    created() {
      if(localStorage.getItem("first")){
        this.$router.push("/ad");
      }else{
        localStorage.setItem("first",true);
      }
    },
    mounted() {
        new Swiper(".swiper-container", {
            pagination: {
                el: ".swiper-pagination"
            }
        });
    }
};
</script>

<style lang="scss" scoped>
.swiper-container {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #fff;
}
.swiper-slide {
    text-align: center;
    img {
        width: 100%;
    }
}
.swiper-slide {
    position: relative;
}
.van-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5.3rem;

    border: 1px solid #fe7298;
    // background-color: #FE7298;
    color: #fe7298;
}
</style>
