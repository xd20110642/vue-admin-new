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
    },
    //设置返回回来的数组
    SET_CONTACTARR(state,contactArr){
        state.contactArr=contactArr
    },
    //设置总页数
    SET_TotalPages(state,totalpages){
        state.totalPages=totalpages;
    },
    //设置总条数
    SET_total(state,total){
        state.total=total;
    }

}