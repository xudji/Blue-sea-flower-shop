import { getCartListApi } from '../../utils/api'


Page({

  /**
   * 页面的初始数据
   */
  data: {
     cartList:[]
  },

  
  // 获取购物车列表
  async getCartList(){
     const res = await getCartListApi()
     if(res.code === 200) {
       this.setData({
         cartList:res.data
       })
     }
  }, 

  onLoad(options) {
    this.getCartList()

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