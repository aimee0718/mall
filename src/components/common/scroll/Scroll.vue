<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // 1.创建BScroll对象
    const options = {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    }
    this.scroll = new BScroll(this.$refs.wrapper, options)
    // 2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    // 3.监听上拉事件
    this.scroll.on('pullingUp', () => {
      console.log('pullingUp')
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll.refresh()
      this.scroll.finishPullUp()
    }
  }
}

</script>
<style>
</style>