// pages/dynamic/direction/direction.js
const app = getApp()
const imageUrl = app.globalData.config.service.imageUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      content: '法官直接输入审判系统的用户名和密码即可登录，如图9所示。',
      title: '图9 用户名密码登录',
      imgUrl: imageUrl+'/login/login.png'
    }, {
      content: '法官可点击用户名进行部门人员的选择，再输入对应密码登录，如图10所示。',
      title: '图10 部门人员选择',
      imgUrl: imageUrl + '/login/login_02.png'
      }, {
        content: '身份证登录（身份证采集后可用）。点击身份证登录弹出提醒如图11所示，正确放置身份证在指定区域后再次点击登录即会自动匹配用户进行登录。',
        title: '图11 身份证登录',
        imgUrl: imageUrl + '/login/login_03.png'
    }, {
      content: '工作证登录（工作证采集后可用）。点击工作证登录弹出提醒如图12所示，正确放置工作证在指定识别区域后自动匹配用户进行登录。',
      title: '图12 工作证登录',
      imgUrl: imageUrl + '/login/login_04.png'
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