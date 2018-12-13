Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default', // default按钮的初始大小
    primarySize: 'default', // primary按钮的初始大小
    warnSize: 'default', // warn按钮的初始大小
    disabled: false, // 按钮初始禁用状态
    plain: false, // 按钮初始镂空状态
    loading: false // 按钮初始显示loading图标状态
  },

  default (e) {
    var d = this.data.defaultSize === 'default' ? 'mini' : 'default'
    this.setData({
      defaultSize: d
    })
  },

  primary(e) {
    var d = this.data.primarySize === 'default' ? 'mini' : 'default'
    this.setData({
      primarySize: d
    })
  },

  warn(e) {
    var d = this.data.warnSize === 'default' ? 'mini' : 'default'
    this.setData({
      warnSize: d
    })
  },

  setDisabled(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },

  setPlain(e) {
    this.setData({
      plain: !this.data.plain
    })
  },

  setLoading(e) {
    this.setData({
      loading: !this.data.loading
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