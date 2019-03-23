Page({
    data:{
		title:'',
        windowHeight: 0,//获取屏幕高度
    	refreshHeight: 0,//获取屏幕高度
        hidden:true,
		refreshing: false,//是否在刷新中
    	refreshAnimation: {}, //加载更多旋转动画数据
    	clientY: 0,//触摸时Y轴坐标
    },
    onLoad: function () {
	    var that = this;
	    //获取屏幕高度
	    wx.getSystemInfo({
	      success: function (res) {
	        that.setData({
	          windowHeight: res.windowHeight
	        })
	        console.log("屏幕高度: " + res.windowHeight)
	      }
	    })
    },
		lower: function () {
			var that=this;
			that.setData({
				hidden:false,
				title:'正在加载...'
			})
			console.log("加载了...")
		/*	var start = 0;
			start += 1;
			
			var _this = this;
			wx.request({
				url: 'http://api.avatardata.cn/ChengYu/Search',
				data: {
					key: '77f072d28eb141c8b6dda145ca364b92', keyWord: '好', page: start
				},
				complete: function (res) {
					if (res.data.reason == 'Succes') {
						var words = _this.data.words.concat(res.data.result);
						_this.setData({
							words: words
						})
					}
				}
			})*/
		},
		upper: function () {
			console.log("下拉了....")
			//获取用户Y轴下拉的位移

		/*	if (this.data.refreshing) return;
			this.setData({ refreshing: true });
			updateRefreshIcon.call(this);
			var _this = this;
			var i = Math.random() //获得0-1的随机数
			i = Math.ceil(i * 10) //乘以10并向上去整
			var words = ['龙', '一', '万', '千', '浩', '金', '得', '而', '可', '人'];
			var word = words[i];
			wx.request({
				url: 'http://api.avatardata.cn/ChengYu/Search?key=77f072d28eb141c8b6dda145ca364b92&keyWord=' + word,

				complete: function (res) {
					if (res.data.reason == 'Succes') {
						setTimeout(function () {
							_this.setData({
								words: res.data.result
							})
						}, 2000)
					}
					setTimeout(function () {
						_this.setData({
							refreshing: false
						})
					}, 2500)
				}
			})*/
		},
		start: function (e) {
			var startPoint = e.touches[0]
			var clientY = startPoint.clientY;
			this.setData({
				clientY: clientY,
				refreshHeight: 0
			})
		},
		end: function (e) {
			var endPoint = e.changedTouches[0]
			var y = (endPoint.clientY - this.data.clientY) * 0.6;
			if (y > 50) {
				y = 50;
			}
			this.setData({
				refreshHeight: y
			})
		},
		move: function (e) {
			
		}
})