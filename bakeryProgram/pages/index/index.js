const app = getApp()

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
    duration: 500
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
})
