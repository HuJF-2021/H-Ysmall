// pages/home/home.js
import {getHomeGoods,} from "../../network/home"
const types=['new','pop','sell']
const BACK=1500
Page({
  /**
   * 页面的初始数据
   */
  data: {
   bannes:[],
   recommends:[],
   titles:['流行','新款','热卖'],
   goods:{
     'new':{page:0,list:[]},
     'pop':{page:0,list:[]},
     'sell':{page:0,list:[]},
   },
   currenttype:'new',
   isShow:false,
   isfixed:false,
   tabscrolltop:''
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this._getrequest()
  this._gethomedata("new")
  this._gethomedata("pop")
  this._gethomedata("sell")
  },
  //请求轮播图数据
  _getrequest(){
    wx.request({
      url: 'http://123.207.32.32:8000/api/h8/home/multidata',
      method:'GET',
      success:(res)=>{
      const banne=res.data.data.banner.list
      const recommend=res.data.data.recommend.list
      this.setData({
       bannes:banne,
       recommends:recommend
      })
      }
    })
  },
  //请求商品数据
  _gethomedata(type){
    let page = this.data.goods[type].page + 1

    getHomeGoods(type, page).then(res => {
        const list = res.data.list
        const tryList = this.data.goods[type].list
        tryList.push(...list)
        const typeKey = `goods.${type}.list`
        const pageKey = `goods.${type}.page`

        this.setData({
            [typeKey]: tryList,
            [pageKey]: page + 1
        })
    })
    
   

  },
  //上拉加载更多
  onReachBottom(){
    this._gethomedata(this.data.currenttype)

  },
  onPageScroll(option){
   const scrolltop=option.scrollTop
   const flag=scrolltop>=BACK
   const flag2=scrolltop>=this.data.tabscrolltop
   if(flag2 !=this.data.isfixed){
     this.setData({
       isfixed:flag2
     })
   }

   if(flag !=this.data.isShow){
    this.setData({
      isShow:scrolltop>BACK
    })
   }
  },
  //事件相关方法
  counter(event){
   const index=event.detail.index
    const type=types[index]
    this.setData({
      currenttype:type
    })
  },
  bindloadimage(){
   wx.createSelectorQuery().select('#tabbar').boundingClientRect(rect=>{
    // console.log(rect);
    this.data.tabscrolltop=rect.top
    
   }).exec()
    
  }
 
})