<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {}
  },

  components: {},
  methods: {
  }
}

</script>
<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  border: 2px solid #eee;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
}

.check {
  border-color: var(--color-tint);
  background-color: var(--color-tint);
}

.check-button img {
  padding: 3px;
  width: 100%;
  height: 100%;
}
</style>