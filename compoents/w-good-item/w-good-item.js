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
    iid:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    detailclick(e){
     
     this.data.iid=e.currentTarget.dataset.iid
    
     
      wx.navigateTo({
        
        url: '/pages/detail/detail?id='+this.data.iid,
        success: (result) => { 
        },
        fail: (res) => {
          console.log(res);
          
        },
        complete: (res) => {},
      })
      
    }
  }
})
