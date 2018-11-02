//index.js
//获取应用实例
const app = getApp()
const imageUrl = app.globalData.config.service.imageUrl

Page({
  data: {
    imgUrls: [
      imageUrl+'banner/banner_01.png',
      imageUrl+'banner/banner_02.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    // circular:true
  },
  //事件处理函数
  onLoad: function () {
  },
  getUserInfo: function(e) {
    
  }
})
