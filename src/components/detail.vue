<template>
  <div class="weui-form-preview">
      <div class="weui-form-preview__hd">
          <label class="weui-form-preview__label">李朝辉2017-11综合费用账单</label>
          <div class="weui-form-preview__value" style="font-size: 20px;">¥15225.10</div>
      </div>
      <div class="weui-form-preview__bd">
          <p>
              <label class="weui-form-preview__label">物业费</label>
              <span class="weui-form-preview__value">¥833.00</span>
          </p>
          <p>
              <label class="weui-form-preview__label">水费</label>
              <span class="weui-form-preview__value">¥57.50</span>
          </p>
          <p>
              <label class="weui-form-preview__label">电费</label>
              <span class="weui-form-preview__value">¥697.60</span>
          </p>
          <p>
              <label class="weui-form-preview__label">设备运行费</label>
              <span class="weui-form-preview__value">¥637.00</span>
          </p>
          <p>
              <label class="weui-form-preview__label">租金</label>
              <span class="weui-form-preview__value">¥13000.00</span>
          </p>
      </div>
      <div class="weui-form-preview__ft">
          <a class="weui-form-preview__btn weui-form-preview__btn_primary" style="margin-right: 2px; border-radius: 5px; background-color: #409EFF; color: #fff;" href="javascript:" >付款</a>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>

<style>

</style>
