<template>
    <div style="width: 100%;position: relative;top: 60px;display: flex;justify-content: center;z-index: 3;">
        <div class="base-hero-bar-lvJUvn">
            <div class="frame-16-cZXoCo frame-16">
                <div class="frame-15-wNWTLI frame-15" :class="{ selected: selected === 'Hero' }"
                    @click="navigateTo('Hero')">
                    <div class="hero-n6d0Ud roboto-semi-bold-white-12px" style="font-size: 0.6rem !important;">
                        Hero
                    </div>
                </div>
                <div class="frame-20-wNWTLI frame-20" :class="{ selected: selected === 'Soldier' }"
                    @click="navigateTo('Soldier')">
                    <div class="soldier-kDvytW roboto-semi-bold-white-12px" style="font-size: 0.6rem !important;">
                        Soldier
                    </div>
                </div>
                <div class="frame-19-wNWTLI frame-19" :class="{ selected: selected === 'Armory' }"
                    @click="navigateTo('Armory')">
                    <div class="armory-MjOaOq roboto-semi-bold-white-12px" style="font-size: 0.6rem !important;">
                        Armory
                    </div>
                </div>
                <div class="frame-18-wNWTLI frame-18" :class="{ selected: selected === 'Spell' }"
                    @click="navigateTo('Spell')">
                    <div class="spell-KYkoHY roboto-semi-bold-white-12px" style="font-size: 0.6rem !important;">
                        Spell
                    </div>
                </div>
                <div class="frame-17-wNWTLI frame-17" :class="{ selected: selected === 'Artifact' }"
                    @click="navigateTo('Artifact')">
                    <div class="artifact-H13YWN roboto-semi-bold-white-12px" style="font-size: 0.6rem !important;">
                        Artifact
                    </div>
                </div>
                <div class="frame-16-wNWTLI frame-16" :class="{ selected: selected === 'Peon' }"
                    @click="navigateTo('Peon')">
                    <div class="peon-LSCL1d roboto-semi-bold-white-12px" style="font-size: 0.6rem !important;">
                        {{ getAddFriendText() }}
                    </div>
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
        },
        factionType: {
            type: String,
            required: true
        }
    },
    methods: {
        navigateTo(section) {
            switch (section) {
                case 'Hero':
                    this.$router.push({ name: 'Base' });
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
                    this.$router.push({ name: 'AddFriend' });
                    break;
                default:
                    this.$router.push({ name: 'Home' });
                    break;
            }
        },
        getAddFriendText() {
            switch (this.factionType) {
                case "ORC":
                    return "Peon";
                case "ELF":
                    return "Fledgling";
                case "DEMON":
                    return "Servitor";
                case "ANGEL":
                    return "Neophyte";
                case "HUMAN":
                    return "Squire";
                case "UNDEAD":
                    return "Acolyte";
                default:
                    return "";
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
