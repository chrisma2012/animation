<template>
  <div id="app">
    <div class="container" id="container">
       <!-- 最右上角 -->
      <BackgroundBall :index="0" :duration="2" :delay="0" :beginBallSize="150" :endBallSize="60" :positionX="documentWidth * 0.8" :positionY="documentHeight * 0.8"/>
      <!-- 中间 -->
      <BackgroundBall :index="1" :duration="1.25" :delay="0.75" :beginBallSize="150" :endBallSize="100" :positionX="documentWidth * 0.5" :positionY="documentHeight * 0.5"/>
      <!-- 左下角 -->
      <BackgroundBall :index="2" :duration="0.25" :delay="1.75" :beginBallSize="150" :endBallSize="130" :positionX="documentWidth * 0.1" :positionY="documentHeight * 0.1"/>
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
      aniStatus: true,
      status:false,
      documentWidth:document.documentElement.clientWidth,
      documentHeight:document.documentElement.clientHeight,
    };
  },
  created() {
    
  },
  methods: {
    headerClickAction() {
      this.aniStatus = !this.aniStatus;
      console.log('122')
      this.status = !this.status;
    }
  }
};
</script>

<style lang="scss">
@import "./style/index.scss";

#app{
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
