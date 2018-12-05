/**
 * 定义全局过滤器
 */

 import Vue from 'vue';
/**
 * 将数字转化为字符串
 * @param value 需要传入的内容
 */
export const toString = Vue.filter('toSt',(value) => {
    if(!value) return value;
    let s=value.toString();
    return s
})