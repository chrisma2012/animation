<template functional>
  <div class="point-item" :style="{transform:`rotate(${props.startDeg}deg)`,width:props.radius ? props.radius + 'px' : '100px' }">
    <div class="img-rotate-layer" :style="{animationPlayState: props.aniStatus ? 'running':'paused'}">
      <div class="img-point" :style="{transform:`rotate(-${props.startDeg}deg)`}" @click="props.clickEvent">
        <img src="../img/user.jpg" />
        <div class="point-text">{{props.days}}天</div>
        <div class="info-popup" :style="!props.aniStatus ? {display:'block'}:{display:'none'}">
          <p class="info-popupnickname">张三</p>
          <p class="info-popup-id">1100000</p>
          <p class="info-popup-duration-title">开通时间</p>
          <p class="open-duration">{{props.days}}天</p>
        </div>
      </div>
    </div>
  </div>
</template>
 