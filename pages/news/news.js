// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'init data',
    array:[{text:'init data',text2:'init data 2'}],
    object:{text:'init data'},
    newFiled:{text:'init data'}
  },

  changeText:function(){
    this.setData({
      text:'changed data'
    })
  },

  changeItemInArray:function(){
    this.setData({
      'array[0].text':'changed data'
    })
  },

  changeItemInObject:function(){
    this.setData({
      'object.text':'changed data'
    })
  },

  addNewField:function(){
    this.setData({
      'newFiled .text':'new data'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
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