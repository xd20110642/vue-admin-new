<template>
    <div class="zhiliao">
        <!-- 使用表单 必须用form-item来完成 -->
       <el-form ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules">
        <el-form-item label="修改姓名" prop="name">
            <el-col :span="11">
                <el-input v-model="ruleForm.name"></el-input>
            </el-col>
        </el-form-item>

        <el-form-item label="所属部门" prop="type">
            <!-- 单选框 -->
            <el-radio-group v-model="ruleForm.type">
                <el-radio label="技术部" name="type"></el-radio>
                <el-radio label="人力行政部" name="type"></el-radio>
                <el-radio label="UI设计部" name="type"></el-radio>
                <el-radio  label="销售团队" name="type"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="性别" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="自我描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('ruleForm')">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
</el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ruleForm: {
            name: '',//名字
            type: '',//所属部门
            resource: '',//性别
            desc: ''//自我描述
            },
            rules:{
                name:[
                    {required:true,message:'请输入姓名',trigger:'blur'}
                ],
                type:[
                    {required:true,message:'请选择所属部门',trigger:'blur'}
                ],
                resource:[
                    {required:true,message:'请选择性别',trigger:'blur'}
                ],
                desc:[
                    {required:true,message:'请随意填写',trigger:'blur'}
                ]

            }
        }
    },
    methods:{
        onSubmit(ruleForm){
            this.$refs[ruleForm].validate((valid) => {
          if (valid) {
           this.$store.state.name=this.ruleForm.name;
           this.$alert('修改成功','确定',{
               confirmButtonText:'确定',
               callback:(action) => {
                this.$router.push({
                    name:'home'
                    })
               }
           })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
        }
    }
}
</script>

<style lang="scss" scoped>
    .zhiliao{
        width: 100%;
        
    }
</style>

