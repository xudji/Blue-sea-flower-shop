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

// 登录接口
export const loginApi = (code) => {
  return request({
   url:`/mall-api/weixin/wxLogin/${code}`})
}



// 获取登录用户信息
export const getuserInfoApi = () => {
  return request({
   url:'/mall-api/weixin/getuserInfo'})
}

// 更新用户信息
export const updateUserApi = (userInfo) => {
  return request({
    url: `/mall-api/weixin/updateUser`,
    method: 'post',
    data: userInfo
  })
}
// 获取商品详情数据信息
export const reqGetGoodsDetailInfoApi = (goodsId) => {
  return request({ url:`/mall-api/goods/${goodsId}`})
}

// 添加购物车商品
export const addToCartApi = ({goodsId,count,blessing}) => {
  return request({ url:`/mall-api/cart/addToCart/${goodsId}/${count}`, data:{blessing}}) // data 是个对象 固定写法
}

// 获取购物车数据

export const getCartListApi = () => {
  return request({
   url:`/mall-api/cart/getCartList`})
}










