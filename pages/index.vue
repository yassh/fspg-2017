<template>
  <div>
    <h1>Figure skating protocol generator 2017-2018</h1>
    <div>Rank: <input v-model="input.rank" type="number" /></div>
    <div>Name: <input v-model="input.name" type="text" /></div>
    <div>Element #1: abbr: <input v-model="input.elements[0].abbr" type="text" /> x: <input v-model="input.elements[0].x" type="checkbox" /></div>
    <Protocol :input="input" />
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
      input: {
        rank: 1,
        name: "",
        elements: [
          {
            abbr: "",
            x: false,
          },
        ],
      },
    }
  },
}
</script>
