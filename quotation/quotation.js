<<<<<<< .mine
Page({
    data:{
        currentTab:0,
    },
    bingChange: function( e ) { 
        console.log(e)
        var that = this; 
        that.setData({ 
            currentTab: e.detail.current   
        }); 
    }, 
    swichNav: function( e ) { 
        console.log(e)
        var that = this;
        if( this.data.currentTab === e.target.dataset.current ) { 
            return false; 
        } else { 
            that.setData({ 
                currentTab: e.target.dataset.current  
            }) 
        } 
    } 
})=======
Page({
    data:{
        currentTab:0,
    },
    bingChange: function( e ) { 
        var that = this; 
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
    } 
})>>>>>>> .r21931
