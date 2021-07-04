const InspireCloud = require('../../libs/inspirecloud-mp.js');
const serviceId = 'ttn4el';
const inspirecloud = new InspireCloud({serviceId});
import {formatDate} from '../../utils/util.js';
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
    unpayOrderList:[],
    payOrderList:[],
    finishOrderList:[]
  },
  onShow(){
    this.onLoad();
  },
  onLoad: function (options) {
    inspirecloud.run('getOrderList').then(data => {
        console.log(data);
        let unpayOrderList = data.unpayOrderList;
        unpayOrderList.forEach(item => {
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