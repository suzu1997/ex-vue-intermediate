<template>
  <div class="container">
    <h2>衣類検索</h2>
    <div class="select">
      <div class="gender-select">
        <input type="radio" name="gender" value="man" id="man" />
        <label for="man">Man</label>
        <br />
        <input type="radio" name="gender" value="woman" id="woman" />
        <label for="woman">Woman</label>
        <br />
        <button>検索</button>
      </div>
      <select name="" id="">
        <option value="">赤</option>
        <option value="">青</option>
        <option value="">白</option>
        <option value="">黄</option>
      </select>
    </div>
    <div class="result">
      <table class="result-table">
        <tr>
          <th>ジャンル</th>
          <td>ジャケット</td>
        </tr>
        <tr>
          <th>サイズ</th>
          <td>S</td>
        </tr>
        <tr>
          <th>価格</th>
          <td>10000</td>
        </tr>
        <tr>
          <th>色</th>
          <td>赤</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchClothes extends Vue {}
</script>

<style scoped>
.container {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #000;
  /* text-align: left; */
  padding: 10px;
}
.select {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
}
.gender-select {
  text-align: left;
}
.result {
  border: 1px solid #000;
  text-align: center;
  margin-top: 10px;
}
.result-table {
  width: 100%;
  text-align: left;
  padding-left: 10px;
}
</style>
