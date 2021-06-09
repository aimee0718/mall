<template>
  <div class="detail-all-info">
    <div class="detail-title">{{detailInfo.desc}}</div>
    <div class="detail-images-list" v-for="item in detailInfo.detailImage" :key="item">
      <p>{{item.key}}</p>
      <img @load="imgLoad" v-for="imgurl in item.list" :key="imgurl" :src="imgurl" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailAllInfo",
  props: {
    detailInfo: {
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
  },
  methods: {
    imgLoad () {
      this.$emit('imgLoad')
    }
  }

}
</script>

<style scoped>
.detail-title {
  margin: 10px;
  font-size: 12px;
}

.detail-title::before,
.detail-title::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #000;
}

.detail-title::after {
  right: 0;
}

.detail-images-list p {
  font-size: 12px;
  margin: 10px;
}

.detail-images-list img {
  width: 100%;
}
</style>