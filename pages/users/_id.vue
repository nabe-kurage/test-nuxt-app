<template>
  <div>
    <h3 class="title">{{user.id}}</h3>
    <div class="profile">
      <img class="profileImg" :src="user.profile_image_url" width="120" :alt="`${user.id}のプロフィール画像`">
      <p class="profileText">{{user.description || 'no description'}}</p>
    </div>
    <h3 class="title">{{user.id}}さんの投稿</h3>
      <ul class="list">
      <li class="listItem" v-for="item in items" :key="item.id">
        <a :href="item.url">{{item.title}}
          <h4>
            <small>
              <span>by </span>
              <nuxt-link :to="`/users/${item.user.id}`">
              {{item.user.id}}
              </nuxt-link>
            </small>
          </h4>
          <div class="text">{{item.body.slice(0, 130)}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: this.user.id
    }
  },
  async asyncData({route, app}) {
    const user = await app.$axios.$get(`http://qiita.com/api/v2/users/${route.params.id}`)
    const items = await app.$axios.$get(`http://qiita.com/api/v2/items?query=user:${route.params.id}`)
    return { user, items }
  },
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
.profile {
  display: flex;
  margin: auto;
  width: 900px;
  margin: 24px auto;
  border: 1px solid rgb(0, 139, 176);
  border-radius: 8px;
  background-color: rgb(253, 226, 203);
  padding: 16px;
}

.profileText {
  margin-left: 16px;
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

