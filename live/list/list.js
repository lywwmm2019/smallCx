Page({
    data:{
        currentTab:0,
        tabSwitch:['red','','','',''] 
    },
    bindSwiper(e){
        let arr = new Array(6);
        let index = e.detail.current;
        arr[index] = 'red';
        this.setData({
         tabSwitch:arr,
         currentTab:e.detail.current
        })
    },

    swichNav(e) {
        let arr = new Array(6);
        let index = e.currentTarget.dataset.current;
        arr[index] = 'red';
        this.setData({
            tabSwitch:arr,
            currentTab:index
        })
     }
})
