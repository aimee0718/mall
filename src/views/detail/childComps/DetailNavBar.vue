<template>
  <div id="detail">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backAround">
          <img src="~assets/img/common/back.svg" alt />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            :class="{actived: currentIndex == index}"
            class="title-item"
            @click="titleClick(index)"
            v-for="(item, index) in titles"
            :key="item"
          >{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },

  methods: {
    backAround () {
      this.$router.go(-1)
    },
    titleClick (index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
}

.title-item {
  flex: 1;
}

.actived {
  color: var(--color-high-text);
}

.back img {
  margin-top: 10px;
}
</style>
