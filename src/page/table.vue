<template>
    <div class="table">
       <el-table :data="tableData" stripe border style="width: 100%" height="500">
        <el-table-column prop="birthday" label="生日" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column  label="操作">
          <!-- 自定义列表删除的编辑事件 -->
          <template slot-scope="scope" width="100">
               <el-button type="primary" size="small" @click="xiugai(scope.row)">修改</el-button>
               <!-- 获取的当前的列的内容 -->
                <el-button type="primary" size="small" @click="deleteMess(scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="aa">
        <el-pagination
      layout="prev, pager, next"
      :total="Allpage"
       @current-change="handleCurrentChange"
      >
  </el-pagination>
    </div>
   
    </div>
</template>

<script>
export default {
     data() {
        return {
          // tableData:this.$store.state.contactArr,
          tableData:null,
          Allpage:this.$store.state.total
        }
      },
      methods:{
        // 获取到索引值 分页查询
        handleCurrentChange(val){
          const pageInfo={page:val};
          // 使用vuex修改数据
            this.$store.dispatch('GetContact',pageInfo).then((result) => {
          if(result.code=200){
           this.$nextTick(() => {
             this.tableData=result.data.rows
           })
          }
        }).catch((err) => {
          console.log(err)
        });
        },
        // 删除信息
        deleteMess(row){
          console.log(row)
        },
        //修改信息 
        xiugai(row){
            const info=row;
            console.log(info);
            this.$router.push({name:'xiugai',params:{info}})
        }
      },
      created(){
        const pageInfo={page:1};
        this.$nextTick(() => {
          this.$store.dispatch('GetContact',pageInfo).then((result) => {
          if(result.code=200){
            console.log(result.data);
            // 修改总页数
            this.$store.commit('SET_TotalPages',result.data.totalPage);
            // 修改总条数
            this.$store.commit('SET_total',result.data.total)
            // 存储数组
            // this.$store.commit('SET_CONTACTARR',result.data.rows)
            this.tableData=result.data.rows;
          }
        }).catch((err) => {
          console.log(err)
        });
        })
        
      }
}
</script>

<style>
  .aa{
    float: right;
  }
</style>
