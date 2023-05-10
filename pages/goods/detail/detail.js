import {reqGetGoodsDetailInfoApi,addToCartApi} from '../../../utils/api'



Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodDetail:{},
    goodsId:0,
    count: 0, 
    show:false,
    isAddCart:false,
    blessing:'' 
  },

  // 获取详情信息
  async getGoodsDetailInfo(goodsId) {
     const res = await reqGetGoodsDetailInfoApi(goodsId)
     if(res.code === 200) {
       this.setData({
         goodDetail:res.data
       })
     }
  },  

 // 改变购物车数量 
 handleChangeCount(e){
  this.setData({
    count:e.detail
  })
 },
  // 立即购买
  handleBuyNow(){
 this.setData({
   show:true,
   isAddCart:false
 })
  }, 
  // 加入购物车确定
  handleConfirm(){
     let { goodsId,count,blessing,isAddCart}  = this.data
    
     // 没填祝福语返返回
     if(!blessing.trim()) {
       wx.showToast({
         title: '请添加祝福语',
         icon:'error'
       })
       return
     }
     // 如果添加购物车 
     if(isAddCart) {
       this.handleAddToCart() 
     }  else {
      wx.navigateTo({
        url: `/pages/order/detail/detail?goodsId=${goodsId}&blessing=${blessing}`
      })
     }
     wx.showToast({
       title: '添加成功~',
     })
    this.setData({
        show: false,
        blessing: ''
      })
  },

   // 关闭弹窗
   onClose(){
      this.setData({
        show:false,
        blessing:''
      })
   },

  async handleAddToCart(){  
    const { goodsId,count,blessing } = this.data
    this.setData({
      show:true,
      isAddCart:true
    })
    const res = await addToCartApi({goodsId,count,blessing})
    if(res.code === 200) {
      console.log(res)
     
    }
    else {
      showToast(result.data)
    }
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     const goodsId = options.goodsId
     this.setData({
      goodsId
     })
    
     this.getGoodsDetailInfo(goodsId)
  },
  onClose(){
    this.setData({
      show:false
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})