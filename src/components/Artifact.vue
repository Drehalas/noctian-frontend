<template>
  <div class="artifact">
    <h1>Artifacts</h1>
    <p>Collect and manage powerful artifacts to enhance your abilities.</p>
    <!-- Example of an artifact list -->
    <ul>
      <li v-for="artifact in artifacts" :key="artifact.id">
        {{ artifact.name }} - Effect: {{ artifact.effect }}
        <button @click="useArtifact(artifact.id)">Use</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Artifact',
  data() {
    return {
      artifacts: [
        { id: 1, name: 'Amulet of Power', effect: 'Increase Strength' },
        { id: 2, name: 'Ring of Wisdom', effect: 'Boost Intelligence' },
        // Mock data for illustration
      ],
    };
  },
  methods: {
    useArtifact(artifactId) {
      console.log(`Using artifact with ID: ${artifactId}`);
      // Logic to use the artifact will be implemented here
    },
  },
};
</script>

<style scoped>
.artifact {
  padding: 20px;
  background-color: #ffe4e1;
  border-radius: 8px;
}
</style>
