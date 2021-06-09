<template>
  <div class="detail-shop-info">
    <div class="shop-title">
      <img :src="'http://'+shopInfo.shopLogo" alt />
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-sells">
      <div class="shop-sell-info">
        <div class="shop-sell">
          <p>{{sells}}</p>
          <p>总销量</p>
        </div>
        <div class="shop-goods">
          <p>{{shopInfo.shopGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-sell-score">
        <div class="shop-sell-score-item" v-for="item in shopInfo.score" :key="item">
          <span>{{item.name}}</span>
          <span v-if="item.isBetter" class="score_red">{{item.score}} 高</span>
          <span v-else class="score_green">{{item.score}} 低</span>
        </div>
      </div>
    </div>
    <div class="shop-url">
      <a :href="shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      typeof: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    sells () {
      let count = this.shopInfo.shopSells / 10000
      let times = Math.pow(10, 2)
      let roundCount = Math.round(times * count) / times
      return roundCount.toFixed(2) + '万'
    }
  }

}
</script>

<style scoped>
.detail-shop-info {
  border-bottom: 3px solid #eee;
}
.shop-title {
  padding: 10px;
}
.shop-title img {
  width: 40px;
  margin-right: 5px;
  vertical-align: middle;
  border-radius: 50%;
  border: 3px solid #eee;
}

.shop-title span {
  font-size: 14px;
}

.shop-sells {
  display: flex;
}

.shop-sell-info {
  flex: 50%;
  display: flex;
  float: left;
  justify-content: space-evenly;
  margin: 20px 0;
  text-align: center;
  border-right: 2px solid #eee;
  font-size: 12px;
}

.shop-sell-info p {
  padding: 3px;
}

.score_red {
  color: red;
}

.score_green {
  color: green;
}

.shop-sell-score {
  flex: 50%;
  font-size: 12px;
}

.shop-sell-score-item {
  padding: 5px 10px;
}
.shop-sell-score-item span {
  padding: 5px 10px;
}

.shop-url {
  width: 40%;
  height: 25px;
  line-height: 25px;
  margin: 10px auto;
  text-align: center;
  background-color: #eee;
  border-radius: 5px;
  font-size: 12px;
}
</style>