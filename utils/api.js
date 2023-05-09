import request from './request'
// 首页轮播
export const findBannerApi = () => {
  return request({
   url:'/mall-api/index/findBanner'})
}
// navicon
export const findCategory1Api = () => {
  return request({
   url:'/mall-api/index/findCategory1'})
}

// 商品数据
export const findListGoodsApi = () => {
  return request({
   url:'/mall-api/index/findListGoods'})
}
// 人气推荐
export const findRecommendGoodsApi = () => {
  return request({
   url:'/mall-api/index/findRecommendGoods'})
}
// 获取分类数据
export const findCategoryTreeApi = () => {
  return request({
   url:'/mall-api/index/findCategoryTree'})
}
// 获取分页商品数据

export const goodsListApi = ({page,limit,...rest}) => {
  return request({
   url:`/mall-api/goods/list/${page}/${limit}`,data:rest})
}







