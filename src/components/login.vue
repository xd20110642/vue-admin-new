<template>
    <div class="login">
        <div class="box">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="id">
                    <el-input type="text" v-model="ruleForm2.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
                </el-form>
        </div>
    </div>
</template>

<script>
 export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.pass !== '') {
            // this.$refs.ruleForm2.validateField('checkPass');
            callback();
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户信息'));
        }  else{
            callback()
        }
      };
      return {
        ruleForm2: {//定义表单数据
          id:'',//账号
          pass: '',//密码
        },
        rules2: {//定义的验证数据
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          id: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        // 判断是否回调成功
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 将结果存储在本地
            localStorage.setItem('name',this.ruleForm2.id);
            localStorage.setItem('password',this.ruleForm2.pass);
            // vuex改变状态
           this.$store.state.status=false;
            // 跳转路由
            this.$router.push({name:'home'}); 
            alert("登录成功")
          } else {
            alert("登录失败");
            return false;
          }
        });
      },
      resetForm(formName) {
        // 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 resetFields
        this.$refs[formName].resetFields();
      }
    },
   
  }
</script>

<style lang="scss" scoped>
    .login{
        width: 100%;
        height: 100%;
        background-color: white;
        text-align: center;
        padding: 1px;
        .box{
            width: 50%;
            margin: auto;
            text-align: center;
            margin-top: 100px;
            // border: 1px solid;
        }
    }
</style>

