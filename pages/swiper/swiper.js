Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
    ],
    indicatorDots: true, // 是否显示指示点
    vertical: false, // 是否垂直显示指示点
    autoplay: false, // 是否自动播放
    duration: 1200, // 滑动动画时长
    interval: 3000, // 页面切换时间间隔
  },

  /**
   * 设置是否显示指示点
   */
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeVerticl(e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },

  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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