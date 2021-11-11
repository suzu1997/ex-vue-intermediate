<template>
  <div></div>
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
}
</script>

<style></style>
