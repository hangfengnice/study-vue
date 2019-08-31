<template>
  <div class='folder-wrapper'>
    <!-- <Tree :data='folderTree' :render='renderFunc'></Tree> -->
    <folder-tree
    :folder-drop='folderDrop'
    :file-drop='fileDrop'
    :folder-list.sync='folderList'
    :file-list.sync='fileList' ></folder-tree>
  </div>
</template>

<script>
import {getFolderList, getFileList} from '../../api/data'
import {putFileFolder, transferFolderToTree} from '../../lib/utils'
import FolderTree from '../../components/folder-tree/folder-tree'

export default {
  name: "",
  components: {
    FolderTree
  },
  props: {},
  data() {
    return {
      folderList: [],
      fileList: [],
      folderDrop: [
        {
          name: "rename",
          title: "重命名"
        },
        {
          name: "delete",
          title: "删除文件夹"
        }
      ],
      fileDrop: [
        {
          name: "rename",
          title: "重命名"
        },
        {
          name: "delete",
          title: "删除文件"
        }
      ]
    }
  },
  mounted() {
    Promise.all([getFolderList(), getFileList()]).then(res => {
      // console.log(putFileFolder(res[0].data, res[1].data))
      this.folderList = res[0].data
      this.fileList = res[1].data
    })
  }
}
</script>

<style lang='scss' scoped>
  .folder-wrapper{
    width: 300px;
  }
</style>