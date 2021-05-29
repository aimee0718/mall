<template>
  <div id="home-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div
          v-for="(item, index) in slideCount"
          :class="{active: index === currentIndex-1}"
          class="indi-item"
          :key="index"
          @click="changeItem(index)"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      slideCount: 0,
      totalWidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      scrolling: false
    }
  },
  mounted () {
    this.handelDom()
    this.startTimer()
  },
  methods: {
    startTimer () {
      this.playTime = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },
    stopTimer () {
      window.clearInterval(this.playTime)
    },
    scrollContent (currentPosition) {
      this.scrolling = true
      this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms'
      this.setTransform(currentPosition)
      this.checkPosition()
      this.scrolling = false

    },
    checkPosition () {
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms'
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
      }, this.animDuration)
    },
    setTransform (postion) {
      this.swiperStyle.transform = `translateX(${postion}px)`
      this.swiperStyle['-webkit-transform'] = `translateX(${postion}px)`
      this.swiperStyle['-ms-transform'] = `translateX(${postion}px)`
    },
    handelDom () {
      let swiperEl = document.querySelector('.swiper')
      let slidesEls = swiperEl.querySelectorAll('.slide')
      this.slideCount = slidesEls.length
      if (this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true)
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
        swiperEl.insertBefore(cloneLast, slidesEls[0])
        swiperEl.appendChild(cloneFirst)
        this.totalWidth = swiperEl.offsetWidth
        this.swiperStyle = swiperEl.style
      }
      this.setTransform(-this.totalWidth)
    },
    touchStart (e) {
      if (this.scrolling) return
      this.stopTimer()
      console.log(e.touches);
      this.startX = e.touches[0].pageX
    },
    touchMove (e) {
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      let currentPosition = -this.currentIndex * this.totalWidth
      let moveDistance = this.distance + currentPosition
      this.setTransform(moveDistance)
    },
    touchEnd: function (e) {
      let currentMove = Math.abs(this.distance)
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex++
      }
      this.scrollContent(-this.currentIndex * this.totalWidth)
      this.startTimer()
    },
    changeItem (index) {
      this.stopTimer()
      this.currentIndex = index + 1
      this.scrollContent(-this.currentIndex * this.totalWidth)
      this.startTimer()
    }
  }
}

</script>
<style scoped>
#home-swiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>