var message="";
Page({
    data:{
        windowHeight:0,
				array:['5秒','10秒','15秒','20秒','25秒'],
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
})