<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <Form @submit="onSubmit" v-slot="{errors}">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field id="email" name="email" type="email" class="form-control" placeholder="請輸入 Email"
                rules="email|required" :class="{'is-invalid':errors['email']}" v-model="user.email"></Field>
              <!-- <input>改為<v-field> -->
              <!-- rules="email|required"  除了required，可加email，系統將會以 email 的格式來驗證， 垂直線 前後不補空白 -->
              <error-message name="email" class="invalid-feedback"></error-message>
              <!-- 原<span>改為<error-message> -->
              <!-- 會跳出 email 為必填、email 須為有效的電子信箱 等警告訊息 -->
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">姓名</label>
              <Field id="name" name="姓名" type="text" class="form-control" placeholder="請輸入姓名" rules="required"
                :class="{'is-invalid':errors['姓名']}" v-model="user.name"></Field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="phone" class="form-label">電話</label>
              <Field id="phone" name="電話" type="text" class="form-control" placeholder="請輸入電話" :rules="isPhone"
                :class="{'is-invalid':errors['電話']}" v-model="user.phone"></Field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="region" class="form-label">地區</label>
              <Field id="region" name="地區" class="form-control" as="select" rules="required"
                :class="{'is-invalid':errors['地區']}" v-model="user.region">
                <option value="" disabled>請選擇地區</option>
                <option :value="item" v-for="item in regionList" :key="item">{{item}}</option>
              </Field>
              <!-- as="select" 可變為選單功能，因為<select>標籤改為<v-field> -->
              <error-message name="地區" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">地址</label>
              <Field id="address" name="地址" type="text" class="form-control" placeholder="請輸入地址" rules="required"
                :class="{'is-invalid':errors['地址']}" v-model="user.address"></Field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <button class="btn btn-primary" type="submit">Submit</button>
            <!-- //button 有預設在裡面，不需特別設定，會直接觸發所有驗證 -->
          </Form>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data () {
    return {
      user: {
        email: '',
        name: '',
        phone: '',
        region: '',
        address: ''

      },
      regionList: ['台北市', '桃園市', '台中市', '台南市', '高雄市']
    }
  },
  methods: {
    onSubmit (value, action) {
      // console.log(this.user, value)
      action.resetForm()
      // 加入第一個參數，取得表單通過驗證的值
      // 第二個參數可以取得提交表單後，對表單進行操作的方法，例如重置表單 resetForm()
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼'
    }
    // 除了rules="required"(VeeValidate套件)來驗證，
    // 也可自訂方法來驗證，如：:rules="isPhone" 綁定自訂方法來驗證
  },
  created () {
    // console.log(this)
  }
}
</script>
