<template>
  <div>
    <h1>Armory</h1>
    <ul>
      <li v-for="item in armoryItems" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="addNewItem">Add New Item</button>
  </div>
</template>

<script>
import armoryService from '@/services/armoryService';

export default {
  data() {
    return {
      armoryItems: [],
    };
  },
  async created() {
    try {
      const response = await armoryService.getAllArmories();
      this.armoryItems = response.data;
    } catch (error) {
      console.error('Error fetching armory items:', error.response.data.message);
    }
  },
  methods: {
    async addNewItem() {
      try {
        const newItem = { name: 'New Shield', level: 1 };
        await armoryService.createArmory(newItem);
        this.armoryItems.push(newItem); // Update local state
      } catch (error) {
        console.error('Error adding new item:', error.response.data.message);
      }
    },
  },
};
</script>
