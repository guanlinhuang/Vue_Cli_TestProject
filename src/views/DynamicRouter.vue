<template>
    <div>123</div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    console.log(this.$route.params.id)
    const seed = this.$route.params.id
    // const seed = '9a93ce4b9f78d3c0'
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res)
    })
  }
}

</script>
