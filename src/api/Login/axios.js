import axios from 'axios'
const BASEURL = process.env.VUE_APP_BASEURL
const login = axios.create({
    baseURL:BASEURL,
    timeout:10000
})

login.interceptors.request.use((config)=>{
    return config
})

login.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default login