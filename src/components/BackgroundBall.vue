<template>
  <div>
    <img :class="`img${index}`" src="../img/planet.png" />
  </div>
</template>
<script>
export default {
  props:["beginBallSize","endBallSize","positionX","positionY","index","duration","delay"],
  created() {
   
    const {beginBallSize,endBallSize,positionX,positionY,index,duration,delay} = this;
    let temDom = document.getElementById(`bgBallStyle${index}`);
    if(temDom) document.removeChild(temDom);
    const styleDom = document.createElement("style");
    styleDom.id = `bgBallStyle${index}`;

    styleDom.innerHTML = `@keyframes d3Animation${index} {
    0% {
      opacity: 1;
      filter: contrast(1);
      width: ${beginBallSize}px;
      height: ${beginBallSize}px;
    }
    100% {
      transform: translate(${positionX - endBallSize/2 + beginBallSize}px, -${positionY - endBallSize/2 + beginBallSize}px);
      opacity: 0.8;
      width: ${endBallSize}px;
      height: ${endBallSize}px;
      filter: contrast(0.5);
    }
  }
  .img${index} {
    display: block;
    width:  ${beginBallSize}px;
    height:  ${beginBallSize}px;
    border-radius: 50%;
    animation-fill-mode: forwards;
    position: absolute;
    left: -${beginBallSize}px;
    bottom: -${beginBallSize}px;
    animation: d3Animation${index} ${duration}s linear ${delay}s 1 forwards;
  };`;
    document.body.appendChild(styleDom);
  }
};
</script>
 



 