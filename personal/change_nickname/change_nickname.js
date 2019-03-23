Page({
   seveNick(){
       wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 1000
        })
        setTimeout(function(){
             wx.navigateBack({
                    delta:1
              })   
        },1000)
       
   } 
})