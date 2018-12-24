<template>
    <!-- 修改资料 -->
    <div class="xiugai">
        <p>修改资料</p>

<el-form ref="form" :model="form" label-width="80px" :inline='true'>
  <el-form-item label="用户姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="家庭地址">
      <el-input v-model="form.add"></el-input>
  </el-form-item>

  <el-form-item label="电话">
   <el-input v-model="form.phone"></el-input>
  </el-form-item>
</el-form>
    <el-button class="left" @click="getUpdate">提交</el-button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            form:{
                name:'',
                add:'',
                phone:''
            },
            a:null
        }
    },
    // 接受路由传递的参数
    created(){
        this.a=this.$route.params.info;
        this.form.name=this.a.name;
        this.form.add=this.a.address;
        this.form.phone=this.a.phone;
        
    },
    // 
    methods:{
        getUpdate(){
            const params={
                address:this.form.add,
                birthday:this.a.birthday,
                lid:this.a.lid,
                name:this.form.name,
                phone:this.form.phone
            }
            this.$store.dispatch('SaveUserInformation',params).then((result) => {
                // console.log(result)
                if(result.status==200){
                   this.$alert('修改成功', '提示', {
                 confirmButtonText: '确定',
                callback: action => {
                    this.$router.go(-1);
            }
        });
                }
            }).catch((err) => {
                console.log(err)
            });
        }
    }
}
</script>

<style>
    .left{
        float: right;
    }
</style>
