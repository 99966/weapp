// pages/dynamic/emsReservation/emsReservation.js
const app = getApp()
const imageUrl = app.globalData.config.service.imageUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      content: '法官登录法官自助服务终端管理平台（非终端设备上操作），进入EMS预约页面，显示在办案件（审理中的案件列表）、已结案件（结案日期180天以内的案件列表）、预约中（已经预约未打印的案件列表）、已打印（预约完成打印的案件列表）。如图1所示，可以在案件列表中选择一个案件进行当事人预约。',
      title: '图1 EMS预约当事人选择',
      imgUrl: imageUrl+'/emsReservation_01.png'
    }, {
      content: '选择当事人后进入EMS快递单填写页面，默认数据来源于审判系统的接口案件信息，可修改其中部分内容，如图2所示。',
      title: '图2 EMS预约详情',
      imgUrl: imageUrl + '/emsReservation_02.png'
    }]
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