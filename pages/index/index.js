// index.js
// 获取应用实例
import {findBannerApi,findCategory1Api,findListGoodsApi,findRecommendGoodsApi} from '../../utils/api'
import {backgroundImg} from '../../mock/swiper'
const app = getApp()

Page({
  data: {
    bannerList:[],
    navList:[],
    goodsList:[],
    recommendGoods:[],
    backgroundImg: backgroundImg, // 活动海报
  },
 
  onLoad() {
    this.getFindBanner()
    this.getFindCategory1() 
    this.getFindListGoods()
    this.getFindRecommendGoods()
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
    this.setData({
      goodsList:res.data
    })
  },
  async getFindRecommendGoods(){
    const res = await findRecommendGoodsApi()
    console.log(res.data)
    this.setData({
      recommendGoods: res.data
    })
  }
})
