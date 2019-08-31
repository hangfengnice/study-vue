<template>
  <Tree :data='folderTree' :render='renderFunc'></Tree>
</template>

<script>
import {putFileFolder, transferFolderToTree} from '../../lib/utils'
import clonedeep from 'clonedeep'

export default {
  name: "FolderTree",
  props: {
    folderList: {
      type: Array,
      default: () => []
    },
    fileList: {
      type: Array,
      default: () => []
    },
    folderDrop: Array,
    fileDrop: Array
  },
  data() {
    return {
      folderTree: [],
      currentRenameId: '',
      currentRenamingContent: "",
      renderFunc: (h, {root, node, data}) => {
        // console.log(data)
        const dropList = data.type === 'folder' ? this.folderDrop : this.fileDrop
        const dropdwonRender = dropList.map(item => {
          return <dropdownItem name={item.name}>{item.title}</dropdownItem>
        })
        const isRenaming = this.currentRenameId === `${data.type || 'file'}_${data.id}`
        return (
          <div class="tree_item" style='display: inline-block; height: 30px; line-height: 30px;'>
          {data.type === 'folder' ? <icon type='ios-folder' color='@2d8cf0'/> : ""}
          {
            isRenaming
            ?  <span>
                 <i-input value={data.title} on-input={this.handleInput} class='tree-rename-input'></i-input>
                 <i-button size='small' type='text' on-click={this.saveRename.bind(this, data)}><icon type='md-checkmark' /></i-button>
                 <i-button size='small' type='text' ><icon type='md-close'/></i-button>
               </span>
            : <span>{data.title}</span>
            }
          {
           dropList && !isRenaming ? <dropdown placement='right-start' on-on-click={this.handleDropdownClick.bind(this, data)} >
            <i-button size='small' type='text' >
              <icon type='md-more' size={12}  />
              
            </i-button>
            <dropdown slot='list'>
              {dropdwonRender}
            </dropdown>
          </dropdown> : ''
          }
          </div>
          
        )
      }
    }
  },
  watch: {
    folderList() {
      this.transData()
    },
    fileList() {
      this.transData()
    }
  },
  methods: {
    transData() {
      this.folderTree = transferFolderToTree(putFileFolder(this.folderList, this.fileList))
    },
    isFolder(type) {
      return type === 'folder'
    },
    handleDelete(data) {
      const isFolder = this.isFolder(data.type)
      let updateListName = isFolder ? 'folderList' : 'fileList'
      let list = isFolder ? clonedeep(this.folderList) : clonedeep(this.fileList)
      list = list.filter(item => item.id !== data.id)
      this.$emit(`update:${updateListName}`, list)
    },
    handleDropdownClick(data, name) {
      if(name === 'rename') {
        this.currentRenameId = `${data.type || 'file'}_${data.id}`
      } else if (name === 'delete') {
        this.$Modal.confirm({
          title: "提示",
          content: `您确定要删除${this.isFolder(data.type) ? '文件夹' : '文件'}《${data.title}》吗?`,
          onOk: () => {
            this.handleDelete(data)
          }
        })
      }
    },
    handleInput(value) {
      this.currentRenamingContent = value
    },
    updateList(list, id) {
      let i = -1
      let len = list.length
        while(++i < len) {
          let folderItem = list[i]
          if(folderItem.id === id) {
            folderItem.name = this.currentRenamingContent
            list.splice(i, 1, folderItem)
            break
          }
        }
        return list
    },
    saveRename(data) {
      let id = data.id
      let type = data.type
      let i = -1
      if(type === 'folder') {
         const list =  this.updateList(clonedeep(this.folderList), id)
         this.$emit('update:folderList', list)
      } else {
        const list = this.updateList(clonedeep(this.fileList), id)
        this.$emit('update:fileList', list)
      }
      this.currentRenameId = ''
    }
  },
  mounted() {
    this.transData()
  }
}
</script>

<style lang='scss' scoped>
.tree-rename-input{
  width: calc(100% - 80px)
}
</style>