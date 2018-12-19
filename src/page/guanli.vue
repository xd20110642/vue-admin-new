<template>
    <div class="guanli">
        <!-- 获取传递的参数 -->
        我是{{this.$route.query.name}}页面
        <p>这里可以使用动态组件</p>
        <component :is="componentname"></component>
    </div>
</template>

<script>
import config from '../components/config'
import character from '../components/Character'
import timetask from '../components/timedTasK'
export default {
    data(){
        return{
            mess:''
        }
    },
    components:{
        config,
        character,
        timetask
    },
    computed:{
        componentname(){
            let ac=this.$route.query.name;
            if(ac=='first'){
                return config;
            }else if(ac=='second'){
                return config
            }else if(ac=='third'){
                return character
            }else if(ac=='fourth'){
                return timetask
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

