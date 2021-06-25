// /Users/bytedance/Documents/bakeryProgram/bakeryProgram/pages/order/order
Page({
  data: {
    tabs:[
      {
          id: 0,
          name: "待支付",
          isActive: true
      },
      {
          id: 1,
          name: "已支付",
          isActive: false
      },
      {
          id: 2,
          name: "已结束",
          isActive: false
      },
    ],
    orderList:[
        {
            id: 0,
            orderId: "2021062501",
            time: "2021-06-26 08:58:18",
            total: "158.10",
            goodsList: [
                {
                    name: "麻薯包（2个/份）",
                    num: 1,
                    price: 12
                },
                {
                    name: "麻薯包（2个/份）",
                    num: 1,
                    price: 12
                }
            ]
        },
        {
            id: 1,
            orderId: "2021062501",
            time: "2021-06-26 08:58:18",
            total: "149.10",
            goodsList: [
                {
                    name: "麻薯包（2个/份）",
                    num: 1,
                    price: 12
                }
            ]
        }
    ]
  },
  onLoad: function (options) {

  },
  handleItemChange(e) {
    const {index} = e.detail;
    let tabs = JSON.parse(JSON.stringify(this.data.tabs));
        tabs.forEach((v, i) => {
            if(i === index){
                v.isActive = true;
            }else{
                v.isActive = false;
            }
        });
        this.setData({
            tabs
        })
  }
})