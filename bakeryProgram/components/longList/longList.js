const app = getApp()

Component({
  properties: {
    // define headerText property to use in custom component
    headerText: {
      type: String,
      value: "default title",
    },
    pos: {
      type: Number,
      value: 0,
    },
    list: {
      type: Array,
      value: []
    }
  },
  data: {
    
    defaultStates: {},
  },
  methods: {
    itemClick(e) {
      console.log(e);
      
    },
    handleBtnTap(e) {
      wx.navigateTo({
        url: '../../pages/goods/goods' // 指定页面的url
      });
    },
    customMethod: function () {},
  },
});


