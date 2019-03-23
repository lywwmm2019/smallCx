Page({
  data:{
    tabSwitch:['block',''],
    color:['#fff','#f89fa3']
  },  
  tabSwitch: function(event) {
    let me = this;
    var arr = new Array(2);

    var color = ['#f89fa3','#f89fa3'];

    arr[parseInt(event.currentTarget.id.split('-')[1])-1] = 'block';  
    color[parseInt(event.currentTarget.id.split('-')[1])-1] = '#fff';
    me.setData({
      tabSwitch:arr,
      color:color    
    }) 
  }
})