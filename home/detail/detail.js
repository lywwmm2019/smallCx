var signFlag2=false;
var sign2='+';
var text2="添加成功";
var ti=true;
Page({
    data:{
        windowHeight:0,
        signFlag:signFlag2,
        sign:sign2,
        text:text2,
        maskSign:true
    },
    onReady:function(){
        this.animation = wx.createAnimation()
        wx.setNavigationBarTitle({
            title:"粤贵银"
        })
    },
    onLoad:function(){
        var that=this;
        wx.getSystemInfo({
	      success: function (res) {
	        that.setData({
	          windowHeight: res.windowHeight
	        })
	      }
	    })
    },
    change:function(e){
        if(ti){
            ti=false;
            signFlag2=!signFlag2;
            if(signFlag2){
                sign2="-"
                text2="添加成功"
            }else{
                sign2="+"
                text2="删除成功"
            }
            var that=this;
            that.setData({
                signFlag:signFlag2,
                sign:sign2,
                text:text2
            })
            that.animation.translate(0, 40).step({duration:300})
            that.setData({ 
                    animation: that.animation.export() 
                })
            setTimeout(function(){
                that.animation.translate(0, -40).step({duration:300})
                that.setData({ 
                    animation: that.animation.export() 
                })
                ti=true;
            },3000)
        }
    },
    xiadan:function(e){
        var that=this;
        that.setData({
            maskSign:false 
        })
    },
    close:function(e){
        var that=this;
        that.setData({
            maskSign:true 
        })
    }
})