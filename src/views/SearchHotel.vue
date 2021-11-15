<template>
  <div class="container">
    <h2>ホテル検索</h2>
    <div>
      <input type="text" v-model="inputPrice" />円以下
      <button v-on:click="searchHotelByPrice" class="searchBtn">検索</button>
    </div>
    <div class="result">
      <div v-if="noResult">🙇‍♀️該当するホテルが見つかりませんでした。</div>
      <div v-for="hotel of searchResult" :key="hotel.id">
        <table class="table">
          <tr>
            <th>ホテル名</th>
            <td>{{ hotel.hotelName }}</td>
          </tr>
          <tr>
            <th>最寄駅</th>
            <td>{{ hotel.nearestStation }}</td>
          </tr>
          <tr>
            <th>価格</th>
            <td>{{ hotel.price }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Hotel } from "../types/hotel";
import { Component, Vue } from "vue-property-decorator";

/**
 * ホテル検索機能のクラスコンポーネントです.
 */
@Component
export default class SearchHotel extends Vue {
  // 検索する値段
  private inputPrice = "";
  // 検索結果
  private searchResult = Array<Hotel>();
  // 検索結果がないフラグ
  private noResult = false;

  /**
   * 値段によってホテルを検索する.
   */
  searchHotelByPrice(): void {
    this.noResult = false;
    if (this.inputPrice === "") {
      this.searchResult = this.$store.getters.getAllHotels;
      return;
    }
    this.searchResult = this.$store.getters.getHotelsByPrice(this.inputPrice);

    if (this.searchResult.length === 0) {
      this.noResult = true;
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
.searchBtn {
  margin-left: 10px;
}
.result {
  width: 30%;
  margin: 30px auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
}

table tr {
  border-bottom: solid 2px white;
}

table tr:last-child {
  border-bottom: none;
}

table th {
  position: relative;
  text-align: left;
  width: 30%;
  background-color: #52c2d0;
  color: white;
  text-align: center;
  padding: 10px 0;
}

table th:after {
  display: block;
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  top: calc(50% - 10px);
  right: -10px;
  border-left: 10px solid #52c2d0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

table td {
  text-align: left;
  width: 70%;
  text-align: center;
  background-color: #eee;
  padding: 10px 0;
}
</style>
