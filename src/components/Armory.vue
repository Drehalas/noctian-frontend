<template>
  <div>
    <h1>Armory Items</h1>
    <ul v-if="armoryItems.length">
      <li v-for="item in armoryItems" :key="item.id">{{ item.name }}</li>
    </ul>
    <p v-else>No items found.</p>
  </div>
</template>

<script>
import armoryService from '@/services/armoryService';

export default {
  data() {
    return {
      armoryItems: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchArmoryItems() {
      this.loading = true;
      try {
        const response = await armoryService.getAll();
        this.armoryItems = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchArmoryItems();
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
