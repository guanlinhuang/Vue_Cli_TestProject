<template>
  <h2>命名視圖範例</h2>
  <div class="row">
    <div class="col-6">
      <router-view name="left"></router-view>
    </div>
    <div class="col-6">
      <router-view name="right"></router-view>
    </div>
  </div>
</template>

<!-- //用格線系統分開為兩個col-6 -->
