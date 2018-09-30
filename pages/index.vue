<template>
  <div>
    <h1>
      Figure skating protocol generator 2017-2018
    </h1>
    <div class="mode">
      <span class="mode-button" @click="toInputMode">
        <span class="fas fa-edit" />
      </span>
      <span class="mode-button" @click="toOutputMode">
        <span class="fas fa-eye" />
      </span>
    </div>
    <Protocol :mode="mode" />
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
      mode: "input",
    }
  },
  methods: {
    toInputMode() {
      this.mode = "input"
    },
    toOutputMode() {
      this.mode = "output"
    },
  },
}
</script>

<style src="./index.css" scoped />
