<template>
  <div id="shopcart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车 ({{cartListLength}})</div>
      </template>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from 'views/shopcart/childComps/CartList'
import CartBottomBar from 'views/shopcart/childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Shopcart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartListLength'])
  }
}
</script>

<style>
#shopcart {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
