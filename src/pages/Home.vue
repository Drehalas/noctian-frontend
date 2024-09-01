<!-- src/pages/Home.vue -->
<template>
  <DefaultLayout>
    <div class="home-page">
      <h1>Welcome to Noctian</h1>
      <p>Select a faction to begin your journey.</p>
      <!-- Include any navigation or introductory content here -->
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  name: 'HomePage',
  components: {DefaultLayout},
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}
</style>
