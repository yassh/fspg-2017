<template>
  <div>
    <h1>Figure skating protocol generator 2017-2018</h1>
    <div>Rank: <input v-model="data.rank" type="number" /></div>
    <div>Name: <input v-model="data.name" type="text" /></div>
    <Protocol :data="data" />
  </div>
</template>

<script>
import Protocol from "~/components/Protocol.vue"

export default {
  components: {
    Protocol,
  },
  data() {
    return {
      data: {
        rank: 1,
        name: "",
      },
    }
  },
}
</script>
