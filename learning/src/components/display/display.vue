<template>
  <div ref="display"></div>
</template>

<script>
import Vue from 'vue'
import randomStr from '../../utils/random_str'

export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      html: '',
      js: '',
      css: '',
      component: null,
      id: randomStr()
    }
  },
  methods: {
    getSource(source, type) {
      const reg = new RegExp(`<${type}[^>]*>`)
      let openingTag = source.match(reg)

      if (!openingTag) return ''
      else openingTag = openingTag[0]
      return source.slice(
        source.indexOf(openingTag) + openingTag.length,
        source.lastIndexOf(`</${type}>`)
      )
    },
    splitCode() {
      const script = this.getSource(this.code, 'script').replace(
        /export default/,
        'return '
      )
      const style = this.getSource(this.code, 'style')
      const template =
        '<div id="app">' + this.getSource(this.code, 'template') + '</div>'
      this.js = script
      this.css = style
      this.html = template
    },
    renderCode() {
      this.splitCode()
      if (this.html != '' && this.js != '') {
        const parseStrToFunc = new Function(this.js)()
        parseStrToFunc.template = this.html
        const Component = Vue.extend(parseStrToFunc)
        this.component = new Component().$mount()

        this.$refs.display.appendChild(this.component.$el)
        if (this.css != '') {
          const style = document.createElement('style')
          style.type = 'text/css'
          style.id = this.id
          style.innerHTML = this.css
          document.getElementsByTagName('head')[0].appendChild(style)
        }
      }
    },
    destroyCode() {
      const $target = document.getElementById(this.id)
      if ($target) $target.remove()
      if (this.component) {
        this.$refs.display.removeChild(this.component.$el)
        this.component.destroyCode()
        this.component = null
      }
    },
    beforeDestroy() {
      this.destroyCode()
    }
  },
  mounted() {
    console.log(this.code)
    this.renderCode()
  },
  wathch: {
    code() {
      this.destroyCode()
      this.renderCode()
    }
  }
}
</script>

<style></style>
