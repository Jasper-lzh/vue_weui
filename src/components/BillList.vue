<template>
  <div>
  <!-- <div class="weui-panel weui-panel_access"> -->
    <div class="weui-panel__hd">李朝辉-账单列表</div>
    <div class="weui-panel__bd">
      <router-link tag="li" :to="url" v-for="abs in abstract">
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb" src="../assets/icon-bill.png">
          </div>
          <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">{{ abs.name }}</h4>
              <div class="weui-media-box__desc" style="display: inline;">{{ abs.state }}{{ abs.amount }}元</div>
              <div class="weui-media-box__desc" style="text-align: right; display: inline;">{{ abs.date }}</div>
          </div>
        </a>
      </router-link>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
  export default{
    name: 'BillList',
    data () {
      return {
        url: '/detail',
        abstract: [
          {
            name: '李朝辉2017-11综合费用账单',
            state: '未缴费',
            amount: '15225.10',
            date: '2017/12/08'
          }, {
            name: '李朝辉2017-10综合费用账单',
            state: '已缴费',
            amount: '29026.10',
            date: '2017/11/08'
          }
        ]
      }
    }
  }

</script>

<style>
  .weui-panel{
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .weui-media-box__title{
    margin-bottom: 5px;
  }
</style>
