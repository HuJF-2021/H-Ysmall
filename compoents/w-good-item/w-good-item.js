// compoents/w-good-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    detailclick(){
      wx.navigateTo({
        url: '/pages/detail/detail',
        success: (result) => {},
        fail: (res) => {
          console.log(res);
          
        },
        complete: (res) => {},
      })
      
    }
  }
})
