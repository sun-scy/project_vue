
const govUrl = process.env.VUE_APP_API_BASE_URL
const publicUrl = process.env.VUE_APP_API_PUBLIC
const formcUrl =  process.env.VUE_APP_API_FORMC



export default (axios,config={})=>{
    if(!config.api)
        throw new Error("api配置必须存在")
    if(!config.api instanceof Object)
        throw new Error("api必须得是一个对象")

    const httpUtil = {};
    const api = config.api;

    for(let name in api){
        let {url,method,isForm,hooks,token,cross} =api[name];
        if(hooks){
            api[name].beforeReq = hooks.beforeReq;
            api[name].AfterReq = hooks.AfterReq;
        }

        httpUtil[name] = async (data={})=>{
            if(!(data instanceof Object)) //如果传入的数据不是对象 则报错
                throw new Error("请求数据必须是一个对象")

            let transformData = null;
            if(isForm){
                transformData = new FormData();
                for(let key in data){
                    transformData.append(key,data[key])
                }
            }else {
                transformData = data;
            }
            /*
                前端向后退传递数据的方式
                    1. params    localhsot:8080/a/b/params1/params2
                    2. query(key=val)     localhsot:8080/a/b?query1&query2
                    3. 请求头
            */
            let Authorization = token&&token();
            if( Authorization === null || Authorization===undefined){
                Authorization = ""
            }
            switch (cross) {
                case 'govUrl':
                    url = govUrl+url
                    break;
                case 'public':
                    url = publicUrl+url
            
                default:
                    url = formcUrl+url
                    break;
            }
            let body = "";
            switch (method){
                case "get":
                case "delete":
                    api[name].beforeReq && api[name].beforeReq()
                    body = await axios({
                        url,
                        method,
                        params:transformData,
                        headers:{
                            Authorization:Authorization
                        }
                    })
                    api[name].AfterReq && api[name].AfterReq()
                    break;
                case "put":
                case "post":
                    api[name].beforeReq && api[name].beforeReq()
                    body = await axios({
                        url,
                        method,
                        data:transformData,
                        headers:{
                            Authorization:token
                        }
                    })
                    api[name].AfterReq && api[name].AfterReq()
                    break;
            }

            return body
        }
    }

    return httpUtil;
}