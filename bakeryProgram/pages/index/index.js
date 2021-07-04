const app = getApp();
const InspireCloud = require('../../libs/inspirecloud-mp.js');
const serviceId = 'ttn4el';
const inspirecloud = new InspireCloud({serviceId});
import {request} from "../../request/index.js"
Page({
  data: {
    background: [
      {
        "id":1,
        "path": "../../imgs/swiper-1.jpeg"
      },
      {
        "id":2,
        "path": "../../imgs/swiper-2.jpeg"
      },
      {
        "id":3,
        "path": "../../imgs/swiper-3.jpeg"
    }],
    name:"悠悠Bakery",
    time:"00:00-12:00 12:01-23:59",
    position:"北京市海淀区神州科技大厦",
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    list: []
  },
  onLoad: function () {
    inspirecloud.run('getIndexList').then(data => {
      this.setData({
        list: data.goodsList
      })
    })
    .catch(error=> {
      console.log("err");
    });
    console.log('Welcome to Mini Code')
  },
})
