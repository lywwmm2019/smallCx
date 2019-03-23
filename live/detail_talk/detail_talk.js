var flg=true;
var slide= 0;
wx.getSystemInfo({
    success: function(res) {
     this.wheight=res.windowHeight,
     this.slideheight=this.wheight-215
     slide=this.slideheight
     
    }  
  });

Page({
  data:{
    src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    focus: false,
    inputValue: '',
    hiddenLoading:true,
    bindclick:false,
    hiddenint:true,
    scrollTop:0
  },
  
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  onReady: function () {
    this.animation = wx.createAnimation()
  },
 translate: function () {
    this.animation.translate(0, -(slide)).step(),
    console.log(slide)
    this.setData({ animation: this.animation.export() })
    this.setData({
       hiddenLoading:!this.data.hiddenLoading
     }) 
    },
     
  bindclose:function(){
     this.setData({
       hiddenLoading:!this.data.hiddenLoading
     })
  },
   bindopen:function(){
     console.log(this.data.scrollTop)
     if(flg){
     this.setData({
        
       hiddenint:false  
     })
   }
   else{
     this.setData({
       
       hiddenint:false   
     })
  }flg=!flg
  this.setData({
  scrollTop:this.data.scrollTop+2000,
  })
  },
  bindclick:function(){
    if(flg){ 
      this.setData({
        bindclick:true,
      })
    }else{
      this.setData({
        bindclick:false
      })
    }
    flg=!flg;
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  
})