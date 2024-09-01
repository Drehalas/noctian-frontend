<template>
  <div class="orc-ladder screen">
    <div class="frame-30-sSjFR3">
      <img class="orc-banner" src="@/assets/Orc%20images/Orc%20Artifact/Orc%20banner.png" alt="Orc banner">
      <img class="orc-ladder-logo" src="@/assets/Common%20images/Common/Ladder%20logo.png" alt="Ork Ladder 20 logo">
      <h1 class="title">{{ ladderTitle }}</h1>
      <div class="level">LADDER 1/20</div>
      <div v-for="entry in ladderEntries" :key="entry.id" class="ladder-entry">
        <div>{{ entry.name }}</div>
        <div>{{ entry.score }}K</div>
        <div>#{{ entry.rank }}</div>
      </div>
    </div>
    <div class="general-attack-bar">
      <!-- Placeholder for any static images or components for the action bar -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ladderTitle: 'Wormfood',
      ladderEntries: [
        { id: 1, name: 'Saruman869', score: 21.02, rank: '3.236.801' },
        { id: 2, name: 'Kaboom23', score: 21.02, rank: '3.236.802' },
        { id: 3, name: 'BaldEagle452', score: 21.02, rank: '3.236.803' },
        { id: 4, name: 'AragonFTW11', score: 21.01, rank: '3.236.804' },
        { id: 5, name: 'Kaliente23', score: 21.01, rank: '3.236.805' },
        { id: 6, name: 'Axeboy23232', score: 21.01, rank: '3.236.806' },
        { id: 7, name: 'Ccccccccc1111', score: 21.01, rank: '3.236.807' },
        { id: 8, name: 'Yanbex022', score: 21.01, rank: '3.236.808' },
        { id: 9, name: 'Hey123', score: 21.01, rank: '3.236.809' },
        { id: 10, name: 'Arthur8071', score: 1.026, rank: '4.145.927' }  // Notice the score format for clarity
      ]
    };
  },
  methods: {
    async fetchLadderDetails() {
      this.loading = true;
      try {
        const response = await ladderService.fetchAllLadders();
        this.ladderEntries = response.data.map(ladder => ({
          id: ladder._id,
          name: ladder.name, // Adjust these properties based on your Ladder model's schema
          score: ladder.score,
          rank: ladder.rank
        }));
      } catch (error) {
        this.error = error.message;
        console.error('Failed to fetch ladder details:', error);
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchLadderDetails();
  }
};
</script>

<style scoped>
@import '@/styles/ladder.css';  /* Update path as needed */
</style>
