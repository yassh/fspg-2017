<template>
  <div>
    <h1>Figure skating protocol generator 2017-2018</h1>
    <div><input v-model="foo" /></div>
    <div>{{foo}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      foo: "bar"
    }
  }
}
</script>
