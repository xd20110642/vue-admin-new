<template>
    <div class="Aside">
        <!--open sub-menu 展开的回调 default-active 默认激活哪一个 unique-opened-->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <!-- <el-menu-item index="1">
           <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
      </el-menu-item> -->
        <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
        </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return{
            itemArr:[
                {
                    title:'导航一'
                },
                {
                    title:'导航二'
                },
                {}
            ]
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        console.log('--------');
        console.log(keyPath);
        console.log('--------');
        console.log(key)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
