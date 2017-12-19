<template>
  <div id="app">
    <div class="page">
      <app-head></app-head>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import head from '@/components/head'
// import BillList from '@/components/BillList'
export default {
  name: 'app',
  components: {
    'app-head': head
    // 'BillList': BillList
  }
}
</script>

<style>
#app{
  overflow: hidden;
}
.page{
  position: relative;
  z-index: 99;
  transition: all 0.5s;
}
.toggle{
  transform: translateX(-120px);
}
</style>
