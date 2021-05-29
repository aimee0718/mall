<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :goods-item="item" :key="index" />
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
  name: 'Goods',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },

  components: { GoodsListItem },

  methods: {}
}

</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>