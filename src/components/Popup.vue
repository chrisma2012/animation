<template>
  <div class="popup" :style="popupStatus">
    <div class="popup-content">
      <!-- <div class="popup-header" v-if="false">
        <i class="header-left"></i>
        <h3 class="header-title">ask立法技术反馈吉萨附件12ssdsdf</h3>
        <span class="header-right">×</span>
      </div>-->
      <div class="popup-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["show"],
  data() {
    return {
      popupStatus: {}
    };
  },
  watch: {
    show: {
      handler: function(newVal) {
        this.popupStatus = newVal
          ? {
              animation:
                "popupAnimationIn-data-v-6be7b2a8 500ms linear 0s 1 forwards"
            }
          : {
              animation:
                "popupAnimationOut-data-v-6be7b2a8 500ms linear 0s 1 forwards"
            };
      },
      immediate: false
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes popupAnimationIn {
  0% {
    transform: scale(0);
    opacity: 0;
    visibility: visible;
  }

  100% {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
}

@keyframes popupAnimationOut {
  0% {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }

  100% {
    transform: scale(0);
    opacity: 0;
    visibility: visible;
  }
}
.popup {
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  //   opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  .popup-content {
    display: inline-block;
    min-width: 200px;
    max-width: 650px;
    min-height: 200px;
    max-height: 80vh;
    background-color: white;
    border-radius: 5px;

    // .popup-header {
    //   display: flex;
    //   justify-content: space-around;
    //   align-items: center;
    //   .header-left {
    //     flex: 0 0 10%;
    //   }
    //   .header-title {
    //     flex: 0 0 80%;
    //     white-space: nowrap;
    //     overflow: hidden;
    //     text-overflow: ellipsis;
    //   }
    //   .header-right {
    //     flex: 0 0 10%;
    //     display: flex;
    //     justify-content: center;
    //   }
    // }
  }
}
</style>