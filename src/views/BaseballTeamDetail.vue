<template>
  <div class="container">
    <div class="item">球団名</div>
    <div>{{ currentTeam.teamName }}</div>
    <div class="item">本拠地</div>
    <div>{{ currentTeam.headquarters }}</div>
    <div class="item">発足日</div>
    <div>{{ currentTeam.formattedInauguration }}</div>
    <div class="item">歴史</div>
    <pre class="history">{{ currentTeam.history }}</pre>
    <div>
      <button v-on:click="back">戻る</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "../types/team";

/**
 * チーム詳細画面を表示するクラスコンポーネントです.
 */
@Component
export default class baseballTeabDetail extends Vue {
  // 現在の詳細ページのチーム情報
  private currentTeam!: Team;
  /**
   * リクエストパラメータのIDから1件のチーム情報を取得.
   */
  created(): void {
    const id = parseInt(this.$route.params.id);

    this.currentTeam = this.$store.getters.getTeamById(id);
  }
  /**
   * チーム一覧ページに戻る.
   */
  back(): void {
    this.$router.push("/baseballTeamList");
  }
}
</script>

<style></style>
