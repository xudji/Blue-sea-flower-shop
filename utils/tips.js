
 
export default function toast(title,icon="error"   ){
     wx.showToast({
       title,
       icon
     })
}