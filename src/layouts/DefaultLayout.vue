<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="default-layout">
    <!-- Header Component -->
    <Header />

    <!-- Main Content Area -->
    <main>
      <!-- This is where the page components will be injected -->
      <router-view />
    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';  // Import your Header component
import Footer from '@/components/Footer.vue';  // Import your Footer component

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
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
  background-color: #f0f0f0; /* Example background color */
}
</style>