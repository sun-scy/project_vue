/*
 * @Author: mikey.sunchongyang 
 * @Date: 2020-08-18 15:26:03 
 * @Last Modified by: mikey.sunchongyang
 * @Last Modified time: 2020-08-18 15:46:54
 * 
 * 
 * url:接口地址
 * method: 请求方式
 * cross:使用哪个域名
 * token:是否需要携带token
 * isForm:是否为FormData格式
 * hook是否添加函数勾子
 * 
 * 
 * govUrl:https://www-test.rencaiyoujia.cn/govapi
 * public:https://api.rencaiyoujia.cn
 */
import util from '../util'
export default {
    api:{
        getNewsList:{
            ...util('/client/notice/list','post','govUrl')
        }
    }
}