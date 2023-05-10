import {updateUserApi} from '../../utils/api'

Page({
 
  data: {
    userInfo: {
      nickname: '',
      headimgurl: ''
    },
    isShowDialog: false // 是否显示昵称的那个对话框
  },
   // 1. 获取头像并上传
   onGetAvatar(e){
    let img =  e.detail.avatarUrl
    this.setData({
      "userInfo.headimgurl" : img
    }
      )
   },

  // 2. 显示昵称的对话框
  onUpdateNickName() {
    this.setData({
      isShowDialog: true
    });
  },
  // 3. 取消显示昵称对话框
  cancelForm() {
    this.setData({
      isShowDialog: false,
     
    });
  },
  // 4. 获取新的昵称
  getNickName(e){
   let name = e.detail.value.nickname
   console.log(name)
   this.setData({
    isShowDialog: false,
    "userInfo.nickname":name
   })
  },

   // 5. 添加或保存用户信息（发请求）
  async onUpdateUserInfo(){
    const {userInfo} = this.data
      const res = await updateUserApi(userInfo)
      if(res.code === 200) {
        wx.setStorageSync('userInfo', JSON.stringify(userInfo))
        wx.reLaunch({
         url: '/pages/personal/personal',
       }) 
      }
    
   },

  /**
   * 页面的初始数据
   */
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
});
