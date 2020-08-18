export default (url,method,cross,token='',isForm=null,hook=false) =>{

    let newObj = {
        url,
        method,
        cross,
        token,
        isForm,
        hook
    }

   return newObj
}