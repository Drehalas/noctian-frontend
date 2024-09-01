<template>
  <div class="skill-buff">
    <h1>Skill Buffs</h1>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="buff in skillBuffs" :key="buff.id">
          <h3>{{ buff.name }}</h3>
          <p>{{ buff.description }}</p>
          <p>Cost: {{ buff.cost }}</p>
          <p>Gains: {{ buff.gains }}</p>
          <p>Cooldown: {{ buff.cooldown }}</p>
          <p>Refresh: {{ buff.refresh }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import skillBuffService from "@/services/skillBuffService";

export default {
  name: "SkillBuff",
  data() {
    return {
      skillBuffs: [],
      loading: true,
    };
  },
  created() {
    this.fetchSkillBuffs();
  },
  methods: {
    async fetchSkillBuffs() {
      try {
        this.skillBuffs = await skillBuffService.getAll();
      } catch (error) {
        console.error("Failed to fetch skill buff data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.skill-buff {
  padding: 20px;
}
.loading {
  font-size: 16px;
  color: #666;
}
</style>
