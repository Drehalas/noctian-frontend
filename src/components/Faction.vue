<template>
  <div class="faction">
    <h1>Factions</h1>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="faction in factions" :key="faction.id">
          <h3>{{ faction.name }}</h3>
          <p>{{ faction.description }}</p>
          <p>Total Units: {{ faction.totalUnits }}</p>
          <button @click="selectFaction(faction.id)">Select Faction</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import factionService from "@/services/factionService";

export default {
  name: "Faction",
  data() {
    return {
      factions: [],
      loading: true,
    };
  },
  created() {
    this.fetchFactions();
  },
  methods: {
    async fetchFactions() {
      try {
        this.factions = await factionService.getAll();
      } catch (error) {
        console.error("Failed to fetch factions data:", error);
      } finally {
        this.loading = false;
      }
    },
    selectFaction(factionId) {
      console.log("Faction selected:", factionId);
    },
  },
};
</script>

<style scoped>
.faction {
  padding: 20px;
}
.loading {
  font-size: 16px;
  color: #666;
}
</style>
