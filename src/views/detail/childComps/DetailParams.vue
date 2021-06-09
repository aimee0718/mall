<template>
  <div class="detail-params">
    <table class="rule-params" v-for="table in itemParams.rule.tables" :key="table">
      <tr v-for="tr in table" :key="tr">
        <td v-for="td in tr" :key="td">{{td}}</td>
      </tr>
    </table>

    <table class="info-params">
      <tr v-for="tr in itemParams.info.set" :key="tr">
        <td class="info-params-key">{{tr.key}}</td>
        <td class="info-params-value">{{tr.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    itemParams: {
      typeof: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-params {
  background-color: #fff;
  padding: 20px 15px;
  font-style: 14px;
  border-bottom: 5px solid #eee;
}
.rule-params {
  margin-bottom: 5px;
  border-bottom: 3px solid #eee;
  font-size: 12px;
  text-align: center;
}
.detail-params table {
  width: 100%;
  border-collapse: collapse;
}
.detail-params table tr {
  height: 42px;
}

.detail-params table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-params {
  font-size: 12px;
}

.info-params-key {
  width: 20%;
}

.info-params-value {
  padding: 5px;
  color: var(--color-tint);
}
</style>