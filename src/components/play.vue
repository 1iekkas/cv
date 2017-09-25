<template>
  <transition :name='transitionName'>
    <div class="audio">
      <header>返回</header>
    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        transitionName:'slide-left'
      }
    }
  }
</script>
<style scoped="">


</style>
