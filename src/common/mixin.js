import { debounce } from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemLisenerMixin = {
  data () {
    return {
      itemImgLisener: null
    }
  },
  mounted () {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgLisener = () => {
      newRefresh()
    }
    this.$bus.on('itemImageLoad', this.itemImgLisener)
  }
}

export const itemDetailLisenerMixin = {
  data () {
    return {
      itemImgLisener: null
    }
  },
  updated () {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgLisener = () => {
      newRefresh()
    }
    this.$bus.on('itemImageLoad', this.itemImgLisener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick () {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}