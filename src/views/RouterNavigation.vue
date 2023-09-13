<template>
    <button type="button" @click="getRoute">getRoute</button>
    <button type="button" @click="push">Push</button>
    <button type="button" @click="repalce">Replace</button>
    <button type="button" @click="go">Go</button>
    <hr>
    <button type="button" @click="addRoute">addRoute</button>
</template>

<script>
export default {
  methods: {
    // 取得常用參數
    getRoute () {
      // 取得路由的屬性
      // https://next.router.vuejs.org/zh/api/#routelocationnormalized
      // 範例：this.$route.fullPath (目前網址)
      console.log(this.$route)
      // 呼叫路由的方法
      // 參考：https://next.router.vuejs.org/zh/api/#router-%E6%96%B9%E6%B3%95
      // 範例：this.$router.go(-1) (回到前一頁)
      console.log(this.$router)
    },
    // 包含歷史紀錄
    push () {
      this.$router.push({
        name: 'about'
      })
      // this.$router.push('/newpage/b')
    },
    // 沒有歷史紀錄
    replace () {
      this.$router.replace({ name: 'about' })
    },
    // 操作歷史紀錄
    go () {
      this.$router.go(-1)
    },
    // 延伸介紹 : 臨時新增路由
    addRoute () {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('../views/AboutView.vue')
      })
    }
  }
}
</script>
