<template>
  <div>
    <span>single</span>
    <AppNavigation />
    <hr>
    <nuxt />
    <nuxt-link to="/">top</nuxt-link>
    <hr>
    <footer>
      footer
    </footer>

  </div>
</template>

<script>
export default {
  components: {
    AppNavigation
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

