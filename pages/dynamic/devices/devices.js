// pages/dynamic/devices/devices.js
const app = getApp()
const imageUrl = app.globalData.config.service.imageUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      content: '管理员账户登录法官自助服务终端管理平台可查看设备监控状态（终端设备和打印机）',
      title: '图13 设备监控',
      imgUrl: imageUrl + '/devices_01.png'
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})