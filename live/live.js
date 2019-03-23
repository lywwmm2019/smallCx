
var order = ['livevideo', 'dakastudio'];
//var height=0;
//wx.getSystemInfo({
 //   success: function(res) {
  //   height=res.windowHeight-70
  //  }  
  //});
Page({
  data: {
    toView: 'livevideo',
    scrollLeft:0,
    className:'red',
    classNameDefault:'',
    currentTab:0,
    tabSwitch:['red',''],
    height:0
  },
onLoad(){
  let me = this;
  wx.getSystemInfo({
    success: function(res) {
      me.setData({
        height: res.windowHeight-70    
      })
    
    }  
  });
},
  left: function(e) {   
     this.setData({
       scrollLeft: this.data.scrollLeft,
       className:'red',
       classNameDefault:''
     })
  },
  right: function(e) {   
    this.setData({
       scrollLeft: this.data.scrollLeft + 750,
       classNameDefault:'red',
       className:''
     })
  }, 
  tap: function(e) {
    this.setData({
          toView: order[0],
          scrollLeft:0,
          className:'red',
          classNameDefault:''
        })      
  },
  tapMove: function(e) {  
        this.setData({
          toView: order[1],
          scrollLeft:750,
          className:'',
          classNameDefault:'red'
        })      
     },
  
    bindSwiper(e){
        let arr = new Array(1);
        let index = e.detail.current;
        arr[index] = 'red';
        this.setData({
         tabSwitch:arr,
         currentTab:e.detail.current
        })
    },

    swichNav(e) {
        let arr = new Array(1);
        let index = e.currentTarget.dataset.current;
        arr[index] = 'red';
        this.setData({
            tabSwitch:arr,
            currentTab:index
        })
     }
    
})
