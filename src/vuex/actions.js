/**
 * 异步修改状态方法
 */
import mutations from './mutations'
import state from './state'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
const HOST ='https://cms.chimm.xyz/'
export default{
    //用户登录
    LoginByUsername({ commit }, userInfo){
        // 获取到用户名
        const username=userInfo.username;
        return axios.post(HOST +'user//login',{
            'password':'1',
            'username':username
        })
    },
    // 获取用户信息
    GetContact({commit},pageInfo){
        const page=pageInfo.page||1;
        // get传参用param  这个凭借到URL后面
        return axios.get(HOST +'linkman/findAll',{
            params:{
                'page':page,
                'size':10
            }
        })
    },
    // 修改用户信息
    SaveUserInformation({commit},userInfo){
            const user=userInfo;
            console.log(user)
        return axios.post(HOST+'linkman/save',{
                "address": user.address,
                "birthday": user.birthday,
                "lid": user.lid,
                "name": user.name,
                "phone": user.phone  
        })
    }
    

}