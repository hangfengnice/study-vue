<template>
  <div class='folder-wrapper'>
    <Tree :data='folderTree' :render='renderFunc'></Tree>
  </div>
</template>

<script>
import {getFolderList, getFileList} from '../../api/data'
import {putFileFolder, transferFolderToTree} from '../../lib/utils'

export default {
  name: "",
  props: {},
  data() {
    return {
      folderList: [],
      fileList: [],
      folderTree: [],
      renderFunc: (h, {root, node, data}) => {
        console.log(data)
        return (
          <div class="tree_item" style='display: inline-block; height: 30px; line-height: 30px;'>
          {data.type === 'folder' ? <icon type='ios-folder' color='@2d8cf0'/> : ""}
          {data.title}
          </div>
        )
      }
    }
  },
  mounted() {
    Promise.all([getFolderList(), getFileList()]).then(res => {
      console.log(putFileFolder(res[0].data, res[1].data))
      console.log(transferFolderToTree(putFileFolder(res[0].data, res[1].data)))
      this.folderTree = transferFolderToTree(putFileFolder(res[0].data, res[1].data))

    })
  }
}
</script>

<style lang='scss' scoped>
  .folder-wrapper{
    width: 300px;
    div.tree_item{
      width: calc(100% - 50px);
      height: 30px;
      line-height: 30px;
    }
  }
</style>