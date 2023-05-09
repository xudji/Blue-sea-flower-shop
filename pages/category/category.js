// pages/category/category.js

import {findCategoryTreeApi} from '../../utils/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
     categoryList:[],
     categoryIndex:0,
     categoryInfo:{}
  },

  async getFindCategoryTree(){
      const res = await findCategoryTreeApi()
      if(res.code === 200) {
        console.log(res.data)
         console.log(res.data[0])
          this.setData({
            categoryList:res.data,
            categoryInfo:res.data[0]  
          })
      }
  },
  checkItem(e){
     const res = e.currentTarget.dataset.id
     console.log(res)
     this.setData({
      categoryIndex:res
    })
    this.updateCateInfo() 
  },
  updateCateInfo(){
       const {categoryList,categoryIndex} = this.data
       this.setData({
        categoryInfo:categoryList[categoryIndex]
       })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     this.getFindCategoryTree()
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})