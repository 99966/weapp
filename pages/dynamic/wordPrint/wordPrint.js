// pages/dynamic/wordPrint/wordPrint.js
const app = getApp()
const imageUrl = app.globalData.config.service.imageUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      content: '操作流程：案件选择->文书类型选择->当事人选择->打印。用户登录系统后进入到案件列表页面，分为在办案件（审理中的案件列表）、已结案件（结案日期180天以内的案件）、我的预定（预约打印的案件列表）。支持案号和案件名称的模糊查询，如图6所示。',
      title: '图6 案件列表',
      imgUrl: imageUrl+'/wordPrint_01.png'
    }, {
      content: '选择案件列表中某个案件进入文书类型选择页面，如图7所示。',
      title: '图7 打印材料类型',
      imgUrl: imageUrl + '/wordPrint_02.png'
      }, {
        content: '选择打印文书类型后进入当事人选择页面，选择一个或多个当事人后点击“继续打印”即可完成签章文书打印，如图8所示。',
        title: '图8 当事人选择',
        imgUrl: imageUrl + '/wordPrint_03.png'
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