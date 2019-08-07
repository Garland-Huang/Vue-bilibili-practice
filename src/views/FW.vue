<template>
  <div class="zhuan">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">转发</h1>
      <a class="mui-pull-right send" @click="goDongtai">发送</a>
    </header>
    <div class="content_fw">
      <textarea placeholder="说说分享心得…" v-model="zhuanPin"></textarea>
      <div class="card_fw">
        <div class="card-wrap_fw">
          <div class="m-img-box_fw">
            <img :src="fw.img" alt>
          </div>
          <div class="m-box-col_fw">
            <h3>@{{fw.name}}</h3>
            <h4>{{fw.content}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mui from "../assets/mui/js/mui";
export default {
  data() {
    return {
      zhuanPin: "",
      fw: {}
    };
  },
  methods: {
    goDongtai() {
      var vuexID = this.$store.state.dongtaiID;
      var id = vuexID + 1 < 10 ? "000" + (vuexID + 1) : "00" + (vuexID + 1);
      var data = {
        name: this.$store.state.userName,
        img: "../assets/img/touxiangImg4.jpeg",
        time: "5秒前",
        id: id,
        shoucang: "247"
      };
      data.fw = this.fw;
      data.pinlun = "864";
      data.zhuanpin = this.zhuanPin;
      this.$router.push({
        path: "/dynamics",
        query: {
          zhuanData: data
        }
      });
    }
  },
  created() {
    this.fw = this.$store.state.zhuanfa;
  }
};
</script>
<style lang="scss">
* {
  touch-action: pan-y;
}
.zhuan {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #fff;
}
.send {
  line-height: 44px;
}
.content_fw {
  margin-top: 44px;
  padding: 10px;
  textarea {
    font-family: sans-serif;
    background-color: transparent;
    height: 120px;
    overflow: hidden;
    color: #333;
    outline: 0;
    border: none;
    font-size: 1rem;
    resize: none;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none !important;
    margin-top: 10px;
    padding: 2px;
  }
  .card_fw {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent !important;
    .card-wrap_fw {
      margin: 0 10px;
      height: 100%;
      display: flex;
      background-color: #f7f7f7;
      border-radius: 5px;
      .m-img-box_fw {
        width: 84px;
        height: 84px;
        margin: 0 0 0 0;
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
          object-fit: cover;
        }
      }
      .m-box-col_fw {
        flex: 1;
        width: 100%;
        margin: 8px;
        overflow: hidden;

        flex-direction: column;
        display: flex;
        justify-content: center;
        h3 {
          margin: 0;
          line-height: 25px;
          //   font-size: 16px;

          font-size: 16px;
          color: #333;
        }
        h4 {
          margin: 0;
          font-size: 14px;
          color: #939393;
          line-height: 20px;
          // 限制显示两行
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; // 控制多行的行数
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>

