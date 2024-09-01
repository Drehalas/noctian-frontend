<template>
  <div class="equipment">
    <h1>Equipment</h1>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="item in equipment" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p>Cost: {{ item.cost }}</p>
          <p>Gains: {{ item.gains }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import equipmentService from "@/services/equipmentService";

export default {
  name: "Equipment",
  data() {
    return {
      equipment: [],
      loading: true,
    };
  },
  created() {
    this.fetchEquipment();
  },
  methods: {
    async fetchEquipment() {
      try {
        this.equipment = await equipmentService.getAll();
      } catch (error) {
        console.error("Failed to fetch equipment data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.equipment {
  padding: 20px;
}
.loading {
  font-size: 16px;
  color: #666;
}
</style>
