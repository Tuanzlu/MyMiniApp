const app = getApp()
const InspireCloud = require('../../libs/inspirecloud-mp.js');
const serviceId = 'ttn4el';
const inspirecloud = new InspireCloud({serviceId});
Component({
  properties: {
    // define headerText property to use in custom component
    headerText: {
      type: String,
      value: "default title",
    },
    tabIndex: {
        type: Number,
        value: 0
    },
    orderList: {
      type: Array,
      value: []
    },

  },
  data: {
    path: "../../pages/cart/cart?orderId=",
    defaultStates: {},
  },
  methods: {
    
    handleTap(e) {
        console.log(e);
        const orderId = e.currentTarget.dataset.orderid;
        console.log(orderId);
        if(this.properties.tabIndex === 2){
          inspirecloud.run('deleteOrder',{orderId: orderId}).then(data => {
            console.log(data);
            inspirecloud.run('getOrderList').then(data => {
              console.log(data);
              let unpayOrderList = data.unpayOrderList;
              unpayOrderList.forEach(item => {
                  console.log(formatDate(new Date(item.time)));
                  item.time = formatDate(new Date(item.time));
              });
              let payOrderList = data.payOrderList;
              payOrderList.forEach(item => {
                  console.log(formatDate(new Date(item.time)));
                  item.time = formatDate(new Date(item.time));
              });
              let finishOrderList = data.finishOrderList;
              finishOrderList.forEach(item => {
                  console.log(formatDate(new Date(item.time)));
                  item.time = formatDate(new Date(item.time));
              });
              this.setData({
                  unpayOrderList: unpayOrderList,
                  payOrderList: payOrderList,
                  finishOrderList: finishOrderList
              });
            })
            .catch(error=> {
              console.log("err");
            })
          })
          .catch(error=> {
            console.log("err");
          })
        }else {
           let url = "../../pages/cart/cart?orderId="+ orderId;
            wx.navigateTo({
            url: url // 指定页面的url
          });
        };
    },
    customMethod: function () {},
  },
});


