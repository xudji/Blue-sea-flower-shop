// pages/goods/list/list.js\

import {goodsListApi} from '../../../utils/api'

 
// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    limit:8,
    pages:0,
    goodsList:[],
    options:{}
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 2. 获取传递过来的数据
  
    this.setData({
      options
    })
    this.getGoodsList()
  },
   
    
  

  async getGoodsList(){
    const {page,limit,goodsList,options } = this.data
    const res = await goodsListApi({page,limit,...options})
    if(res.code === 200) {
      goodsList.push(...res.data.records)
      this.setData({
        goodsList,
        pages: res.data.pages 
      })
    }
    console.log(res)
},

 // 查看其他商品
 checkOther(){
    wx.switchTab({
      url: '/pages/index/index',
    })
 },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
   
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    let { page,pages } = this.data
    if( page >= pages) return
    this.setData({
      page:++page
    })
    this.getGoodsList()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
