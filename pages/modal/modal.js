Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    modalHidden2: true,
    regions: [{
        name: 'CHN',
        value: '中国',
        checked: true
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
    date: '2016-11-01',
    name: '',
    selectRegions: []
  },

  modalTap(e) {
    this.setData({
      modalHidden: false,

    })
  },

  modalTap2(e) {
    this.setData({
      modalHidden2: false
    })
  },

  modalChange(e) {
    this.setData({
      modalHidden: true
    })
    console.log(e.type)
  },

  input(e) {
    this.setData({
      name: e.detail.value
    })
  },

  regionChange(e) {
    this.setData({
      selectRegions: e.detail.value
    })
  },

  modalChange2(e) {
    this.setData({
      modalHidden2: true
    })
    console.log(e.type)
    console.log(this.data.name)
    console.log(this.data.selectRegions)
    console.log(this.data.date)
  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
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