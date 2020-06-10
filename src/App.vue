<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div class="container">
      <BackgroundBall />
      <div class="circle-point">
        <img src="./img/point.jpg" />
      </div>
      <div class="rotate-box">
        <div class="small-circle" :style="{animationPlayState: aniStatus ? 'running':'paused'}">
          <ImgPoint
            :aniStatus="aniStatus"
            :days="154"
            :startDeg="90"
            :clickEvent="headerClickAction"
          />
          <SolidPoint :aniStatus="aniStatus" :days="87" :startDeg="0" />
          <SolidPoint :aniStatus="aniStatus" :days="152" :startDeg="130" />
        </div>
        <div class="big-circle" :style="{animationPlayState: aniStatus ? 'running':'paused'}">
          <ImgPoint
            :aniStatus="aniStatus"
            :days="200"
            :radius="150"
            :startDeg="30"
            :clickEvent="headerClickAction"
          />
          <SolidPoint :aniStatus="aniStatus" :days="200" :radius="150" :startDeg="60" />
          <SolidPoint :aniStatus="aniStatus" :days="200" :radius="150" :startDeg="250" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SolidPoint from "./components/SolidPoint";
import ImgPoint from "./components/ImgPoint";
import BackgroundBall from "./components/BackgroundBall";

export default {
  name: "App",
  components: {
    SolidPoint,
    ImgPoint,
    BackgroundBall
  },
  data() {
    return {
      rotateDeg: 200, //整个动画要转动的角度
      aniStatus: true
    };
  },
  created() {
    //  this.styleInit();
  },
  methods: {
    headerClickAction() {
      this.aniStatus = !this.aniStatus;
    }
  }
};
</script>

<style lang="scss">
@import "./style/index.scss";
</style>
