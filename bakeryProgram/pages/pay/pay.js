const InspireCloud = require('../../libs/inspirecloud-mp.js');
const serviceId = 'ttn4el';
const inspirecloud = new InspireCloud({serviceId});Page({
  data: {
    loading: false,
    total: 15,
    orderId: Number
  },
  onLoad: function (options) {
    console.log(options);
    this.setData({
      total: options.total,
      orderId: options.orderId
    })
  },
  requestPayment() {
    console.log(this.data);
    inspirecloud.run('updateOrder', {orderId: Number(this.data.orderId),type:2}).then(data=>{
      console.log(data);
      
    })
    .catch(error=> {
      console.log("err");
    });
    this.setData({
      loading: true
    });
    // wx.request({
    //   url: '',
    //   method: 'POST',
    //   data: {
    //     debug: '',
    //     totalAmount: 1,
    //     isDebug: 0,
    //     isOffline: 0,
    //     merchantId: '1300000004',
    //     appId: '800000040005',
    //     service: 1
    //   },
    //   success: (res) => {
    //     const data = res.data;

    //     this.setData({
    //       loading: false
    //     });

    //     wx.pay({
    //       orderInfo: data.data,
    //       service: 1,
    //       success(res) {
    //         console.log('pay-success:', res);
    //       }
    //     });
    //   },

    //   fail(err) {
    //     tt.showModal({
    //       content: JSON.stringify(err)
    //     });
    //   }
    // });
  }
})