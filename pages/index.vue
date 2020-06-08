<template>
  <div>
    <h3 class="title">Nuxt.jsのタグがつけられている投稿一覧</h3>
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
  async asyncData({ store }) {
    if(store.getters['items'].length) {
      return
    }
    await store.dispatch('fetchItems')
  },
  computed: {
    ...mapGetters(['items'])
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

