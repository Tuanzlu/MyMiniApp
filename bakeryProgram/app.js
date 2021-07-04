
App({
  globalData:{
    userInfo: {},
    isLogin: "" ,
    hasAuthorization: ""
  },
  onLaunch: function () {
    this.login();
  },
  waitInfo() {
    let promise = new Promise((resolve, reject) => {
      let timer = setInterval(() => {
        if(this.globalData.isLogin && this.globalData.userInfo && this.globalData.hasAuthorization) {
          clearInterval(timer);
          resolve(this.globalData);
        }else {
          console.log("failed");
        }
      },250);
      });
      return promise;
  },
  login() {
    var that = this;
    wx.login({
      force: true,
      success(res) {
        that.globalData.isLogin = "true";
        console.log(`login 调用成功${res.code} ${res.anonymousCode}`);
        that.authorize();
      },
      fail(res) {
        console.log(`login 调用失败`);
      },
    });
  },
  authorize() {
    var that = this;
    wx.authorize({
      scope: "scope.userInfo",
      success() {
        that.globalData.hasAuthorization = "true";
        // 用户同意授权用户信息
        that.getUserInfo();
      },
    });
  },
  getUserInfo() {
    var that = this;
    wx.getUserInfo({
      withCredentials: true,
      success(res) {
        // wx.setStorageSync('userInfo', res.userInfo);
        console.log(`getUserInfo 调用成功 ${res.userInfo}`);
        that.globalData.userInfo = res.userInfo;
      },
      fail(res) {
        console.log(`getUserInfo 调用失败`);
      },
    });
  }
})
