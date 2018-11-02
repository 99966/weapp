// pages/dynamic/emsPrint/emsPrint.js
const app = getApp()
const imageUrl = app.globalData.config.service.imageUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      content: '操作流程：案件选择->快递单选择->当事人选择->寄送材料选择->打印。快递单的当事人收件地址数据来源：审判系统中的送达地址、当事人地址和预约记录中填写的地址，如图5所示。',
      title: '图5 EMS打印',
      imgUrl: imageUrl + '/emsPrint_01.png'
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