<template>
  <div class="tui">
      <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 class="mui-title">会员购</h1>
      </header>
      <div class="zouxinBox clearfix">
        <div class="zouxin">走心推荐</div>
        <div class="yongyou">你值得拥有</div>
        <!-- <span class="mui-icon mui-icon-arrowthinleft"></span> -->
      </div>
      <div class="mui-content content_box">
        <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-6" v-for="(item,index) in goodsList" :key="index">
            <li class="mui-table-view-cell">
              <img :src="item.img" alt>
              <div>
                <p class="title">
                  <span>
                    <img src="../assets/img/ziying.webp" alt>
                    <img src="../assets/img/618.png" alt>
                  </span>
                  标题
                </p>
                <p>
                  月销量：
                  <span>100件</span>
                  好评率:
                  <span>100%</span>
                </p>
                <p class="price">
                  ￥
                  <span>233333.00元</span>
                  <span class="quan">券</span>
                  <span class="shangou">闪购</span>
                  <span class="shangou">秒杀</span>
                </p>
              </div>
            </li>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        { img: "../assets/img/goods1.jpeg" },
        { img: "../assets/img/goods2.jpeg" },
        { img: "../assets/img/goods3.jpeg" },
        { img: "../assets/img/goods4.jpeg" }
      ]
    };
  }
};
</script>

<style lang="scss">
.tui {
  //position设置成fixed全屏无法滑动
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #fff;
}
.zouxinBox {
  background-color: #f7f7f7;
  padding: 5px 0 10px 0;
  padding-top: 44px;
  .zouxin {
    margin-top: 20px;
    // padding-top:10px;
    text-align: center;
    font-weight: 600;
    position: relative;
    color: #333;
  }
}
.content_box {
  padding-top: 0 !important;
  background-color: #ccc;
}

.zouxin:before,
.zouxin:after {
  content: "";
  position: absolute;
  width: 35%;
  height: 2px;
  background-color: #333;
  top: 50%;
}
.zouxin:before {
  left: 0;
}
.zouxin:after {
  right: 0;
}
.yongyou {
  text-align: center;
  font-size: 12px;
  color: #666;
}

.tui {
  .mui-row {
    background-color: #fff;
    color: #ccc;
    .mui-table-view-cell {
      > img {
        margin: 0 auto;
        display: block;
        height: 170px;
      }
      > div {
        text-align: center;
        margin-top: 5px;
        p {
          font-size: 12px;
          span {
            font-size: 12px;
            margin-right: 5px;
          }
        }
        p.title {
          color: #333;
          font-size: 14px;
          img {
            width: 24px;
            display: inline-block;
            margin-right: 5px;
          }
        }
        p.price {
          color: orangered;
          font-size: 14px;
          span {
            font-size: 16px;
          }
          span.quan,
          span.shangou {
            display: inline-block;
            height: 15px;
            border: 1px solid red;
            color: red;
            font-size: 10px;
            line-height: 15px;
          }
          span.quan {
            width: 18px;
          }
          span.shangou {
            width: 30px;
          }
        }
      }
    }
  }
}

.clearfix {
  display: block;
  content: "";
  clear: both;
}
</style>
