import config from './config'

export default function ({ url,data={},method="get" }) {
  return new Promise((resolve, reject) => {
    // 异步操作的代码逻辑
    wx.request({
      url: config.BASE_URL + url,
      data,
      method,
      success: (res) => {
        // 将 Promise 对象标记为成功状态，并传递异步操作的结果值
        resolve(res.data)
      },
      fail: (err) => {
        // 将 Promise 对象标记为失败状态，并传递错误信息
        reject(err)
      }
    })
  })
}