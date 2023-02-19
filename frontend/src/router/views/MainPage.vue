<template>
  <div>
    <button @click="moveToMyPage">move to my page</button>
  </div>
</template>

<script>

export default {
  name: "MainPage",
  components: {

  },
  methods: {
    moveToMyPage() {
      this.$router.push('myPage');
    }
  }
}
</script>