<template>
  <div class="cart-list">
    <scroll
      ref="scroll"
      class="scroll-content"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from 'views/shopcart/childComps/CartListItem'

import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  data () {
    return {}
  },

  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated () {
    this.$refs.scroll.refresh()
  }
}

</script>
<style>
.cart-list {
  height: calc(100% - 40px - 49px - 40px);
}
.scroll-content {
  height: 100%;
  overflow: hidden;
}
</style>