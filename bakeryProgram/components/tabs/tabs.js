const app = getApp()

Component({
  properties: {
    // define headerText property to use in custom component
    headerText: {
      type: String,
      value: "default title",
    },
    tabs: {
      type: Array,
      value: []
    }
  },
  data: {
    
    defaultStates: {},
  },
  methods: {
    handleItemTap(e) {
        const {index} = e.currentTarget.dataset;
        this.triggerEvent("itemChange", {index});
        
    },
    customMethod: function () {},
  },
});


