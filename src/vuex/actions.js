/**
 * 异步修改状态方法
 */
import mutations from './mutations'
import state from './state'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
const HOST ='https://cms.chimm.xyz/user/'
export default{
    //用户登录
    LoginByUsername({ commit }, userInfo){
        // 获取到用户名
        const username=userInfo.username;
     return   axios.post(HOST+'/login',{
            'password':'1',
            'username':username
        }).then((result) => {
            if(result.status==200){
                commit('SET_STATUS',false);
                commit('SET_TOKEN', '你好');
                 console.log(2); 
                return result
            }     
        }).catch((err) => {
            console.log(err);
            return err
        });
    },
    

}