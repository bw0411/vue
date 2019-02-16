<template>
  <div>
    <Table :data="tableData1" :columns="tableColumns1" stripe>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <div style="margin: 10px;overflow: hidden">
      <div>
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData1: [],
        tableColumns1: [
          {
            title: '编号',
            key: 'billNo'
          },
          {
            title: '类型',
            key: 'billType'
          },
          {
            title: '来源系统',
            key: 'srcSys'
          },
          {
            title: '是否打印',
            key: 'isPrint'
          },
          {
            title: '备注',
            key: 'remark'
          },
          {
            title: '类型_编号',
            key: 'billNo_billType'
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ]
      }
    },
    created(){
      this.mockTableData1();
    },
    methods: {
      mockTableData1 () {
        this.$http.get( '/api/sssfmDemo/api/sssfmIoBillTest',{})
          .then(function(res){
            if(res.status == 200){
              // 成功回调
              this.tableData1 = res.data;
              console.log(res.data);
            }
          },function(){
            alert("error")
          })
      },
      formatDate (date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
      },
      changePage () {
        // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
        this.tableData1 = this.mockTableData1();
      },
      show(index){
        console.log(index);
      },
      remove(index){
        console.log(index);
      }
    }
  }
</script>
