Page({
  data:{
    tabSwitch:['none']
  },  
  talkPhone: function(event) {
     let me = this;
     var arr;
     arr = 'block';  
     me.setData({
      tabSwitch:arr,    
     })
  },
  cancelBtn: function(){
    let me = this;
     var arr;
     arr = 'none';  
     me.setData({
      tabSwitch:arr,    
     })
  },
  passBtn: function(){
    wx.makePhoneCall({
      phoneNumber: '010-53955285', //此号码并非真实电话号码，仅用于测试
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  }
})