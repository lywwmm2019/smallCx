var status = true;

Page({
    data:{
        selected:true,
        selected1:false,
        modalHidden: true,
        status:status
        },
    selected:function(e){
        this.setData({
            selected2:false,
            selected1:false,
            selected:true
        })
    },
    selected1:function(e){
        this.setData({
            selected2:false,
            selected:false,
            selected1:true
        })
    },
    selected2:function(e){
        this.setData({
            selected1:false,
            selected:false,
            selected2:true
        })
    },
    
  modalTap: function(e) {
    this.setData({
      modalHidden: false,
      
    })
    
  },
  modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
  },
 
 toastShow: function(event) {
   
    status = false
    this.setData({status:status})　　
  },
  toastHide:function(event){  
      status =true
      this.setData({
          status:status,
          modalHidden: true
          })
      
  },

})
