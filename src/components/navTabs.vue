<template>
    <div class="nav-tabs">
         <el-tabs v-model="activeName" @tab-click="handleClick">
             <el-tab-pane v-for="(item,key) of tabsArr" :key="key" 
             :label="item.label"
             :name="item.name"
             >
                {{item.label}}
             </el-tab-pane>
            <!-- <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
         </el-tabs>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeName:'first',
            tabsArr:[
                {label:'用于管理',name:'first'},
                {label:'配置管理',name:'second'},
                {label:'角色管理',name:'third'},
                {label:'定时任务补偿',name:'fourth'}
            ]
        }
    },
    methods:{
        handleClick(){
            this.$router.push({
                name:'guanli',
                query:{name:this.activeName}
            })
            console.log(this.activeName)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

