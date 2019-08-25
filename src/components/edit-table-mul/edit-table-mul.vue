<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from 'clonedeep'

export default {
  name: "EditTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      editingId: "",
      insideColumns: [],
      editingContent: ''
    };
  },
  watch: {
    columns() {
      this.handleColumns()
    },
    value() {
      this.handleColumns()
    }
  },
  methods: {
    handleClick({row, index, column}) {

      if(this.editingId === `${column.key}_${index}`) {
        let tableData = clonedeep(this.value)
        tableData[index][column.key] = this.editingContent
        this.$emit('input', tableData)
        this.$emit('on-edit', {row, index, column, newValue: this.editingContent})
        this.editingId = ''
        this.editingContent = ''
      } else {
        this.editingId = `${column.key}_${index}`
      }
      
    },
    handleInput(newValue) {
      this.editingContent = newValue
    },
    handleColumns() {
      const insideColumns = this.columns.map(item => {
      if(!item.render && item.editable) {
        item.render = (h, {row, index, column}) => {
          const isEditing = this.insideColumns[index] ? this.insideColumns[index].eidttingKeyArr : []
          return (
            <div>
            {isEditing && isEditing.indexOf(column.key) > -1 ? <i-input on-input={this.handleInput} value={row[column.key]} style='width: 50px;'></i-input> :<span>{row[column.key]}</span>}
            <i-button on-click={this.handleClick.bind(this, {row, index, column})}>{isEditing && isEditing.indexOf(column.key) > -1 ? '保存' : '编辑'}</i-button>
            </div>
          )
        }
        return item
      } else {
        return item
      }
    })
    this.insideColumns = insideColumns
    }
  },
  mounted() {
    this.handleColumns()
  }
};
</script>

<style lang='scss' scoped>
</style>