const InspireCloud = require('../../libs/inspirecloud-mp.js');
const serviceId = 'ttn4el';
const inspirecloud = new InspireCloud({serviceId});
Page({
  data: {
    userAddr: [],
    ishide: true,
    goodsList: [
      {
        id: 0,
        name: "米面包",
        src: "../../imgs/logo.jpeg",
        num: 10,
        price: 12,
        total: 120
      },
      {
        id: 0,
        name: "米面包",
        src: "../../imgs/logo.jpeg",
        num: 10,
        price: 12,
        total: 120
      },
      {
        id: 0,
        name: "米面包",
        src: "../../imgs/logo.jpeg",
        num: 10,
        price: 12,
        total: 120
      },
      {
        id: 0,
        name: "米面包",
        src: "../../imgs/logo.jpeg",
        num: 10,
        price: 12,
        total: 120
      },
      {
        id: 0,
        name: "米面包",
        src: "../../imgs/logo.jpeg",
        num: 10,
        price: 12,
        total: 120
      },
      {
        id: 0,
        name: "米面包",
        src: "../../imgs/logo.jpeg",
        num: 10,
        price: 12,
        total: 120
      },
      {
        id: 0,
        name: "米面包",
        src: "../../imgs/logo.jpeg",
        num: 10,
        price: 12,
        total: 120
      },
      {
        id: 0,
        name: "米面包",
        src: "../../imgs/logo.jpeg",
        num: 10,
        price: 12,
        total: 120
      },
    ],
    orderId:Number,
    total: Number,
    cart: [],
    inputValue: "",
    mode: Number // 0-待付款购物车订单 1-已付款订单 2-评价订单
  },
  handleAddr() {
    var that = this;
    wx.authorize({
      scope: "scope.address",
      success() {
        that.getAddr();
      },
    });
  },
  handlePay() {
    
    inspirecloud.run('updateOrder', {orderId: this.data.orderId,memo: this.data.inputValue}).then(data=>{
      console.log(data);
    })
    .catch(error=> {
      console.log("err");
    });
    wx.navigateTo({
      url: '../../pages/pay/pay?total='+this.data.total+"&orderId="+this.data.orderId // 指定页面的url
    });
  },
  handleInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  getAddr() {
    var that = this;
    wx.chooseAddress({
      success(res) {
        that.setData({
          "userAddr": res
        });
        if(res.cityName === "市辖区") {
          that.setData({
            "ishide": false
          });
        };
        // console.log(res.userName);
        // console.log(res.provinceName);
        // console.log(res.cityName);
        // console.log(res.countyName);
        // console.log(res.detailInfo);
        // console.log(res.telNumber);
      },
    });
  },
  onUnload() {
    wx.setStorageSync('cart', []);
  },
  onLoad: function (options) {
    let orderId = Number(options.orderId);
    inspirecloud.run('getOrderById', {orderId: orderId}).then(data=>{
      console.log(data);
      let goodsList = data.orderItem.goodsList;
        goodsList.forEach(item => {
            item.total = item.num*item.price;
        });
        this.setData({
          orderId: orderId,
          goodsList: goodsList,
          mode: data.orderItem.type-1,
          total: data.orderItem.total,
          inputValue: data.orderItem.memo
        });
    })
    .catch(error=> {
      console.log("err");
    });
  }
})