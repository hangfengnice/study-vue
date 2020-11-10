<template>
  <!-- <teleport to="modal"> -->
    <teleport to='#modal'>
          <div id="center">
      hello hangfeng gool
    </div>
    </teleport>

  <!-- </teleport> -->
</template>

<script lang="ts">
export default {}
</script>

<style>
#center {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
}
</style>
