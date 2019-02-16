<template>
    <div>
      <el-upload
        class="upload-demo"
        action="/api/sssfmDemo/fileUpload/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList2"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button type="primary" >下载<i class="el-icon-download el-icon--right"></i></el-button>
    </div>
</template>

<script>
    export default {
        name: "fileUpload",
      data() {
        return {
          fileList2: [{name: 'food.jpeg', url: 'http://192.168.16.128/group1/M00/00/00/wKgQgFwi41aAUutUAAxBdEXAGwU085.jpg'}, {name: 'food2.jpeg', url: 'http://192.168.16.128/group1/M00/00/00/wKgQgFwi41aAUutUAAxBdEXAGwU085.jpg'}]
        };
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          window.location.href = file.url;
        }
      }
    }
</script>

<style scoped>

</style>
