// pages/weather/weather.js

import {
  formatTime
} from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      today: formatTime(new Date()).split(' ')[0] // 更新当前日期
    })
    this.searchWeather('北京')
  },

  searchWeather(cityName) {
    wx.request({
      url: 'http://wthrcdn.etouch.cn/weather_mini?city=' + cityName,
      success: res => {
        if (res.data.status == 1002) {
          // 无此城市
          wx.showModal({
            title: '提示',
            content: '输入的城市名称有误，请重新输入！',
            showCancel: false,
            success: res => {
              this.setData({
                inputCity: ''
              })
            }
          })
        } else {
          let weather = res.data.data
          for (let index of weather.forecast) {
            let d = weather.forecast[index].date
            weather.forecast[index].date = ' ' + d.replace('星期', ' 星期')
          }
          this.setData({
            city: cityName,
            weather: weather,
            inputCity: ''
          })
        }
      }
    })
  },

  inputing(e) {
    this.setData({
      inputCity: e.detail.value
    })
  },

  bindSearch(e) {
    this.searchWeather(this.data.inputCity)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})