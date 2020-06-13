<template>
  <div>
    <h3 class="title">ログインページ</h3>
    <p>
      <button type="button" @click="login">ログイン</button>
      <nuxt-link to="/">トップページに戻る</nuxt-link>
    </p>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'
export default {
  methods : {
    login() {
      const cookies = new Cookies()
      cookies.set('credential', 'true',{maxAge: 90})
      this.$router.push('/')
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

.list--login {
  padding: 16px;
  border: 1px solid rgb(0, 139, 176);
  border-radius: 8px;
  margin-top: 16px;
  list-style: none;
  background-color: rgb(253, 226, 203);
  width: 280px;
  cursor: pointer;
  margin: auto;
}

a,
a:visited,
a:hover {
  color:  rgb(0, 139, 176);
  text-decoration: none;
}
</style>
