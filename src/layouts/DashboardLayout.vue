<!-- src/layouts/DashboardLayout.vue -->
<template>
  <div class="dashboard-layout">
    <!-- Sidebar Component -->
    <Sidebar />

    <!-- Main Content Area with Header -->
    <div class="main-content">
      <!-- Header Component -->
      <Header />

      <!-- This is where the page components will be injected -->
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';  // Import your Sidebar component
import Header from '@/components/Header.vue';    // Import your Header component

export default {
  name: 'DashboardLayout',
  components: {
    Sidebar,
    Header,
  },
};
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  height: 100vh;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
}

header {
  background-color: #ffffff; /* Example background color */
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

main {
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0; /* Example background color */
}
</style>
