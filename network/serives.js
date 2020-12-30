export default function(option){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: 'http://123.207.32.32:8000/api/h8/'+option.url,
      method:option.method || 'get',
      data:option.data || {},
      success:function(res){
        resolve(res.data)
      },
      fail:function(err){
        reject(err)
      }
    })
  })
}

