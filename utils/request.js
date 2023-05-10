import config from './config'
import {toast} from './tips'

export default function ({ url,data={},method="get" }) {
   // 设置请求头
   const header = {
     'Content-Type':'application/json'
   }
   // 获取一下token 不一定有 
  const token = wx.getStorageSync('token')
  token && (header.token = token)
  return new Promise((resolve, reject) => {
    // 异步操作的代码逻辑
    wx.showLoading({
      title: '正在加载'
    });
    wx.request({
      url: config.BASE_URL + url,
      data,
      method,
      header,
      success: (res) => {
        wx.hideLoading();
        if(res.data.code === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail: (err) => {
        // 将 Promise 对象标记为失败状态，并传递错误信息
        wx.hideLoading();
       
        reject(err)
      }
    })
  })
}