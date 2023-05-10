
import {loginApi,getuserInfoApi,updateUserApi} from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     code:''
  },
  // 1.调用微信接口login，获取登录临时凭证code
  getUserProfile(){
  // 调用 wx.login  
    wx.login({
      success: async({code}) => {
        try {
           // 调用接口 API，传入 code 进行登录
          const res = await loginApi(code)
          console.log(res)
          // 登录成功以后将 token 存储到本地
          const token = res.data.token
          wx.setStorageSync('token',token)
          // 有token之后获取用户信息
           this.getUserInfo(token)
        } catch (error) {
           // 登录失败后给用户进行提示
          wx.showToast({
            title: '授权失败，请稍后再试~~~',
            icon: 'none'
          })
        }
      }

    })  
  },
  // 2.根据token.获取用户信息 token要在请求头设置
  async getUserInfo(token) {
    const res = await getuserInfoApi(token)
    if(res.code === 200) {
      console.log('uu',res)
      const userInfo = {
        nickName: res.data.nickname,
        headimgurl: res.data.headimgurl
      } 
      // 获取到的信息存到本地存储
      wx.setStorageSync('userInfo', JSON.stringify(userInfo))
      // 跳转回个人中心
      wx.navigateBack()
    }
  }

 

  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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