<template>
    <div class="errPage">
        <p>对不起,你访问的路径不存在</p>
        <p>{{time}}秒后将自动跳转到登陆界面</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            time:10
        }
    },
    methods:{
        Timer(){
          
            let timer=null;
            clearInterval(timer);
            var that=this;
            timer=setInterval(function() {
                that.time--;
                if(that.time==0){
                    clearInterval(timer);
                    that.$router.push({name:'login'})
                }
            },1000)
        }
    },
    created(){
        this.Timer()
    }
}
</script>

<style lang="scss" scoped>
    .errPage{
        width: 100%;
        // border: 1px solid;
        margin: auto;
        margin-top: 20%;
        text-align: center;
        color: red;
    }
</style>

