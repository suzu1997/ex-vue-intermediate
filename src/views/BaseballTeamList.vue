<template>
  <div>
    <h1>野球チーム一覧</h1>
    <ul>
      <li v-for="team of getTeams" :key="team.id">
        <router-link :to="'/baseballTeamDetail/' + team.id">
          {{ team.teamName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "../types/team";

/**
 * 野球チーム一覧表示機能のクラスコンポーネントです.
 */
@Component
export default class baseballTeamList extends Vue {
  /**
   * Vuexストア内の野球チーム一覧を取得し返す.
   */
  get getTeams(): Array<Team> {
    return this.$store.getters.getTeams;
  }
}
</script>

<style></style>
