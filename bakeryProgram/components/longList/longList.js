const app = getApp()

Component({
  properties: {
    // define headerText property to use in custom component
    headerText: {
      type: String,
      value: "default title",
    },
  },
  data: {
    list: [
      {
        "id": 1,
        "name": "碱水面包",
        "price": 12,
        "intro": "好吃的面包",
        "img": "../../imgs/logo.jpeg",
        "stock": 0
      },
      {
        "id": 2,
        "name": "碱水面包",
        "price": 12,
        "intro": "好吃的面包",
        "img": "../../imgs/logo.jpeg",
        "stock": 1
      },
      {
        "id": 3,
        "name": "碱水面包",
        "price": 12,
        "intro": "好吃的面包",
        "img": "../../imgs/logo.jpeg",
        "stock": 0
      },
    ],
    defaultStates: {},
  },
  methods: {
    // Component internal method
    customMethod: function () {},
  },
});


