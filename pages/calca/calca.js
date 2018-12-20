Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: "0", // 计算结果
    id1: "history", // 历史
    id2: "clear", //清除
    id3: "back", //回退
    id4: "div", //除
    id5: "num_7",
    id6: "num_8",
    id7: "num_9",
    id8: "mul", // 乘
    id9: "num_4",
    id10: "num_5",
    id11: "num_6",
    id12: "sub", // 减
    id13: "num_1",
    id14: "num_2",
    id15: "num_3",
    id16: "add", // 加
    id17: "negative", //取负
    id18: "num_0",
    id19: "dot", // 小数点
    id20: "equ", // 等号
    temp: 0, // 临时结果
    lastoper: "+", // 上一次操作符
    flag: false, // 上一按钮是非数字按钮
    record: true, // 计算过程记录到历史记录中
    expr: '', // 表达式
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  // 点击事件处理
  clickButton(e) {
    var data = this.data.result; // 获取上一个结果值

    var temp = this.data.temp; // 取上次的临时结果
    var lastoper1 = this.data.lastoper; // 上一次的运算符
    var noNumFlag = this.data.flag; // 上一次的非数字按钮标志
    var expr1 = this.data.expr; // 获取前面的表达式

    if (e.target.id >= "num_0" && e.target.id <= "num_9") {
      // 点击数字键
      if (this.data.result == '0' || noNumFlag) { // 原值为0或者上次按的是非数字
        data = ""
      }
      data += e.target.id.split("_")[1]
      noNumFlag = false
    } else {
      // 不是数字键
      noNumFlag = true;

      if (e.target.id == "dot") {
        // 点击小数点
        if (data.toString().indexOf('.') == -1) {
          // 输入的值中没有小数点
          data += "."
        }
      } else if (e.target.id == "clear") {
        // 清除按钮
        data = '0'
        temp = '0'
        lastoper1 = '+' // 设置上次运算符为加
      } else if (e.target.id == 'negative') {
        // 数字取负
        data *= -1
      } else if (e.target.id == "back") {
        // 按回退
        if (data.toString().length > 1) {
          // 长度超过一位数
          data = data.toString().substring(0, data.toString().length - 1)
        } else {
          // 置0
          data = 0
        }
      } else if (e.target.id == 'div') {
        // 除法
        expr1 += data.toString() + "÷"
        console.log(expr1)
        data = this.calculate(temp, lastoper1, data)
        temp = data;
        lastoper1 = "/"
      } else if (e.target.id == 'mul') {
        // 乘法
        expr1 += data.toString() + "×"
        console.log(expr1)
        data = this.calculate(temp, lastoper1, data)
        temp = data;
        lastoper1 = "*"
      } else if (e.target.id == 'add') {
        // 加法
        expr1 += data.toString() + "+"
        console.log(expr1)
        data = this.calculate(temp, lastoper1, data)
        temp = data;
        lastoper1 = "+"
      } else if (e.target.id == 'sub') {
        // 减法
        expr1 += data.toString() + "-"
        console.log(expr1)
        data = this.calculate(temp, lastoper1, data)
        temp = data;
        lastoper1 = "-"
      } else if (e.target.id == 'equ') {
        // 等于
        expr1 += data.toString()
        console.log(expr1)
        data = this.calculate(temp, lastoper1, data)
        expr1 += "=" + data
        console.log(expr1)
        if (this.data.record) {
          this.saveExprs(expr1)
        }
        expr1 = ''
        temp = 0;
        lastoper1 = "+"
      } else if (e.target.id == 'history') {
        wx.navigateTo({
          url: '../history/history',
        })
      }
    }
    this.setData({
      result: data, // 更新结果值
      temp: temp,
      lastoper: lastoper1,
      flag: noNumFlag,
      expr: expr1,
    })
  },

  /**
   * 计算结果
   */
  calculate(data1, oper, data2) {
    var data;
    data1 = parseFloat(data1);
    data2 = parseFloat(data2);
    switch (oper) {
      case "+":
        data = data1 + data2;
        break;
      case "-":
        data = data1 - data2;
        break;
      case "*":
        data = data1 * data2;
        break;
      case "/":
        if (data2 == 0) {
          data = 0;
        } else {
          data = data1 / data2;
        }
        break;
    }
    return data;
  },

  /**
   * 保存历史记录
   */
  saveExprs(expr) {
    var exprs = wx.getStorageSync('exprs') || []
    exprs.unshift(expr) // 在数组开头增加一个元素
    wx.setStorageSync('exprs', exprs)
  },

  /**
   * 修改记录标志
   */
  recordHistory(e) {
    this.setData({
      record: e.detail.value
    })
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