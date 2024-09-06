<template>
  <div class="orc-armory">
    <h1>Orc Armory</h1>
    <div class="items-container">
      <div class="item" v-for="item in armoryItems" :key="item.name">
        <img :src="require(`@/assets/orc/armory/${item.imageName}`)" :alt="item.name" />
        <h2>{{ item.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrcArmory',
  data() {
    return {
      armoryItems: [
        { name: 'Berserker Axes', imageName: 'Berserker Axes.png' },
        { name: 'Bestiary', imageName: 'bestiary.png' },
        { name: 'Black Iron Plate', imageName: 'Black Iron Plate.png' },
        { name: 'Drums of Rage', imageName: 'Drums of Rage.png' },
        { name: 'Flaming Munitions', imageName: 'Flaming Munitions.png' },
        { name: 'Forge', imageName: 'forge.png' },
        { name: 'Grappling Hooks', imageName: 'Grappling Hooks.png' },
        { name: 'Great Hall', imageName: 'great hall.png' },
        { name: 'Orc Banner', imageName: 'Orc Banner.png' },
        { name: 'Poisoned Tips', imageName: 'Poisoned Tips.png' },
        { name: 'Rune-Inscribed Weapons', imageName: 'Rune-Inscribed Weapons.png' },
        { name: 'Serrated Blades', imageName: 'Serrated Blades.png' },
        { name: 'Shaman\'s Garb', imageName: 'Shaman\'s Garb.png' },
        { name: 'Spiked Armor', imageName: 'Spiked Armor.png' },
        { name: 'Spirit Lodge', imageName: 'spirit lodge.png' },
        { name: 'Throwing Axes', imageName: 'Throwing Axes.png' },
        { name: 'Totem of Protection', imageName: 'Totem of Protection.png' },
        { name: 'Trollhide Armor', imageName: 'Trollhide Armor.png' },
        { name: 'War Camp', imageName: 'war camp.png' },
        { name: 'Warlord\'s Regalia', imageName: 'Warlord\'s Regalia.png' },
      ]
    };
  }
};
</script>

<style scoped>
.orc-armory {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  margin: 10px;
  text-align: center;
}

.item img {
  width: 150px; /* Adjust size as necessary */
  height: auto;
  margin-bottom: 10px;
}

.item h2 {
  font-size: 14px;
  color: #fff; /* Change color based on your theme */
}
</style>
