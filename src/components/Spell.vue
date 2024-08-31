<template>
  <div class="spell">
    <h1>Spells</h1>
    <p>Learn and upgrade spells to use in battle.</p>
    <!-- Example of a spell list -->
    <ul>
      <li v-for="spell in spells" :key="spell.id">
        {{ spell.name }} - Power: {{ spell.power }}
        <button @click="upgradeSpell(spell.id)">Upgrade</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Spell',
  data() {
    return {
      spells: [
        { id: 1, name: 'Fireball', power: 50 },
        { id: 2, name: 'Ice Lance', power: 40 },
        // Mock data for illustration
      ],
    };
  },
  methods: {
    upgradeSpell(spellId) {
      console.log(`Upgrading spell with ID: ${spellId}`);
      // Logic to upgrade the spell will be implemented here
    },
  },
};
</script>

<style scoped>
.spell {
  padding: 20px;
  background-color: #ffebcd;
  border-radius: 8px;
}
</style>
