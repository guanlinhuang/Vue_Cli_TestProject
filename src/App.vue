<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
    <!-- //fixed-top 凍結navbar -->
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{
      name:'新增頁面'
    }" class="nav-link">NewPage</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container" style="height: 300vh;">
  <!-- //style="height: 300vh 可設定頁面長度 -->
  <router-view/>
</div>
<!-- //這個 class 會垂直置中，並且有 RWD 的效果，在不同解析度下會有不同寬度
//router-view 則是會根據路由表渲染巢狀路由的元件 -->
<router-link to="/newpage/routernavigation">/newpage/routernavigation</router-link>
  {{ name }}
  <button type="button" class="btn btn-primary">Primary</button>
</template>

<script>
export default {
  data () {
    return {
      name: process.env.VUE_APP_NAME
    }
  }
}
</script>

<style lang="scss">

@import "bootstrap";

body{
  padding-top: 80px;
  //設定高度，主要內容不會被已凍結的navbar擋住
}

</style>

<!-- // #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// } -->
