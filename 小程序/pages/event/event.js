// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     cartoon:['熊出没','喜羊羊与灰太狼','哪吒传奇']
  },
  handletouchstart(){
    console.log('handletouchstart')
  },
  handletouchmove(){
    console.log('handletouchmove')
  },
  handletouchcancel(){
    console.log('handletouchcancel')
  },
  handletouchend(){
    console.log('handletouchend')
  },
  handletap(){
    console.log('handletap')
  },
  handlelongpress(){
    console.log('handlelongpress')
  },
  handleClick(event){
    console.log('handleClick',event)
  },
  handle(event){
    console.log(event)
  },
  handleCaptureView1(){
    console.log('handleCaptureView1')
  },
  handleBindView1(){
    console.log('handleBindView1')
  },
  handleCaptureView2(){
    console.log('handleCaptureView2')
  },
  handleBindView2(){
    console.log('handleBindView2')
  },
  handleCaptureView3(){
    console.log('handleCaptureView3')
  },
  handleBindView3(){
    console.log('handleBindView3')
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