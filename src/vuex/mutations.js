/**
 * 同步修改状态
 * 
 */
import state from './state.js'
export default{
    // 修改状态
    SET_CODE(state,code){
        state.code=code
    },
    // 设置token
    SET_TOKEN(state,token){
        state.token=token;
        console.log(state.token);
    },
    // 设置状态
    SET_STATUS(state,status){
        state.status =status;
        console.log(state.status)
    },
    // 设置名字
    SET_NAME(state,name){
        state.name=name
    }
    // 
}