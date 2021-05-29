<template>
  <div class="navbar">
    <div class="slot-left">
      <slot name="left"></slot>
    </div>
    <div class="slot-center">
      <slot name="center"></slot>
    </div>
    <div class="slot-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.slot-left,
.slot-right {
  width: 49px;
}

.slot-center {
  flex: 1;
}
</style>