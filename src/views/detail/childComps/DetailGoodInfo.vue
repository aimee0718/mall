<template>
  <div class="detail-good-info">
    <div class="detail-info">
      <div class="detail-title">
        <span>{{itemInfo.title}}</span>
      </div>
      <div class="detail-price">
        <span>{{itemInfo.newPrice}}</span>
      </div>
      <div class="detail-columns">
        <div v-for="item in itemInfo.columns" :key="item">{{item}}</div>
      </div>
    </div>
    <div class="detail-express">
      <div v-show="index > 0 && index < 4 " v-for="(item, index) in itemInfo.services" :key="index">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodInfo",
  props: {
    itemInfo: {
      typeof: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-info {
  padding: 0 10px;
  border-bottom: 2px solid #eee;
}

.detail-title {
  margin: 15px 2px;
  font-size: 15px;
}

.detail-price span {
  font-size: 20px;
  color: var(--color-tint);
}

.detail-columns {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  color: rgb(161, 160, 160);
  font-size: 12px;
}

.detail-express {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  border-bottom: 5px solid #eee;
}

.detail-express img {
  width: 15px;
  vertical-align: middle;
}

.detail-express span {
  font-size: 12px;
}
</style>