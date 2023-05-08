// index.js
// 获取应用实例
import {findBannerApi} from '../../api/api'

const app = getApp()

Page({
  data: {
    bannerList:[]
  },
 
  onLoad() {
    this.getFindBanner()  
  },
  async getFindBanner(){
   const res = await findBannerApi()
     this.setData({
       bannerList: res.data
     })
  }
})
