<template>
  <div>
    <h1>Figure skating protocol generator 2017-2018</h1>
    <div>Rank: <input type="number" v-model="data.rank" /></div>
    <div>Name: <input type="text" v-model="data.name" /></div>
    <Protocol :data="data" />
  </div>
</template>

<script>
import Protocol from '~/components/Protocol.vue'

export default {
  components: {
    Protocol,
  },
  data () {
    return {
      data: {
        rank: 1,
        name: "",
      }
    }
  }
}
</script>
