var  cardTeams;
var startX;
var startY;
var endX;
var endY;
var  key;
var data=[];
var currentDay=0;
var currentMonth=0;
var currentYear=0;
var prevWeek='';
var nextWeek='';
var ind='';
var currYear=[];
var currMonth=[];
Page({
    data:{
       windowHeight: 0,//获取屏幕高度
       nowyear:2016,
       nowmonth:0,
       data2:[],
       data:['周一','周二','周三','周四','周五','周六','周日'],
       today:'',
       curYear:[],
       curMonth:[],
       list1:[
           {
                src:"../images/calendar-gq.png",
                title:"11月A1G/CBA服务业表现指数",
                prev:'50.5',
                expect:'--',
                sj:'51.1',
                time:'19:00'
            },
            {
                src:"../images/calendar-gq.png",
                title:"10月加班工资（年率）",
                prev:'-1.3%',
                expect:'--',
                sj:'--',
                time:'3:00'
            },
            {
                src:"../images/calendar-gq.png",
                title:"上周API精炼油库存变化",
                prev:'--',
                expect:'--',
                sj:'--',
                time:'12:00'
            },
            {
                src:"../images/calendar-gq.png",
                title:"11月贸易帐",
                prev:'+490.56',
                expect:'+466.90',
                sj:'--',
                time:'6:00'
            },
            {
                src:"../images/calendar-gq.png",
                title:"当国外央行持有国债变动（亿美元）（至1205）",
                prev:'--',
                expect:'--',
                sj:'--',
                time:'10:50'
            },
            {
                src:"../images/calendar-gq.png",
                title:"当国石油钻井总数",
                prev:'477',
                expect:'--',
                sj:'--',
                time:'1:00'
            },
            {
                src:"",
                title:"暂无数据",
                prev:'',
                expect:'',
                sj:'',
                time:'20:00'
            }

       ]
    },
    swiperChange:function(e){
        var that = this; 
        console.log(e.detail.current)
         if(e.detail.current  >6){
            console.log('fsf')
        }
        that.setData({ 
            today: e.detail.current   
        }); 
       
    },
    drawerStart:function(e){
        var touch=e.touches[0];
        //Touch是获取触摸点的一些数据，touches 是一个触摸点的数组，每个触摸点包括以下属性：
        //pageX,pageY：距离文档左上角的距离，文档的左上角为原点 ，横向为 X 轴，纵向为 Y 轴；
        //clientX,clientY：距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴；
        //screenX,screenY：距离屏幕左上角的距离，屏幕左上角为原点，横向为X轴，纵向为Y轴；
        startX=touch.clientX;
        startY=touch.clientY;
        key=true;
    },
    drawerMove:function(e){
        var dataId=e.currentTarget.id; //获取到前面唯一的id
        if(key){
            var touch=e.touches[0];
            endX=touch.clientX;
            endY=touch.clientY;
            var XNum=(endX-startX)<0 ? startX-endX:endX-startX;
            var YNum=(endY-startY)<0 ? startY-endY:endY-startY;
            if(XNum>=YNum){
                if((endX-startX)<=-5){
                    var years1 = nextWeek.getFullYear();
                    var months1 = nextWeek.getMonth()+1;
                    var days1 = nextWeek.getDate();

                     for(var j=0;j<7;j++){
                        if(j==0){
                            prevWeek=addDate(months1+"/"+days1+"/"+years1,+1);
                        }
                        if(j==6){
                            nextWeek=addDate(months1+"/"+days1+"/"+years1,+1);
                        }
                        var NextNow = addDate(months1+"/"+days1+"/"+years1,+1);
                        years1 = NextNow.getFullYear();
                        months1 = NextNow.getMonth()+1;
                        days1 = NextNow.getDate();
                        console.log(days1)
                        currentYear=NextNow.getFullYear();
                        currentMonth=NextNow.getMonth()+1;
                        
                        currYear[j]=years1;
                        currMonth[j]=months1;
                        data[j]=days1;
                        
                     }
                }else{
                    var years2 = prevWeek.getFullYear();
                    var months2 = prevWeek.getMonth()+1;
                    var days2 = prevWeek.getDate();
                     for(var h=6;h>=0;h--){
                        if(h==0){
                            prevWeek=addDate(months2+"/"+days2+"/"+years2,-1);
                        }   
                        if(h==6){
                            nextWeek=addDate(months2+"/"+days2+"/"+years2,-1);
                        }
                        var NextNow = addDate(months2+"/"+days2+"/"+years2,-1);
                        console.log(NextNow)
                        years2 = NextNow.getFullYear();
                        months2 = NextNow.getMonth()+1;
                        days2 = NextNow.getDate();
                        currentYear=NextNow.getFullYear();
                        currentMonth=NextNow.getMonth()+1;
                        
                        currYear[h]=years2;
                        currMonth[h]=months2;
                        data[h]=days2;
                     }
                }
            }
        }
        function addDate(dd,dadd){
            var a = new Date(dd)
            a = a.valueOf()
            a = a + dadd * 24 * 60 * 60 * 1000
            a = new Date(a)
            return a;
        }
        var that=this;
        that.setData({
            nowyear:currentYear,
            nowmonth:currentMonth,
            data2:data,
            curYear:currYear,
            curMonth:currMonth
        })
        key=false; //用户左滑距离很长时会发生多次左滑事件，这里定义一个开关发生第一次之后就关闭它
    },
    onLoad:function(e){
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
        var now = new Date();
        var years = now.getFullYear();
        var months = now.getMonth()+1;
        var days = now.getDate();
        var week = now.getDay();
        var curYear=years;
        var curMonths=months;
        var curDays=days;
        currentDay=days;
        currentMonth=months;
        currentYear=years;
        for(var i=0;i<7;i++){
             if(i==0){
                 prevWeek=addDate(months+"/"+days+"/"+years,-1);
             }
             if(i==6){
                 nextWeek=addDate(curMonths+"/"+curDays+"/"+curYear,+1);
             }
             console.log(i)
             console.log(week)
             if(i<week-1){
                var NextNow = addDate(months+"/"+days+"/"+years,-1);
                years = NextNow.getFullYear();
                months = NextNow.getMonth()+1;
                days = NextNow.getDate();
                currYear[i]=years;
                currMonth[i]=months;
                data[i]=days
            }else if(i==week-1){
               data[i]=currentDay;
               currYear[i]=currentYear;
               currMonth[i]=currentMonth;
               ind=i;
            }else if(i>week-1){
                var NextNow1 = addDate(curMonths+"/"+curDays+"/"+curYear,+1);
                console.log(NextNow1)
                curYear = NextNow1.getFullYear();
                curMonths = NextNow1.getMonth()+1;
                curDays = NextNow1.getDate();
                currYear[i]=years;
                currMonth[i]=months;
                data[i]=curDays
            }
        }
        function addDate(dd,dadd){
            var a = new Date(dd)
            a = a.valueOf()
            a = a + dadd * 24 * 60 * 60 * 1000
            a = new Date(a)
            return a;
        }
        var that=this;
        that.setData({
            nowyear:currentYear,
            nowmonth:currentMonth,
            data2:data,
            today:ind,
            curYear:currYear,
            curMonth:currMonth
        })
    },
    colorChange:function(e){
        var that=this;
        that.setData({
            today:e.target.dataset.current
        })
    }
})