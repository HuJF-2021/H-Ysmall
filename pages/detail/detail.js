// pages/detail/detail.js
import {getdetail,Goodsinfo,Shopinfo} from "../../network/detail"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimage:[],
    goods:{},
    shops:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    getdetail(options.id).then(res=>{
      console.log(res);
       //1.获取详情页轮播图的数据
       const data=res.result
       this.setData({
        topimage:data.itemInfo.topImages,
        goods:new Goodsinfo(data.itemInfo,data.columns,data.shopInfo.services),
        shops:new Shopinfo(data.shopInfo)
       })
       
      
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})