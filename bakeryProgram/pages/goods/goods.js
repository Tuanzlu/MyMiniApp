const InspireCloud = require('../../libs/inspirecloud-mp.js');
const serviceId = 'ttn4el';
const inspirecloud = new InspireCloud({serviceId});

Page({
  data: {
    goodsList: [],
    list: [],
    activeClass: 0,
    classes:[
      {
        id: 0,
        name: "米面包",
        tag: "mi"
      },
      {
        id: 1,
        name: "碱水面包",
        tag: "jianshui"
      },
      {
        id: 2,
        name: "软欧包",
        tag: "ruan"
      },
    ],
    total: 0
  },
  handleClass(e) {
    const num = e.currentTarget.dataset.active;
    const list = this.data.goodsList[num];
    this.setData({
      "activeClass": num,
      "list": list
    }
    );
  },
  handleCart() {
    let orderId = wx.getStorageSync('orderId') || 1;
    let cart = wx.getStorageSync('cart');
    orderId += 1;
    wx.setStorageSync('orderId', orderId);
    
    let params = {
      goodsList: cart,
      orderId: orderId,
      total: this.data.total,
      type: 1,
      time: Date.now()
    };
    cart.forEach(item => {
      console.log(item);
      inspirecloud.run('updateGoods', {id: item.id, stock: item.stock}).then(data=>{
        console.log(data);
      })
      .catch(error=> {
        console.log("err");
      });
    });
    inspirecloud.run('createOrder', params).then(data=>{
      console.log('success');
      let url = '../../pages/cart/cart?orderId='+orderId;
      wx.navigateTo({
        url: url // 指定页面的url
      });
      wx.setStorageSync('cart',[]);
    })
    .catch(error=> {
      console.log("err");
    });
    
  },
  handleCartAdd(e) {
    let goods = e.currentTarget.dataset.goods;
      let cart = wx.getStorageSync('cart') ||[];
      let index = cart.findIndex( v=>(v.id===goods.id&&v.name===goods.name));
      if(index===-1){
        if(goods.stock > 0){
          goods.num = 1;
          goods.stock -=1;
          cart.push(goods);
          let total = this.data.total+goods.price;
          this.setData({
            total: total
          });
          wx.showToast({
          title: '加入成功', // 内容
          icon: 'success',
          mask: true
          });
        }else {
          console.log("没库存了");
        }
      }else {
        if(cart[index].stock>0){
          cart[index].stock--;
          cart[index].num++;
          let total = this.data.total+goods.price;
          this.setData({
            total: total
          });
          wx.showToast({
            title: '加入成功^_^', // 内容
            icon: 'success',
            mask: true
          });
        }else {
          wx.showToast({
            title: '仓库被搬空了-_-', // 内容
            icon: 'fail',
            mask: true
          });
        }
      }
      wx.setStorageSync('cart', cart);
      console.log(cart);
  },
  handleCartMinus(e) {
    let goods = e.currentTarget.dataset.goods;
    let cart = wx.getStorageSync('cart') ||[];
    let index = cart.findIndex( v=>(v.id===goods.id&&v.name===goods.name));
    if(index===-1){
      console.log("cart no this goods");
    }else if(cart[index].num === 1) {
      let total = this.data.total-goods.price;
      this.setData({
        total: total
      });
      console.log(cart);
      cart.splice(index,1);
      console.log(cart);
    }else{
      let total = this.data.total-goods.price;
      this.setData({
        total: total
      });
      cart[index].stock++;
      cart[index].num--;
    }
    wx.setStorageSync('cart', cart);
  },
  onLoad: function (options) {
    
    // wx.setStorageSync('cart', []);
    inspirecloud.run('getGoodsList').then(data=>{
      console.log(data);
      this.setData({
        goodsList: data.goodsList,
        total: 0
      });
      const list = this.data.goodsList[this.data.activeClass];
      this.setData({
        "list": list
      });
    })
    .catch(error=> {
      console.log("err");
    });
  }
})