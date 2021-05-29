<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon">icon</slot>
    </div>
    <div v-else>
      <slot name="item-icon-active">active-icon</slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text">text</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeStyle: {
      type: String,
      default: '#ff5777'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeStyle } : {}
    }
  },
  components: {},
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}

</script>
<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>