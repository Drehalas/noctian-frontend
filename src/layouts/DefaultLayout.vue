<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="default-layout">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
  mounted() {
    // Navigate to 'Loading' route when the component is mounted
    this.$router.push({ name: 'Loading' });

    // Simulate page transitions using setTimeout
    setTimeout(() => {
      this.$router.push({ name: 'Intro' }); // Navigate to the Intro page

      setTimeout(() => {
        this.$router.push({ name: 'FactionSelection' }); // Navigate to the Faction Selection page
      }, 43000); // Wait 42 seconds before moving to Faction Selection
    }, 3000); // Wait 3 seconds before moving to Intro
  },
};
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>