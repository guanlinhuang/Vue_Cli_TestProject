<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Card></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: { // 在AboutView.vue元件裡 區域註冊
    Card
  }
}
</script>

// @ = src縮寫
// ESLint 套件必安裝，有助於排除所有錯誤
