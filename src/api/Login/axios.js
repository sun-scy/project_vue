import axios from 'axios'
const login = axios.create({
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