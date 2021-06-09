<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="comment-title-term">
      <span class="comment-title">用户评价</span>
      <span class="comment-more">更多</span>
    </div>
    <div class="comment-uname">
      <div class="comment-img">
        <img :src="'http://' + commentInfo.user.avatar" alt />
      </div>
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment-detail">
      <p>{{commentInfo.content}}</p>
      <div class="comment-size">
        <span class="comment-size-created">{{getDate}}</span>
        <span class="comment-size-style">{{commentInfo.style}}</span>
      </div>
      <div v-for="item in commentInfo.images" :key="item" class="commint-detail-images">
        <img class="commint-detail-image" :src="'http://' + item" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { formaDate } from 'common/utils'
export default {
  name: "DetailComments",
  props: {
    commentInfo: {
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
    getDate () {
      let time = new Date(this.commentInfo.created * 1000)
      return formaDate(time, 'yyyy-MM-dd hh:mm:ss')
    }
  }

}
</script>

<style scoped>
.comment-info {
  padding: 10px;
  border-bottom: 8px solid #eee;
}

.comment-title-term {
  height: 30px;
  font-size: 14px;
  border-bottom: 3px solid #eee;
}

.comment-title {
  float: left;
}

.comment-more {
  float: right;
  font-size: 12px;
}

.comment-uname {
  padding-top: 10px;
}

.comment-img {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.comment-img img {
  width: 100%;
}

.comment-uname span {
  padding-left: 5px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}

.comment-detail {
  font-size: 13px;
}

.comment-detail span {
  display: inline-block;
  margin: 10px 0;
}
.comment-detail p {
  padding-top: 8px;
}
.comment-size-style {
  padding-left: 5px;
}
.commint-detail-images {
  width: 80px;
  height: 80px;
}
.commint-detail-image {
  width: 100%;
  height: 100%;
}
</style>