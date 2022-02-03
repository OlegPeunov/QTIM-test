class Api{
  constructor(config){
    this.url = config.url
       

  }
  
   _getResponseData(res){
    if(res.ok){
      return res.json()
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`)); 
  }

  getCards=()=>{
    return fetch(this.url, {
      
    })
      .then(this._getResponseData)
  }

  getCardInfo=(id)=>{
    return fetch(`${this.url}${id}`, {
      
    })
      .then(this._getResponseData)
  }

  
}


const newApi = new Api({
  url: `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/`,
  
})

export default newApi










