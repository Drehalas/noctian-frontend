<!-- src/pages/Faction.vue -->
<template>
  <DashboardLayout>
    <div class="faction-page">
      <h2>Select Your Faction</h2>
      <!-- Display list of factions or detailed faction information -->
      <Faction />
    </div>
  </DashboardLayout>
</template>

<script>
import Faction from '@/components/Faction.vue';
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  name: 'FactionPage',
  components: {
    DashboardLayout,
    Faction,
  },
};
</script>

<style scoped>
.faction-page {
  padding: 20px;
}
</style>
