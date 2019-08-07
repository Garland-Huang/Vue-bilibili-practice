import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commentsInfo: [{
        name: "Eris",
        content: "数学凉了，来这里嗨森嗨森"
      },
      {
        name: "Eris",
        content: "数学凉了，来这里嗨森嗨森"
      },
      {
        name: "Eris",
        content: "数学凉了，来这里嗨森嗨森"
      },
      {
        name: "Eris",
        content: "数学凉了，来这里嗨森嗨森"
      }
    ],
    shipinList1: [], //总数据
    //首页
    someShiPin: [], //固定数量
    someShiPin2: [], //不固定数量,
    // 详情页
    shaoHou: [],
    shouCang: [],
    coin: [],
    jilu: [], //历史记录
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    userName : "",
    dongtaiGuanZu:[],
    dongtaishou:[],
    zhuanfa:{},
    dongtaiID:3,
    dongtaiInfo:[],
    pinLunList:{},
    myDongTai:[]
  },
  mutations: {
    addComment(state, info) {
      state.commentsInfo.unshift(info);
    },
    putInData(state, data) {
      console.log("store.js putInData=>", data)
      state.shipinList1 = data;
    },
    changeLogin(state, user) {
      console.log(user);
      state.Authorization = user.Authorization;
      state.userName = user.username;
      console.log(state.userName);
      localStorage.setItem('Authorization', user.Authorization);
      localStorage.setItem('username', user.username);
    }
  },
  actions: {}
});