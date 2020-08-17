
import login from '../pages/login.vue'
export default [
    {
        path:"/login",
        component:login
    },
    {
        path:'/',
        redirect:'/login'
    }
]