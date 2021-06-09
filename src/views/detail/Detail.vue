<template>
  <div @load="detailImageLoad" v-if="Object.keys(detailInfo).length!==0" class="detail">
    <detail-nav-bar ref="nav" class="detail-nav-tab" @titleClick="titleClick" />
    <scroll
      @scroll="contentScroll"
      ref="scroll"
      class="scroll-content"
      :probe-type="3"
      :pull-up-load="true"
    >
      <detail-swiper :top-images="topImages" />
      <detail-good-info :item-info="itemInfo" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-all-info @imgLoad="detailImageLoad" :detail-info="detailInfo" />
      <detail-params ref="params" :item-params="itemParams" />
      <detail-comments ref="comment" :comment-info="commentInfo" />
      <detail-recommend ref="recommend" :recommend-info="recommendInfo" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <toast ref="toast" :message="message" :show="show"></toast>
  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar'
import DetailSwiper from 'views/detail/childComps/DetailSwiper'
import DetailGoodInfo from 'views/detail/childComps/DetailGoodInfo'
import DetailShopInfo from 'views/detail/childComps/DetailShopInfo'
import DetailAllInfo from 'views/detail/childComps/DetailAllInfo'
import DetailParams from 'views/detail/childComps/DetailParams'
import DetailComments from 'views/detail/childComps/DetailComments'
import DetailRecommend from 'views/detail/childComps/DetailRecommend'
import DetailBottomBar from 'views/detail/childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import Toast from 'components/common/toast/Toast'

import { itemDetailLisenerMixin, backTopMixin } from 'common/mixin'
import { debounce } from 'common/utils'
import { getDetail, getRecommend, GoodsInfo, ShopInfo, DetailInfo, } from 'network/detail'

import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  mixins: [itemDetailLisenerMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodInfo,
    DetailShopInfo,
    DetailAllInfo,
    DetailParams,
    DetailComments,
    DetailRecommend,
    DetailBottomBar,
    Scroll,
    Toast
  },
  data () {
    return {
      iid: null,
      topImages: [],
      itemInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      themeTopYs: [],
      getThemeTopYs: null,
      currentIndex: 0,
      message: '',
      show: false
    }
  },
  updated () {

  },
  mounted () {

  },
  unmounted () {
    this.$bus.off(this.itemImgLisener)
  },
  created () {
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
    this.getRecommend()
    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
      this.themeTopYs.push(Number.MAX_VALUE)
    })
  },
  methods: {
    ...mapActions(['addCart']),
    detailImageLoad () {
      this.$refs.scroll.refresh()
      this.getThemeTopYs()
    },
    titleClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300)
    },
    contentScroll (position) {
      const positionY = -position.y
      this.isShowBackTop = (positionY) > 1000
      const length = this.themeTopYs.length
      for (let i = 0; i < length; i++) {
        if (this.currentIndex != i &&
          (i < length - 1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    backAround () {
      this.$router.go(-1)
    },
    addToCart () {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.itemInfo.title
      product.desc = this.itemInfo.desc
      product.price = this.itemInfo.lowPrice
      product.iid = this.iid
      this.addCart(product).then(res => {
        this.$refs.toast.show(res, 1500)
      })
    },
    getDetail (info) {
      getDetail(info).then(res => {
        const data = res.result
        this.topImages = res.result.itemInfo.topImages
        this.itemInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.detailInfo = new DetailInfo(data.detailInfo)
        this.itemParams = data.itemParams
        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
    },
    getRecommend () {
      getRecommend().then(res => {
        const data = res.data
        this.recommendInfo = data.list
      })
    }
  }
}
</script>

<style>
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}
.detail-nav-tab {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.scroll-content {
  background-color: #fff;
  height: calc(100% - 40px);
}
</style>
