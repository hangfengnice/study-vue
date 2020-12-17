<template>
  <div class="home">
    <input type="text" @keydown.enter="handleEnter" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      name: 'hf',
    }
  },
  methods: {
    handleEnter(event) {
      console.log('enter', event)
    },
  },
}
</script>
