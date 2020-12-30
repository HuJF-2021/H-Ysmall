// compoents/Tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       title:{
         type:Array,
         value:[]
       }
  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    counter(event){
      const index=event.currentTarget.dataset.index
      this.setData({
        counter:index
      })
      this.triggerEvent('counter',{index},{})
    },
    
  }
})
