<!-- src/pages/Game.vue -->
<template>
  <DashboardLayout>
    <div class="game-page">
      <h2>Game Overview</h2>
      <!-- Include components that represent different game parts, such as Armory, Spells, etc. -->
      <Armory />
      <Soldier />
      <Spell />
      <Artifact />
    </div>
  </DashboardLayout>
</template>

<script>
import Armory from './Armory.vue';
import Soldier from './Soldier.vue';
import Spell from './Spell.vue';
import Artifact from './Artifact.vue';
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  name: 'GamePage',
  components: {
    DashboardLayout,
    Armory,
    Soldier,
    Spell,
    Artifact,
  },
};
</script>

<style scoped>
.game-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>
