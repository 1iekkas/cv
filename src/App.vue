<template>
  <div id="app">
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
      transitionName:'slide-left',
      cX:''
    }
  },
  methods: {
    touch () {
      var div=document.getElementById('app')
      div.addEventListener('touchstart',function(e){
          //touchstart:触摸开始的一瞬间，这里的e包含的触摸一瞬间所触摸的元素的信息
          //alert(div.clientWidth)
      })
      div.addEventListener('touchmove',function(e){
          //touchmove:触摸进行时，这里的e包含的触摸的元素信息
        //(div.clientWidth);
      })
      div.addEventListener('touchend',function(e){
          //touchend:触摸结束的一瞬间，这里的e没有多大的作用
          this.cX = div.clientWidth
      });

    }
  },
  watch: {
    '$route' (to, from) {
      alert(this.cX);
      let isBack = this.$router.isBack
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
