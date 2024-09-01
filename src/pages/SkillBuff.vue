<!-- src/pages/SkillBuff.vue -->
<template>
  <DashboardLayout>
    <div class="skill-buff-page">
      <h2>Manage Skills & Buffs</h2>
      <!-- Display a list or table of skills and buffs -->
      <SkillBuff />
    </div>
  </DashboardLayout>
</template>

<script>
import SkillBuff from '../components/SkillBuff.vue';
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  name: 'SkillBuffPage',
  components: {
    DashboardLayout,
    SkillBuff,
  },
};
</script>

<style scoped>
.skill-buff-page {
  padding: 20px;
}
</style>
