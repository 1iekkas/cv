<template>
  <div id="app" >
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName:'slide-left'
    }
  },
  methods: {
  },
  watch: {
    '$route' (to, from) {

      let isBack = this.$router.isBack
      let cX = this.$router.cX

      console.log(cX);
      console.log(isBack)
      if(isBack) {
　　　　　　　　this.transitionName = 'slide-right'
　　　　　　} else {
　　　　　　   this.transitionName = 'slide-left'
　　　　　}
      this.$router.isBack = false;
      console.log(this.transitionName)
    },
  }
}
</script>

<style>


/*.fade-enter-active, .fade-leave-active{
  transition: all 0.35s ease
}
.fade-enter{
  transform:translateX(-10rem);
}
.fade-leave-active{
  transform:translateX(10rem);
}*/
.slide-left-enter-active, .slide-left-leave-active,.slide-right-enter-active, .slide-right-leave-active{
  transition: all 0.35s ease
}
.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
