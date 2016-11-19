//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log('onLoad')
    const that = this

    app.getUserInfo((userInfo) => {
      that.setData({
        userInfo,
      })
    })

    wx.request({
      url: 'http://localhost:3000/motto/最初の問題',
      success(res) {
        console.log(res)
        that.setData({
          motto: res.data
        })
      }
    })
  },
})
