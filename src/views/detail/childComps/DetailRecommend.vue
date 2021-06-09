<template>
  <div>
    <goods-list :goods="recommendInfo"></goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'

export default {
  components: { GoodsList },
  name: "DetailRecommend",
  props: {
    recommendInfo: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {

  }
}

</script>
<style scoped>
</style>