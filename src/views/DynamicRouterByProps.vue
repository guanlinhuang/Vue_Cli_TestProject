<template>
    <div>123</div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  created () {
    console.log('props', this.id)
    const seed = this.id
    // const seed = '9a93ce4b9f78d3c0'
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res)
    })
  }
}

</script>
