// pages/dynamic/analysis/analysis.js
const app = getApp()
const imageUrl = app.globalData.config.service.imageUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      content: '管理员账户登录法官自助服务终端管理平台显示数据查询和数据分析两大功能模块。数据查询是对打印记录的搜索查看，数据分析是按照终端、部门、打印类型进行图表分析。在按部门统计点击部门可进入部门各法官的使用情况。',
      title: '终端使用分析',
      imgUrl: imageUrl +'/analysis_01.png'
    },
    {
      content: '',
      title: '部门使用分析',
      imgUrl: imageUrl + '/analysis_02.png'
    },
    {
      content: '',
      title: '打印类型分析',
      imgUrl: imageUrl + '/analysis_03.png'
    }
    ]
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