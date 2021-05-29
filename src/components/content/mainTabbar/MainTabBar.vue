<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon>
          <img src="~assets/img/tabbar/home.svg" alt />
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt />
        </template>
        <template #item-text>首页</template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template #item-icon>
          <img src="~assets/img/tabbar/category.svg" alt />
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt />
        </template>
        <template #item-text>分类</template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <template #item-icon>
          <img src="~assets/img/tabbar/shopcart.svg" alt />
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt />
        </template>
        <template #item-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template #item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt />
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt />
        </template>
        <template #item-text>我的</template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import { TabBar, TabBarItem } from 'components/common/tabbar'

export default {
  name: 'MainTabBar',
  data () {
    return {}
  },

  components: {
    TabBarItem,
    TabBar
  },
  methods: {}
}

</script>
<style scoped>
</style>