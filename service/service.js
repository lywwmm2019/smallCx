<<<<<<< .mine
// service/service.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})=======
var message="";
Page({
    data:{
        windowHeight:0,
				array:['粤贵银','粤贵铂','粤贵银锭'],
				array2:['GDAG','GDPT','GDAGV'],
				index:0,
				chose:false,
				yes:true,
				no:true,
				flag:true,
        phone:'182****9215',
        text:'',
        src:'../images/service-tx.png',
				toastHidden:true
    },
		bindPickerChange: function(e) {
			this.setData({
				index: e.detail.value
			})
		},
		display:function(e){
			var that=this;
			that.setData({
					chose:true,
					yes:false,
					no:true,
			})
		},
		display1:function(e){
			var that=this;
			that.setData({
					chose:true,
					yes:true,
					no:false,
			})
		},
    onLoad:function(options){
			console.log(options)
        var that = this;
	    //获取屏幕高度
	    wx.getSystemInfo({
	      success: function (res) {
	        that.setData({
	          windowHeight: res.windowHeight
	        })
	      }
	    })
    },
	bindChange:function(e){
        message = e.detail.value
		},
		send:function(){
			var that=this;
			if(message==''){
					that.setData({
							toastHidden:false
					})
					setTimeout(function(){
							that.setData({
									toastHidden:true
								})
					},3000)
						
			}else{
				that.setData({
					flag:false,
					text:message,
				})
				message='';
			}
		}
})>>>>>>> .r21931
