App({
  onLaunch (options) {
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      },
    })
    // Do something initial when launch.
  },
  onShow (options) {
    console.log(options)
    switch(options.scene){
        case 1019:
        break;
    }
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: {
    name:'甄嬛',
    age:17
  }
})
