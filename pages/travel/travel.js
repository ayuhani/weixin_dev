Page({

  /**
   * 页面的初始数据
   */
  data: {
    regions: [{
        name: 'CHN',
        value: '中国',
        checked: 'true'
      },
      {
        name: 'USA',
        value: '美国'
      },
      {
        name: 'BRA',
        value: '巴西'
      },
      {
        name: 'ENG',
        value: '英国'
      },
      {
        name: 'TUR',
        value: '法国'
      }
    ],
    time: '08:00',
    date: '2016-11-01',
    suggest: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  formSubmit(e) {
    console.log('提交表单')
    console.log(e.detail)
  },

  formReset() {
    console.log('重置表单')
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

  },

  /**
   * 选择出发日期
   */
  bindDateChange(e) {
    console.log(e.detail.value)
  },

  /**
   * 选择出发时间
   */
  bindTimeChange(e) {
    console.log(e.detail.value)

  }
})