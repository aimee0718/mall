<template>
  <div class="cart-bottom-bar">
    <div class="cart-bar-check">
      <check-button :is-checked="isSelectedAll" @click="checkBtnClick" class="cart-bar-btn" />
      <span>全选</span>
    </div>
    <div class="cart-total">合计: {{'￥' + totalPrice}}</div>
    <div class="cart-calc">去计算 ({{cartNums}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartBottomBar',
  data () {
    return {
      checked: true
    }
  },
  computed: {
    totalPrice () {
      return this.$store.state.cartList.filter(item => item.checked).reduce((pre, item) => {
        return pre + item.price * item.count
      }, 0)
    },
    cartNums () {
      return this.$store.state.cartList.filter(item => item.checked).reduce((pre, item) => {
        return pre + item.count
      }, 0)
    },
    isSelectedAll () {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  components: { CheckButton },

  methods: {
    checkBtnClick () {
      this.checked = !this.checked
      this.$store.state.cartList.map(item => { item.checked = this.checked })
    }
  }
}

</script>
<style scoped>
.cart-bottom-bar {
  position: relative;
  height: 40px;
  background-color: #eee;
}

.cart-bar-check {
  padding-top: 10px;
  float: left;
  width: 100px;
}

.cart-bar-btn {
  float: left;
  width: 20px;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  margin-left: 5px;
}
.cart-bar-check span {
  margin-left: 5px;
}
.cart-total {
  padding-top: 10px;
  float: left;
  padding-right: 10px;
}

.cart-calc {
  padding: 10px;
  float: right;
  height: 40px;
  left: 40px;
  background-color: var(--color-tint);
  color: #fff;
}
</style>