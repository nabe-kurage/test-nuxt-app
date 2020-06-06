<template>
  <div>
    <h3 class="title">Nuxt.jsのタグがつけられている投稿一覧</h3>
    <ul class="list">
      <li class="listItem" v-for="item in items" :key="item.id">
        <a :href="item.url">{{item.title}}
          <h4>
            <small>by {{item.user.id}}</small>
          </h4>
          <div class="text">{{item.body.slice(0, 130)}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  async asyncData({app}) {
    const items = await app.$axios.$get('http://qiita.com/api/v2/items?query=tag:nuxt.js')
    return {
      items
    }
  }
}
</script>

<style>
body {
  background:rgb(75, 174, 201); ;
}
.title {
  font-size: 36px;;
  text-align: center;
  margin: 16px 0;
  color: #fde2cb;
  font-weight: bold;
  justify-content: space-between;
}
.list {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin: 24px auto;
}
.listItem {
  padding: 16px;
  border: 1px solid rgb(0, 139, 176);
  border-radius: 8px;
  margin-top: 16px;
  list-style: none;
  background-color: rgb(253, 226, 203);
  width: 280px;
  cursor: pointer;
}

.listItem:hover {
  opacity: 0.7;
}

.text {
  color: rgb(36, 36, 36);
}

a,
a:visited,
a:hover {
  color:  rgb(0, 139, 176);
  text-decoration: none;
}
</style>

