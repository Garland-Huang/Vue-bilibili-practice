<template>
  <div class="pin">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">动态评论</h1>
    </header>

    <div class="mui-card top_marginBox">
      <!--页眉，放置标题-->
      <div class="mui-card-header card_header">
        <div>
          <img :src="xinxi.img" alt>
          <span>{{xinxi.name}}</span>
          <p>{{xinxi.time}}</p>
        </div>
        <button @click="addGuanzu(id)">＋ 关注</button>
      </div>
      <!--内容区-->
      <article class="mui-card-content card_content">
        <div>
          <div class="contentBox">{{xinxi.content}}</div>
          <div>
            <img
              :src="items"
              v-for="(items,i) in xinxi.contentImg"
              :key="i"
              alt
              @click="preview(xinxi.index)"
            >
          </div>
        </div>
      </article>
    </div>

    <ul class="mui-table-view margin_footer">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in downPin" :key="index">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-right" :src="item.img">
          <div class="mui-media-body">
            {{item.name}}
            <p class="mui-ellipsis">{{item.content}}</p>
          </div>
        </a>
      </li>
    </ul>
    <div class="pinLunFooter">
        <input type="text" placeholder="发布评论" v-model="inpVal">
        <button @click="sendOut">发送</button>
    </div>
  </div>
</template>
<script>
import mui from "../assets/mui/js/mui";
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      xinxi: {},
      downPin: [
        {
          img: "../assets/img/touxiangImg2.jpg",
          name: "远眺",
          content: "静静的看这个世界，最后终于疯了"
        }
      ],
      inpVal:""
    };
  },
  methods: {
    preview() {
      ImagePreview(this.xinxi.contentImg);
    },
    sendOut(){
        var temObj = {};
        temObj.name = localStorage.getItem("username");
        temObj.img = "../assets/img/touxiangImg2.jpg";
        temObj.content = this.inpVal;
        this.downPin.unshift(temObj);
        this.inpVal = "";
    }
  },
  created() {
    this.xinxi = this.$route.query.pinlunShowData;
  }
};
</script>
<style lang="scss">
* {
  touch-action: pan-y;
}
.pin {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #fff;
}

.mui_card {
  box-shadow: 0;
  border: 0;
}
.top_marginBox {
  margin-top: 44px;
}
.card_header {
  position: static;
  img {
    width: 50px;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    display: inline-block;
    font-size: 12px;
  }
  button {
    width: 70px;
    height: 30px;
    font-size: 14px;
  }
}
.card_content {
  padding: 0 10px;
  .contentBox {
    line-height: 20px;
    margin: 10px 0;
  }
  img {
    width: 30%;
    margin-left: 5px;
  }
}
.card_footer {
  position: static;
  span {
    font-size: 16px;
  }
  .mui-icon-chatbubble:before,
  .mui-icon-star:before {
    font-size: 26px;
  }
  .mui-icon-redo:before {
    font-size: 30px;
  }
}

.pinLunFooter{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    height:50px;
    input{
        width:80%;
        height:50px;
    }
    button{
        width:20%;
        height:50px;
        background-color: #54b3af;
    }
}

.margin_footer{
  margin-bottom:50px;
}
</style>

