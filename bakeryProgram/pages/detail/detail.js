// /Users/bytedance/Documents/bakeryProgram/bakeryProgram/pages/detail/detail
Page({
  data: {
    item:{
      name: "牛奶吐司",
      price: 25,
      stock: 0,
      info: "用带盖烤听烤出的面包经切片后呈正方形，夹入火腿或蔬菜后即为三明治。用不带盖烤听烤出的面包为长方圆顶形，类似长方形大面包。"
    },
    video:{
      src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
    }
  },
  videoErrorCallback: function(e) {
    console.log(e.detail.errMsg)
  },
  onLoad: function (options) {
    const {goods_id} = options;
    console.log(goods_id);
  }
})