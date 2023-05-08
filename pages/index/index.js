// index.js
// 获取应用实例
import {findBannerApi,findCategory1Api,findListGoodsApi} from '../../api/api'

const app = getApp()

Page({
  data: {
    bannerList:[],
    navList:[],
    goodsList:[]
  },
 
  onLoad() {
    this.getFindBanner()
    this.getFindCategory1() 
    this.getFindListGoods()
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
  },
  async getFindListGoods(){
    const res =  await findListGoodsApi()
    console.log(res.data)
    this.setData({
      goodsList:res.data
    })
  }
})
