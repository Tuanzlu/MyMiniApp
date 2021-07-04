import { request } from "../../request";
const InspireCloud = require('../../libs/inspirecloud-mp.js');
const serviceId = 'ttn4el';
const inspirecloud = new InspireCloud({serviceId});
// /Users/bytedance/Documents/bakeryProgram/bakeryProgram/pages/detail/detail
Page({
  data: {
    item:{},
  },
  videoErrorCallback: function(e) {
    console.log(e.detail.errMsg)
  },
  handleCartAdd(e) {
    let goods = e.currentTarget.dataset.goods;
    let cart = wx.getStorageSync('cart') ||[];
    let index = cart.findIndex( v=>(v.id===goods.id&&v.name===goods.name));
    let total = this.data.total+goods.price;
      this.setData({
        total: total
      });
    if(index===-1){
      goods.num = 1;
      cart.push(goods);
    }else {
      cart[index].num++;
    }
    wx.setStorageSync('cart', cart);
    console.log(cart);
    wx.showToast({
      title: '加入成功', // 内容
      icon: 'success',
      mask: true
    });
  },
  onLoad: function (options) {
    const {goods_id} = options;
    inspirecloud.run('getGoodsDetail',{id: goods_id}).then(data=>{
      console.log(data);
      this.setData({
        item: data.goodsItem
      });
    })
    .catch(error=> {
      console.log("err");
    });
    // request({url:"https://cloudapi.bytedance.net/faas/services/ttn4el/invoke/getGoodsDetail", params})
    //   .then(res=>{
    //     console.log(res);
    //     this.setData({
    //       item: res.data.goodsItem
    //     })
    //   });
    console.log(goods_id);
  }
})