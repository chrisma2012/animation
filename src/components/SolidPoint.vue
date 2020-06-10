<template functional>
  <div class="point-item normal-point-item"  :style="{transform:`rotate(${props.startDeg}deg)`,width:props.radius ? props.radius + 'px' : '100px'}">
    <span :style="{animationPlayState: props.aniStatus ? 'running':'paused'}">
      <i class="point-text"  :style="{transform:`rotate(-${props.startDeg}deg)`}">{{props.days}}天</i>
    </span>
  </div>
</template>
 