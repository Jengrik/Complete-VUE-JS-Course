<template>
  <h1>Hello World!</h1>
  <h2>{{message}}</h2>
</template>

<script>
  export default {
    name: 'VueApp',
    props: {
      message: String,
    },
    data() {
      return {};
    },
  }
</script>