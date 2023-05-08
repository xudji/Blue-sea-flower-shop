// index.js
// 获取应用实例
import {findBannerApi,findCategory1Api} from '../../api/api'

const app = getApp()

Page({
  data: {
    bannerList:[],
    navList:[]
  },
 
  onLoad() {
    this.getFindBanner()
    this.getFindCategory1() 
  },
  async getFindBanner(){
   const res = await findBannerApi()
     this.setData({
       bannerList: res.data
     })
  },
  async getFindCategory1(){
   const res = await findCategory1Api()
   this.setData({
    navList:res.data
   })
  }
})
