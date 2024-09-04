<template>
  <div>
    <div class="base-hero-bar-lvJUvn">
      <div class="frame-16-cZXoCo frame-16">
        <!-- Hero -->
        <div
            class="frame-15-wNWTLI frame-15"
            :class="{ selected: selected === 'Hero' }"
            @click="navigateTo('Hero')"
        >
          <div class="hero-n6d0Ud roboto-semi-bold-white-12px">Hero</div>
        </div>
        <!-- Soldier -->
        <div
            class="frame-20-wNWTLI frame-20"
            :class="{ selected: selected === 'Soldier' }"
            @click="navigateTo('Soldier')"
        >
          <div class="soldier-kDvytW roboto-semi-bold-white-12px">Soldier</div>
        </div>
        <!-- Armory -->
        <div
            class="frame-19-wNWTLI frame-19"
            :class="{ selected: selected === 'Armory' }"
            @click="navigateTo('Armory')"
        >
          <div class="armory-MjOaOq roboto-semi-bold-white-12px">Armory</div>
        </div>
        <!-- Spell -->
        <div
            class="frame-18-wNWTLI frame-18"
            :class="{ selected: selected === 'Spell' }"
            @click="navigateTo('Spell')"
        >
          <div class="spell-KYkoHY roboto-semi-bold-white-12px">Spell</div>
        </div>
        <!-- Artifact -->
        <div
            class="frame-17-wNWTLI frame-17"
            :class="{ selected: selected === 'Artifact' }"
            @click="navigateTo('Artifact')"
        >
          <div class="artifact-H13YWN roboto-semi-bold-white-12px">Artifact</div>
        </div>
        <!-- Peon -->
        <div
            class="frame-16-wNWTLI frame-16"
            :class="{ selected: selected === 'Peon' }"
            @click="navigateTo('Peon')"
        >
          <div class="peon-LSCL1d roboto-semi-bold-white-12px">Peon</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeroBar',
  props: {
    selected: {
      type: String,
      required: true,
      default: 'Hero'
    }
  },
  methods: {
    navigateTo(section) {
      switch (section) {
        case 'Hero':
          this.$router.push({ name: 'Hero' });
          break;
        case 'Soldier':
          this.$router.push({ name: 'Soldier' });
          break;
        case 'Armory':
          this.$router.push({ name: 'Armory' });
          break;
        case 'Spell':
          this.$router.push({ name: 'Spell' });
          break;
        case 'Artifact':
          this.$router.push({ name: 'Artifact' });
          break;
        case 'Peon':
          this.$router.push({ name: 'Peon' });
          break;
        default:
          this.$router.push({ name: 'Home' });
          break;
      }
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: #0b0b0c80 !important;
}
</style>
