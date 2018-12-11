// Page({
//   data: {
//     x: 0,
//     y: 0
//   },
//   tap: function (e) {
//     this.setData({
//       x: 30,
//       y: 30
//     });
//   }
// })
Page({
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  }
})