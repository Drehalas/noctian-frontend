<template>
  <div class="general-attack-bar">
    <div class="frame-11-n1uJ2s frame-11">
      <div class="frame-13-5E05en" :class="{ selected: selected === 'Attack' }">
        <div class="group-B4Wcwb group">
          <img class="x1-57-a5Jn4M" src="@/assets/Global/Common/Attack logo.png" alt="1 57">
          <div class="attack-a5Jn4M roboto-medium-white-9px" style="font-size: 9px;">Attack</div>
        </div>
      </div>
      <div class="frame-17-5E05en" :class="{ selected: selected === 'Base' }">
        <div class="group-f4bGeB group">
          <div class="base-ZEK035 roboto-medium-white-9px" style="font-size: 9px;">Base</div>
          <img class="x5-8-ZEK035" src="@/assets/Global/Common/Base logo.png" alt="5 8">
        </div>
      </div>
      <div class="frame-18-5E05en" :class="{ selected: selected === 'Ladder' }">
        <div class="group-h59B6k group">
          <img class="x6-501-LN9TYX" src="@/assets/Global/Common/Ladder logo.png" alt="6 501">
          <div class="ladder-LN9TYX roboto-medium-white-9px" style="font-size: 9px;">Ladder</div>
        </div>
      </div>
      <div class="frame-15-5E05en" :class="{ selected: selected === 'War' }">
        <div class="group-8-Wqk5xj group-8">
          <img class="x7-1-lXP6c4" src="@/assets/Global/Common/War logo.png" alt="7 1">
          <div class="war-lXP6c4 roboto-medium-white-9px" style="font-size: 9px;">War</div>
        </div>
      </div>
      <div class="frame-14-5E05en" :class="{ selected: selected === 'Treasure' }">
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
  data() {
    return {
    };
  },
  methods: {
  },
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
  width: -webkit-fill-available;
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

.general-attack-bar .frame-13-5E05en {
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 45px;
  padding: 5px 10px;
  position: relative;
  width: 65px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.general-attack-bar .group-B4Wcwb {
  width: 32px;
  opacity: 0.6;
}

.general-attack-bar .x1-57-a5Jn4M {
  background-color: transparent;
  height: 24px;
  left: 0px;
  object-fit: cover;
  position: absolute;
  top: 18px;
  transform: rotate(-180deg);
}

.general-attack-bar .attack-a5Jn4M {
  opacity: 0.5;
  background-color: transparent;
  height: auto;
  left: 2px;
  letter-spacing: 0.00px;
  line-height: 9.9px;
  position: absolute;
  text-align: left;
  top: 0px;
  transform: rotate(-180deg);
  white-space: nowrap;
  width: auto;
}

.general-attack-bar .frame-17-5E05en {
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
  align-items: center;
  justify-content: center;
}

.general-attack-bar .group-f4bGeB {
  opacity: 0.6;
  width: 42px;
}

.general-attack-bar .base-ZEK035 {
  background-color: transparent;
  height: auto;
  left: 10px;
  letter-spacing: -0.18px;
  line-height: 9.9px;
  opacity: 0.5;
  position: absolute;
  text-align: left;
  top: 0px;
  transform: rotate(-180deg);
  white-space: nowrap;
  width: auto;
}

.general-attack-bar .x5-8-ZEK035 {
  background-color: transparent;
  height: 40px;
  left: 0px;
  mix-blend-mode: normal;
  object-fit: cover;
  position: absolute;
  top: 5px;
  transform: rotate(-180deg);
  width: 40px;
}

.general-attack-bar .frame-18-5E05en {
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
  align-items: center;
  justify-content: center;
}

.general-attack-bar .group-h59B6k {
  opacity: 0.6;
  width: 32px;
}

.general-attack-bar .x6-501-LN9TYX {
  background-color: transparent;
  height: 30px;
  left: 0px;
  object-fit: cover;
  position: absolute;
  top: 12px;
  transform: rotate(-180deg);
  width: 30px;
}

.general-attack-bar .ladder-LN9TYX {
  background-color: transparent;
  height: auto;
  left: 2px;
  letter-spacing: -0.18px;
  line-height: 9.9px;
  opacity: 0.5;
  position: absolute;
  text-align: left;
  top: 0px;
  transform: rotate(-180deg);
  white-space: nowrap;
  width: auto;
}

.general-attack-bar .frame-15-5E05en {
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
  align-items: center;
  justify-content: center;
}

.general-attack-bar .group-8-Wqk5xj {
  height: 42px;
  margin-bottom: -2.00px;
  opacity: 0.6;
  width: 32px;
}

.general-attack-bar .x7-1-lXP6c4 {
  background-color: transparent;
  height: 30px;
  left: 3px;
  object-fit: cover;
  position: absolute;
  top: 2px;
  width: 30px;
}

.general-attack-bar .war-lXP6c4 {
  background-color: transparent;
  height: auto;
  left: 10px;
  letter-spacing: -0.18px;
  line-height: 9.9px;
  opacity: 0.5;
  position: absolute;
  text-align: left;
  top: 31px;
  white-space: nowrap;
  width: auto;
}

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
  align-items: center;
  justify-content: center;
}

.general-attack-bar .group-iVOhnC {
  opacity: 0.6;
  width: 37px;
}

.general-attack-bar .treasure-xsImb2 {
  background-color: transparent;
  height: auto;
  left: 0px;
  letter-spacing: -0.18px;
  line-height: 9.9px;
  opacity: 0.5;
  position: absolute;
  text-align: left;
  top: 0px;
  transform: rotate(-180deg);
  white-space: nowrap;
  width: auto;
}

.general-attack-bar .x8-4-xsImb2 {
  background-color: transparent;
  height: 32px;
  left: 0px;
  object-fit: cover;
  position: absolute;
  top: 10px;
  transform: rotate(-180deg);
  width: 32px;
}
</style>