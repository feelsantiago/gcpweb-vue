<template>
  <div v-if="show" class="spin-container">
    <!-- Spiner code -->
    <div class="spiner">
      <div aria-hidden="true"></div>
      <div aria-hidden="true"></div>
      <div aria-hidden="true"></div>
    </div>
  </div>
</template>
<script>
import LoaderService from "../services/LoaderService";

export default {
  name: "spiner-loading",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    LoaderService.getSubject().subscribe(value => (this.show = value));
  }
};
</script>
<style scoped>
.spin-container {
  width: 100%;
  height: 100%;
  position: fixed;
  display: block;
  background-color: #fff;
  z-index: 99;
  opacity: 0.7;
}

.spiner {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -10px 0 0 -20px;
  display: inline-block;
  position: relative;
  height: 20px;
  width: 40px;
}
.spiner > * {
  position: absolute;
  top: 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #0074e4;
  opacity: 0.6;
  -webkit-transform: translateX(0px);
  transform: translateX(0px);
}
.spiner > *:nth-child(1) {
  left: 0;
  -webkit-animation: mymove 1.3s infinite ease-in;
  animation: mymove 1.3s infinite ease-in;
}
.spiner > *:nth-child(2) {
  left: 12px;
  -webkit-animation: mymove 1.3s 0.3s infinite ease-in;
  animation: mymove 1.3s 0.3s infinite ease-in;
}
.spiner > *:nth-child(3) {
  left: 24px;
  -webkit-animation: mymove 1.3s 0.6s infinite ease-in;
  animation: mymove 1.3s 0.6s infinite ease-in;
}

@-webkit-keyframes mymove {
  0%,
  100%,
  80% {
    opacity: 0.6;
    -webkit-transform: scale(0.4);
  }
  40% {
    opacity: 1;
    -webkit-transform: scale(1);
  }
}
@keyframes mymove {
  0%,
  100%,
  80% {
    opacity: 0.6;
    transform: scale(0.4);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>


