var arr=[];
Page({
    data:{
        currentTab:0,
        arr1:[],
    },
    bingChange:function(e){
        var that = this; 
        console.log( e.detail.current   )
        that.setData({ 
            currentTab: e.detail.current   
        }); 
    },
    swichNav: function( e ) { 
        var that = this;
        if( this.data.currentTab === e.target.dataset.current ) { 
            return false; 
        } else { 
            that.setData({ 
                currentTab: e.target.dataset.current  
            }) 
        } 
    },
    changPic:function(e){
        var num=e.target.dataset.current;
        if(arr[num]=='+'){
            arr[num]='-'
        }else{
            arr[num]='+'
        }
        var that=this;
        that.setData({
            arr1:arr
        })
    },
    onReady:function(e){
        for(var i=0;i<12;i++){
            arr[i]='+'
        }
        var that=this;
        that.setData({
            arr1:arr
        })
    } 
})