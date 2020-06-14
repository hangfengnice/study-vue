<template>
  <div>
    {{$route.params.name}}
    {{name}}
    {{food}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    food: {
      type: String
    }
  }
}
</script>

<style>

</style>
