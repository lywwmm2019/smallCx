Page({
    data:{
        display:true
    },
    kh:function(e){
        console.log('fs')
        var that=this;
        that.setData({
            display:false
        })
    },
    displayNone:function(e){
        var that=this;
        that.setData({
            display:true
        })
    }
})