<template>
  <div class="nav">
    <div class="left">
      <div class="logo">
          <img src="../assets/logo.png" alt="">
      </div>
      <div class="name">
        管理后台
      </div>
    </div>
    <div class="conten">
      <navs-tabs></navs-tabs>
    </div>
    <div class="right">
      <nav-drow></nav-drow>
    </div>
  </div>
</template>

<script>
import navsTabs from './navTabs'
import navDrow from './navDrow'
export default {
  
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components:{
    navsTabs,
    navDrow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .nav{
    width: 100%;
    height: 60px;
    font-size: 0;
    display: flex;
    justify-content: space-between;
    .left{
      width: 200px;
      height: 100%;
      border-right: 1px solid white;
      display: flex;
      padding-left: 10px;
      .logo{
       flex: 0 0 20%;
        height: 100%;
        text-align: center;
        margin: auto;
        display: inline-block;
        img{
          width: 100%;
          margin: auto;
          margin-top: 35%;
        }
      }
      .name{
        flex: 1;
        display: inline-block;
        font-size: 12px;
      }
    }
    .conten{
      // padding-left: 30px;
    }
    .right{
      
    }
  }
</style>

