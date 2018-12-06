<template>
<div class="home">
   <el-container>
        <el-header>
          <nav-top></nav-top>
          <!-- <nav-top></nav-top> -->
        </el-header>
    <el-container>
      <el-aside width="210px">
       <nav-left></nav-left>
      </el-aside>
      <el-main>
        <!-- 展示页面 -->
         <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>
</div>
    
</template>

<script>

import navLeft from './Aside'
import navTop from './nav'

export default {
    components:{
   
    navLeft,
    navTop
  }
}
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }
</style>
