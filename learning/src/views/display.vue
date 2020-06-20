<template>
  <div>
    <i-display :code="code"></i-display>
  </div>
</template>

<script>
import iDisplay from '../components/display/display'
import defaultCode from './default-code'

export default {
  data() {
    return {
      code: defaultCode
    }
  },
  components: {
    iDisplay
  }
}
</script>

<style></style>
