<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      v-show="isTabFixed"
      class="tab-control"
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControl1"
    />
    <scroll
      ref="scroll"
      class="scroll-content"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper @swiperImageLoad="swiperImageLoad" v-if="swiperShow" :banners="banners" />
      <feature-view />
      <recommend-view :recommends="recommends" />
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from 'views/home/childComps/HomeSwiper'
import FeatureView from 'views/home/childComps/FeatureView'
import RecommendView from 'views/home/childComps/RecommendView'

import { getHomeMultiData, getHomeGoods } from 'network/home'
import { itemLisenerMixin, backTopMixin } from 'common/mixin'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    FeatureView,
    RecommendView
  },
  mixins: [itemLisenerMixin, backTopMixin],
  data () {
    return {
      banners: [],
      recommends: [],
      currentType: 'pop',
      swiperShow: false,
      isTabFixed: false,
      tabControlOffsetTop: 0,
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      }
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  unmounted () {
    console.log('destroyed')
  },
  mounted () { },
  activated () {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getScollY()

    this.$bus.off('itemImageLoad', this.itemImgLisener)
  },
  created () {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },

  methods: {
    swiperImageLoad () {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    contentScroll (position) {
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y) > this.tabControlOffsetTop
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
    },
    /* 数据请求 */
    getHomeMultiData () {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        this.swiperShow = true
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    },

  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: relative;
  z-index: 9;
}

.scroll-content {
  overflow: hidden;
  position: absolute;
  top: 40px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
