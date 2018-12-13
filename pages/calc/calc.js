Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: "", // 保存被加数
    num2: "", // 保存加数
    result: "" // 保存计算结果
  },

  bindInput1(e) {
    var num = e.detail.value
    if (!isNaN(num)) {
      this.setData({
        num1: num
      })
    }
  },

  bindInput2(e) {
    var num = e.detail.value
    if (!isNaN(num)) {
      this.setData({
        num2: num
      })
    }
  },

  bindAdd(e) {
    var sum = this.data.num1 * 1 + this.data.num2 * 1
    this.setData({
      result: sum
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