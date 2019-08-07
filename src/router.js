import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "引导页",
      component: () => import("./views/Guide.vue"),
    },
    {
      path: "/home",
      name: "首页",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/category",
      name: "分类",
      component: () => import("./views/Category.vue"),
    },
    {
      path: "/dynamics",
      name: "动态",
      component: () => import("./views/Dynamics.vue"),
      meta:{auth:true}
    },
    {
      path: "/mine",
      name: "我的",
      component: () => import("./views/Mine.vue"),
      meta:{auth:true}
    },
    {
      path: "/xiangqing",
      name: "视频详情",
      component: () => import("./views/Xiangqing.vue"),
    },
    {
      path: "/ad",
      name: "广告页面",
      component: () => import("./views/Ad.vue"),
    },
    {
      path: "/record",
      name: "历史记录",
      component: () => import("./views/Record.vue"),
    },
    {
      path: "/shaohou",
      name: "稍后再看",
      component: () => import("./views/ShaoHou.vue"),
    },
    {
      path: "/shoucang",
      name: "我的收藏",
      component: () => import("./views/ShouCang.vue"),
    },
    {
      path: "/pay",
      name: "会员购",
      component: () => import("./views/Pay.vue"),
    },
    {
      path: "/login",
      name: "登录",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/guanzu",
      name: "关注",
      component: () => import("./views/GuanZu.vue"),
    },
    {
      path: "/zhuanfa",
      name: "转发",
      component: () => import("./views/FW.vue"),
    },
    {
      path: "/pinlun",
      name: "评论动态",
      component: () => import("./views/PinLun.vue"),
    },
    {
      path: "/myDongtai",
      name: "我的动态",
      component: () => import("./views/MyDongTai.vue"),
    },
    {
      path: "/fans",
      name: "我的动态",
      component: () => import("./views/Fans.vue"),
    },
  ],
  linkActiveClass: "is-selected", //切换路由类名

});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  //在需要验证的路由跳转设置meta:{auth:true}
  if (to.matched.some(record => record.meta.auth)) {
    if (localStorage.getItem('Authorization') != null) {
      next();
    } else {
      //防止无限循环
      if (to.name === 'login') {
        next();
        return;
      }
      next({
        path: 'login'
      });
    }
  } else {
    next(); //若点击的是不需要验证的页面，则进行正常的路由跳转
  }
})

export default router;