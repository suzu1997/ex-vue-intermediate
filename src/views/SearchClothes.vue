<template>
  <div class="container">
    <div class="searchArea">
      <h2>衣類検索</h2>
      <div class="select">
        <div class="gender-select">
          <input
            type="radio"
            name="gender"
            value="0"
            id="man"
            v-model="gender"
          />
          <label for="man">Man</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="1"
            id="woman"
            v-model="gender"
          />
          <label for="woman">Woman</label>
          <br />
        </div>
        <select v-model="color" class="color-select">
          <option>赤</option>
          <option>青</option>
          <option>白</option>
          <option>黄</option>
        </select>
      </div>
      <button v-on:click="searchClothes">検索</button>
    </div>
    <div v-if="noResult">
      🙇‍♀️該当する衣類が<br />
      見つかりませんでした。
    </div>
    <div class="result" v-for="clothe of searchResult" :key="clothe.id">
      <table class="result-table">
        <tr>
          <th>ジャンル</th>
          <td>{{ clothe.genre }}</td>
        </tr>
        <tr>
          <th>サイズ</th>
          <td>{{ clothe.size }}</td>
        </tr>
        <tr>
          <th>価格</th>
          <td>{{ clothe.price }}</td>
        </tr>
        <tr>
          <th>性別</th>
          <td v-if="clothe.gender === 0">Man</td>
          <td v-else-if="clothe.gender === 1">Woman</td>
        </tr>
        <tr>
          <th>色</th>
          <td>{{ clothe.color }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
/**
 *  衣類を検索する機能を表すクラスコンポーネント.
 */
@Component
export default class SearchClothes extends Vue {
  // 選択した性別
  private gender = 0;
  // 選択した色
  private color = "赤";
  // 検索結果
  private searchResult = [];
  // 検索結果がないフラグ
  private noResult = false;

  /**
   * 条件にあった衣類を検索する.
   */
  searchClothes(): void {
    this.searchResult = this.$store.getters.getClothesByGenderAndColor(
      Number(this.gender),
      this.color
    );
    if (this.searchResult.length === 0) {
      this.noResult = true;
    } else {
      this.noResult = false;
    }
  }
}
</script>

<style scoped>
.container {
  width: 250px;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 10px 30px;
}
.searchArea {
  text-align: left;
}
.select {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  margin-bottom: 10px;
}
.gender-select {
  text-align: left;
  font-size: 1.1rem;
}
.color-select {
  padding: 5px;
  border-radius: 5px;
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
