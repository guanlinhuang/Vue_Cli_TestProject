<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link
          to="/newpage/a"
          type="button"
          class="list-group-item list-group-item-action"
        >
          元件 A
        </router-link>
        <router-link
          to="/newpage/b"
          type="button"
          class="list-group-item list-group-item-action"
        >
          元件 B
        </router-link>
        <router-link
          to="/newpage/namedView"
          type="button"
          class="list-group-item list-group-item-action"
        >
          命名視圖範例
          <router-link
            to="/newpage/namedView/c2a"
            type="button"
            class="list-group-item list-group-item-action"
            >c2a</router-link
          >
          <router-link
            to="/newpage/namedView/a2b"
            type="button"
            class="list-group-item list-group-item-action"
            >a2b</router-link
          >
        </router-link>
        <router-link
          :to="`/newpage/dynamicRouter/${id}`"
          type="button"
          class="list-group-item list-group-item-action"
        >
          動態路由
        </router-link>
        <router-link
          :to="`/newpage/dynamicRouterByProps/${id}`"
          type="button"
          class="list-group-item list-group-item-action"
        >
          動態路由ByProps
        </router-link>
        <router-link
          to="/newpage/routernavigation"
          type="button"
          class="list-group-item list-group-item-action"
        >
          路由導覽
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '9a93ce4b9f78d3c0'
    }
  }
}
</script>

<!-- col-X bootstrap的網格系統 -->

<!-- <template>
    <div>新增頁面</div>
</template> -->
