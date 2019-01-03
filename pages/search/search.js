// pages/nav-byself/nav-byself.js
const utils = require('../../utils/util.js');
const config = require('../../config.js');
// const prodUrl='http://localhost:3000/json';
// const prodUrl='http://47.104.207.23/json';
const prodUrl = `${config.service.host}/json`;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenLoading: true,
    useStatusList: {},
    system: ['法官自助终端', '大数据应用平台', '办公办案平台','案件信息管理'],
    startTime:'',
    today:'',
    index: 0,
    dateTime: '',
    hasData: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });
    var _this=this;
    var date = utils.parseDate()
    this.setData({
      startTime: date,
      today:date,
      dateTime: date
    });

    wx.request({
      url: prodUrl, //仅为示例，并非真实的接口地址,
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        date: date,
        xtbh:this.data.index+''
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        _this.setData({
          useStatusList: data,
          hasData: utils.isTrue(res.data)
        })
      }
    })
  },

  systemChange: function (e) {
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });
    var _this = this;
    this.setData({
      index: e.detail.value
    })

    wx.request({
      url: prodUrl, //仅为示例，并非真实的接口地址,
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        date: this.data.startTime,
        xtbh: this.data.index
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        _this.setData({
          useStatusList: data,
          hasData: utils.isTrue(res.data) 
        })
      }
    })
  },

  bindDateChange: function (e) {
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });
    var _this = this;
    this.setData({
      startTime: e.detail.value,
      hiddenLoading: false
    })
    wx.request({
      url: prodUrl, //仅为示例，并非真实的接口地址,
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        date: e.detail.value,
        xtbh:this.data.index
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        _this.setData({
          useStatusList: data,
          hasData: utils.isTrue(res.data)
        })
      }
    })
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
  
  },
  //处理下拉事件
  pullListEnd: function (e) {
    var self = this;
    var pull = new Pull(function () {
      self.model.getNextPage();
    },"ManBody");
    pull.isListEnd(e);
  },
  compare: function (property){
    return function(a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value1-value2;
    }
  }
})