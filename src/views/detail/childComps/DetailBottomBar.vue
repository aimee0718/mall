<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailBottomBar',
  components: {
  },
  data () {
    return {
    }
  },

  methods: {
    addToCart () {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  width: 100%;
  height: 49px;
  line-height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}

.bar-left > div {
  position: relative;
  flex: 1;
}

.bar-left .text {
  position: absolute;
  color: #000;
  transform: translateX(-50%);
  top: 13px;
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}

.bar-left .service {
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 13px;
  text-align: center;
}

.bar-right > div {
  flex: 1;
}

.bar-right .cart {
  padding: 0 10px;
  background-color: var(--color-tint);
  color: #fff;
}

.bar-right .buy {
  color: var(--color-tint);
}
</style>
