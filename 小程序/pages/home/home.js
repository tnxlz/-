// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     name:'甄嬛',
     age:18,
     object:[
       { name:'沈眉庄', age:20},
       { name:'温太医', age:21},
       { name:'果郡王', age:19}],
     count:0
  },
addClick(){
  this.setData({
    count:this.data.count+1
  })
},
subClick(){
  this.setData({
    count:this.data.count-1
  })
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