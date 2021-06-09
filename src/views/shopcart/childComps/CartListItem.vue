<template>
  <div class="cartlist">
    <div class="check_btn">
      <check-button :is-checked="itemInfo.checked" @click.native="checkBtnClick" />
    </div>
    <img :src="'http:' + itemInfo.image" alt />
    <div class="cartlist-content">
      <span>{{itemInfo.title}}</span>
      <div class="cartlist-other">
        <span class="cartlist-price">{{'￥' + itemInfo.price}}</span>
        <span class="cartlist-count">X {{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  data () {
    return {}
  },
  props: {
    itemInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: { CheckButton },

  methods: {
    checkBtnClick () {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}

</script>
<style>
.cartlist {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.check_btn {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cartlist img {
  width: 60px;
  height: 90px;
  border-radius: 5px;
  padding: 5px;
}
.cartlist-content {
  position: relative;
  flex: 1;
  padding-left: 10px;
  font-size: 12px;
}
.cartlist-other {
  padding-top: 10px;
}
.cartlist-price {
  position: absolute;
  left: 10px;
  bottom: 0;
}
.cartlist-price {
  font-size: 16px;
  color: var(--color-tint);
}

.cartlist-count {
  position: absolute;
  right: 10px;
  bottom: 0;
}
</style>