<!-- src/pages/Equipment.vue -->
<template>
  <DashboardLayout>
    <div class="equipment-page">
      <h2>Equipment Management</h2>
      <!-- Display a list or grid of equipment items -->
      <Equipment />
    </div>
  </DashboardLayout>
</template>

<script>
import Equipment from '../components/Equipment.vue';
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  name: 'EquipmentPage',
  components: {
    DashboardLayout,
    Equipment,
  },
};
</script>

<style scoped>
.equipment-page {
  padding: 20px;
}
</style>
