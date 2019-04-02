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
    <Protocol :mode="mode" :saved-input="savedInput" @input="handleProtocolInput" />
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
      savedInput: { title: "test" },
      input: {},
    }
  },
  created() {
    try {
      this.savedInput = JSON.parse(window.location.hash.substring(1))
    } catch (e) {}
  },
  methods: {
    toInputMode() {
      this.mode = "input"
      window.location.hash = ""
    },
    toOutputMode() {
      this.mode = "output"
      window.location.hash = JSON.stringify(this.input)
    },
    handleProtocolInput(value) {
      this.input = value
    },
  },
}
</script>

<style src="./index.css" scoped />
