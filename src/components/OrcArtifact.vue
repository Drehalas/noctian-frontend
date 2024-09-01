<template>
  <div class="orc-artifact screen">
    <div class="frame-30-X0jP8z">
      <img class="orc-banner-V4xny3" src="@/assets/Orc%20images/Orc%20Artifact/Orc%20banner.png" alt="Orc banner">
      <h1 class="title-pRQDkS">{{ totalGold }}</h1>
      <div class="base-artifact-bar-V4xny3">
        <!-- Navigation Buttons -->
      </div>
      <div class="artifact-select-V4xny3">
        <div v-for="artifact in artifacts" :key="artifact.id" class="artifact-property">
          <img :src="artifact.image" :alt="artifact.name">
          <div>
            <h2>{{ artifact.name }}</h2>
            <p>{{ artifact.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="general-attack-bar">
      <!-- General attack bar integration -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrcArtifact',
  data() {
    return {
      totalGold: 507981,
      artifacts: [
        { id: 1, name: 'The Banner of the Wars', description: 'Description of The Banner of the Wars.', image: '@/assets/The Banner of the Wars.png' },
        { id: 2, name: 'The Blood Chalice of Mauller', description: 'Description of The Blood Chalice of Mauller.', image: '@/assets/The Blood Chalice of Mauller.png' },
        { id: 3, name: 'The Gavel of War God', description: 'Description of The Gavel of War God.', image: '@/assets/The Gavel of War God.png' },
        { id: 4, name: 'The Heart of the Volcano', description: 'Description of The Heart of the Volcano.', image: '@/assets/The Heart of the Volcano.png' },
        { id: 5, name: 'The Mask of the Beastlord', description: 'Description of The Mask of the Beastlord.', image: '@/assets/The Mask of the Beastlord.png' },
      ],
    };
  },
};
</script>

<style scoped>
@import '@/styles/artifact.css';  /* Update path as needed */
</style>
