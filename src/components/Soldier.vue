<template>
  <div class="soldier">
    <h1>Soldiers</h1>
    <p>Recruit, train, and manage your soldiers.</p>
    <!-- Example of a soldier list -->
    <ul>
      <li v-for="soldier in soldiers" :key="soldier.id">
        {{ soldier.name }} - Rank: {{ soldier.rank }}
        <button @click="trainSoldier(soldier.id)">Train</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Soldier',
  data() {
    return {
      soldiers: [
        { id: 1, name: 'John', rank: 'Private' },
        { id: 2, name: 'Doe', rank: 'Sergeant' },
        // Mock data for illustration
      ],
    };
  },
  methods: {
    trainSoldier(soldierId) {
      console.log(`Training soldier with ID: ${soldierId}`);
      // Logic to train the soldier will be implemented here
    },
  },
};
</script>

<style scoped>
.soldier {
  padding: 20px;
  background-color: #e6e6fa;
  border-radius: 8px;
}
</style>
