<template>
  <div class="general-attack-bar">
    <div class="frame-11-n1uJ2s frame-11">
      <div class="frame-13-5E05en" :class="{ selected: selected === 'Attack' }" @click="navigateTo('Attack')">
        <div class="group-B4Wcwb group">
          <img class="x1-57-a5Jn4M" src="@/assets/Global/Common/Attack logo.png" alt="1 57">
          <div class="attack-a5Jn4M roboto-medium-white-9px" style="font-size: 9px;">Attack</div>
        </div>
      </div>
      <div class="frame-17-5E05en" :class="{ selected: selected === 'Base' }" @click="navigateTo('Base')">
        <div class="group-f4bGeB group">
          <div class="base-ZEK035 roboto-medium-white-9px" style="font-size: 9px;">Base</div>
          <img class="x5-8-ZEK035" src="@/assets/Global/Common/Base logo.png" alt="5 8">
        </div>
      </div>
      <div class="frame-18-5E05en" :class="{ selected: selected === 'Ladder' }" @click="navigateTo('Ladder')">
        <div class="group-h59BGe group">
          <img class="x6-501-LN9TYX" src="@/assets/Global/Common/Ladder logo.png" alt="6 501">
          <div class="ladder-LN9TYX roboto-medium-white-9px" style="font-size: 9px;">Ladder</div>
        </div>
      </div>
      <div class="frame-15-5E05en" :class="{ selected: selected === 'War' }" @click="navigateTo('War')">
        <div class="group-8-Wqk5xj group-8">
          <img class="x7-1-lXP6c4" src="@/assets/Global/Common/War logo.png" alt="7 1">
          <div class="war-lXP6c4 roboto-medium-white-9px" style="font-size: 9px;">War</div>
        </div>
      </div>
      <div class="frame-14-5E05en" :class="{ selected: selected === 'Treasure' }" @click="navigateTo('Treasure')">
        <div class="group-iVOhnC group">
          <div class="treasure-xsImb2 roboto-medium-white-9px" style="font-size: 9px;">Treasure</div>
          <img class="x8-4-xsImb2" src="@/assets/Global/Common/Treasure logo.png" alt="8 4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    selected: {
      type: String,
      required: true,
      default: 'Hero'
    }
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: #0b0b0b80 !important;
}

.selected>div,
.selected>div>div {
  opacity: 1 !important;
}

.general-attack-bar {
  background-color: transparent;
  height: 60px;
  bottom: 40px;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;

}

.general-attack-bar .frame-11-n1uJ2s {
  align-items: center;
  background-color: #31353b;
  border-radius: 12px;
  display: flex;
  gap: 6px;
  height: 60px;
  padding: 5px;
  width: 368px;
}

.general-attack-bar .frame-13-5E05en,
.general-attack-bar .frame-17-5E05en,
.general-attack-bar .frame-18-5E05en,
.general-attack-bar .frame-15-5E05en,
.general-attack-bar .frame-14-5E05en {
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 45px;
  padding: 5px 10px;
  position: relative;
  width: 65px;
  justify-content: center;
}

/* Additional styles for each frame */
.general-attack-bar .group-B4Wcwb,
.general-attack-bar .group-f4bGeB,
.general-attack-bar .group-h59B6k,
.general-attack-bar .group-8-Wqk5xj,
.general-attack-bar .group-iVOhnC {
  opacity: 0.6;
}

.general-attack-bar .x1-57-a5Jn4M,
.general-attack-bar .x5-8-ZEK035,
.general-attack-bar .x6-501-LN9TYX,
.general-attack-bar .x7-1-lXP6c4,
.general-attack-bar .x8-4-xsImb2 {
  background-color: transparent;
  object-fit: cover;
  position: absolute;
  transform: rotate(-180deg);
}

.general-attack-bar .attack-a5Jn4M,
.general-attack-bar .base-ZEK035,
.general-attack-bar .ladder-LN9TYX,
.general-attack-bar .war-lXP6c4,
.general-attack-bar .treasure-xsImb2 {
  background-color: transparent;
  opacity: 0.5;
  position: absolute;
  text-align: left;
  white-space: nowrap;
}
</style>