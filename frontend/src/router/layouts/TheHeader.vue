<template>
  <div id="wrap">
    <div id="menu_left">
      <img src="../../assets/images/Logonetflix.png">
      <a @click="showHome">홈</a>
      <a @click="showSeries">시리즈</a>
      <a @click="showMovie">영화</a>
      <a @click="showNewContents">NEW! 요즘 대세 콘텐츠</a>
      <a @click="showMyContents">내가 찜한 콘텐츠</a>
      <a @click="showByLanguage">언어별로 찾아보기</a>
    </div>
    <div id="menu_right">
      <a @click="showSearchBox"></a>
      <a @click="changToKidsMode">키즈</a>
      <a></a>
      <a></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  methods : {
    showHome() {

    },
    showSeries() {

    },
    showMovie() {

    },
    showNewContents() {

    },
    showMyContents() {

    },
    showByLanguage() {

    },
    showSearchBox() {

    },
    changToKidsMode() {

    }
  }
}
</script>

<style scoped>

</style>