<template>
<div class="nav-drow">
    <el-dropdown @command="handleCommand">
        <el-button type="primary">
            {{name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <!-- 插槽  -->
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="修改">修改资料</el-dropdown-item>
            <el-dropdown-item command="流程">新建流程</el-dropdown-item>
            <el-dropdown-item command="文档">新建文档</el-dropdown-item>
            <el-dropdown-item command="请求">我的请求</el-dropdown-item>
            <el-dropdown-item command="登录">退出登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>
    
</template>

<script>
export default {
    data(){
        return{
          
        }
    },
    methods:{
        handleCommand(e){
           if(e=="登录"){
              this.$router.push({name:'login'})
              this.$store.state.status=true;
           }else if(e == "修改"){
               this.$router.push({name:'zhiliao'})
           }
        }
    },
    // 使用计算属性来完成动态修改
    computed:{
        name(){
            return this.$store.state.name
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

