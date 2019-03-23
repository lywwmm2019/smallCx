<<<<<<< .mine
Page({})=======
var app=getApp();
Page({
    data:{
        selected:true,
        selected1:false,
        windowWidth:0,
        imgUrls: [
            'http://wx.zhengjin99.com/data/news/124/1479440619607.jpg',
            'http://wx.zhengjin99.com/data/news/124/1471414308968.jpg',
        ],
        links:[
            'http://hd.zhengjin99.com/h5-activity/2016/baoming/index.html',
            'http://hd.zhengjin99.com/activity/2016/download/index.html'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        current1:0,
        time:1000,
        currentTab:0,
    },
    bindCha: function( e ) { 
        console.log('df')
        var that = this; 
        that.setData({ 
            currentTab: e.detail.current   
        }); 
    }, 
    selected: function( e ) { 
        var that = this;
        console.log(e.target.dataset.current)
        if( this.data.currentTab === e.target.dataset.current ) { 
            return false; 
        } else { 
            that.setData({ 
                currentTab: e.target.dataset.current  
            }) 
        } 
    }, 
    pullDownRefresh: function( e ) {
        console.log( "下拉刷新...." )
        this.onLoad()
    },

    pullUpLoad: function( e ) {
        this.setData( {
            page: this.data.page + 1
        })

        console.log( "上拉拉加载更多...." + this.data.page )

        this.getDataFromServer( this.data.page )
    },
    onReady:function(){
        this.animation = wx.createAnimation()
    },
    onLoad:function(){
        var that=this;
        wx.getSystemInfo({
	      success: function (res) {
	        that.setData({
	          windowWidth: res.windowWidth
	        })
	      }
	    })
    },
    bindChange:function(e){
        var ind=e.detail.current;
        var that = this; 
        if(ind==3){
            that.setData({ 
                time:10
            });
        }else{
            that.setData({ 
                time:1000
            });
        }
        
    }

})>>>>>>> .r21931
