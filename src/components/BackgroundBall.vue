<template>
  <img class="img2" src="../img/1590376133649807359.png"   />
</template>
<style   scoped>
@keyframes d3Animation {
  0% {
    /* transform: translate(0, 0); */
    opacity: 1;
    filter: contrast(1);
    width: 150px;
    height: 150px;
  }

  100% {
    transform: translate(80vw, -100vw);
    opacity: 0.8;
    width: 50px;
    height: 50px;
    filter: contrast(0.5);
  }
}

img {
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  animation-fill-mode: forwards;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: d3Animation 1s linear 1s 1 forwards;
}
</style>