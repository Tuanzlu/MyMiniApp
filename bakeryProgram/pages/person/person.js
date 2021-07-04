// /Users/bytedance/Documents/bakeryProgram/bakeryProgram/pages/person/person
const app = getApp()
Page({
  data: {
    userInfo: {},
    funcList: [
      {
        id: 0,
        src: "../../imgs/addr.png",
        funcName: "收货地址",
        path: "../../pages/index/index"
      },
      {
        id: 1,
        src: "../../imgs/coupon.png",
        funcName: "我的优惠券",
        path: "../../pages/index/index"
      },
      {
        id: 2,
        src: "../../imgs/wallet.png",
        funcName: "我的钱包",
        path: "../../pages/index/index"
      },
    ]

  },
  
  onLoad: function (options) {
    // let userInfo = wx.getStorageSync('userInfo');
    // this.setData({
    //   userInfo: userInfo
    // });
    // console.log(this.data.userInfo);
    app.waitInfo().then((data) => {
      this.setData({
            "userInfo": app.globalData.userInfo
      });
    });
  },
})