<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader :factionType="factionType" v-if="factionType" />
                <div class="page-container" v-if="bottomGradientColors"
                    :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                    <GoldBar v-if="currentGold" :currentGold="currentGold" />
                    <BaseHeroBar :selected="'Armory'" />
                    <div class="hero-equp-select-lvJUvn">
                        <FactionProperty v-for="item in armoryList" :key="item.id" :property="item"
                            @click="openPopup(item)" />
                    </div>
                </div>
            </div>
            <Footer :selected="'Base'" />
        </div>
    </div>
    <FactionPropertyPopup v-if="showPopup" :item="selectedItem" @close="closePopup" :color="bottomGradientColors.bottom" />
</template>

<script>
import '@/styles/hero.css';
import Footer from "@/components/Footer.vue";
import BaseHeroBar from "@/components/BaseHeroBar.vue";
import GoldBar from "@/components/GoldBar.vue";
import FactionHeader from "@/components/FactionHeader.vue";
import FactionProperty from "@/components/FactionProperty.vue";
import FactionPropertyPopup from "@/components/FactionPropertyPopup.vue";

export default {
    name: 'Armory',
    components: {
        Footer,
        BaseHeroBar,
        GoldBar,
        FactionHeader,
        FactionProperty,
        FactionPropertyPopup
    },
    data() {
        return {
            currentGold: null,
            userId: 100,
            armoryList: [
                {
                    id: "1",
                    name: "Warcamp",
                    description: "For basic infantry units and increases training quality.",
                    cost: 5767,
                    gains: 450,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "war camp.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "Forge",
                    description: "For weapon and armor upgrades, improves blacksmithing efficiency.",
                    cost: 7497,
                    gains: 585,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "forge.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "Spirit Lodge",
                    description: "For shaman units and upgrades, enhances spiritual power.",
                    cost: 9746,
                    gains: 761,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "spirit lodge.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "Bestiary",
                    description: "For beast units and upgrades, improves taming and training.",
                    cost: 12670,
                    gains: 989,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "bestiary.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "Great Hall",
                    description: "For advanced units and upgrades, increases overall faction strength.",
                    cost: 16471,
                    gains: 1285,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "great hall.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "6",
                    name: "Serrated Blades",
                    description: "Increases the damage of axes and swords.",
                    cost: 21412,
                    gains: 1671,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Serrated Blades.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "7",
                    name: "Poisoned Tips",
                    description: "Adds poison damage to arrows and spears.",
                    cost: 27836,
                    gains: 2172,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Poisoned Tips.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "8",
                    name: "Flaming Munitions",
                    description: "Sets arrows and siege weapons ablaze, causing fire damage.",
                    cost: 36187,
                    gains: 2824,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Flaming Munitions.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "9",
                    name: "Rune-Inscribed Weapons",
                    description: "Enchants weapons with runes, granting additional effects.",
                    cost: 47043,
                    gains: 3671,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Rune-Inscribed Weapons.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "10",
                    name: "Berserker Axes",
                    description: "Massive axes that deal devastating blows but slow down the wielder.",
                    cost: 61156,
                    gains: 4772,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Berserker Axes.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "11",
                    name: "Spiked Armor",
                    description: "Adds spikes to armor, inflicting damage on attackers.",
                    cost: 79503,
                    gains: 6204,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Spiked Armor.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "12",
                    name: "Trollhide Armor",
                    description: "Tough leather armor that increases health regeneration.",
                    cost: 103354,
                    gains: 8065,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Trollhide Armor.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "13",
                    name: "Black Iron Plate",
                    description: "Heavy plate armor that provides excellent protection.",
                    cost: 134360,
                    gains: 10484,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Black Iron Plate.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "14",
                    name: "Warlord's Regalia",
                    description: "Unique armor set for the Warlord, granting bonuses to all stats.",
                    cost: 174668,
                    gains: 13629,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Warlord Regalia.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "15",
                    name: "Shaman's Garb",
                    description: "Enhances the shaman's magic and spiritual power.",
                    cost: 227068,
                    gains: 17718,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Shaman Garb.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "16",
                    name: "Throwing Axes",
                    description: "Allows Orcs to throw axes at enemies from a distance.",
                    cost: 295189,
                    gains: 23034,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Throwing Axes.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "17",
                    name: "Grappling Hooks",
                    description: "Enables Orcs to scale walls and climb obstacles.",
                    cost: 383746,
                    gains: 29944,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Grappling Hooks.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "18",
                    name: "War Banners",
                    description: "Boosts the morale and combat effectiveness of nearby units.",
                    cost: 498869,
                    gains: 38927,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "War Banners.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "19",
                    name: "Totem of Protection",
                    description: "Provides a protective aura that reduces incoming damage.",
                    cost: 648530,
                    gains: 50605,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Totem of Protection.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "20",
                    name: "Drums of Rage",
                    description: "Increases attack speed and movement speed of nearby units.",
                    cost: 843089,
                    gains: 65786,
                    level: 0,
                    costMultiplier: 1.8,
                    imageUrl: "Drums of Rage.png",
                    raidIncomePerHour: 0
                }
            ],
            showPopup: false,
            selectedItem: null,
            factionType: null,
            bottomGradientColors: null,
        };
    },
    async created() {
        this.getUserData();
        this.getBottomGradientColors();
        await this.loadImages();
        console.clear();
    },
    methods: {
        openPopup(item) {
            this.selectedItem = item;
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
            this.selectedItem = null;
        },
        async loadImages() {
            for (let armory of this.armoryList) {
                armory.imageUrl = (await import(`@/assets/${this.formatFactionType(this.factionType)} images/${this.formatFactionType(this.factionType)} Armory/${armory.imageUrl}`)).default;
            }
        },
        async getUserData() {
            this.loading = true;

            try {
                const response = {
                    data: {
                        name: "Arthur8071",
                        incomePerHour: "500000",
                        increaseAmount: 55,
                        currentGold: 1000,
                        level: 5,
                        avatarImage: "1. High Queen.png",
                        exp: 95,
                        currentMana: 50,
                        totalMana: 100,
                        title: "Wormfood",
                        factionType: "ORC"
                    }
                };

                //await attackService.getUserById(this.userId);

                const { currentGold, factionType } = response.data;
                this.currentGold = currentGold;
                this.factionType = factionType;
            } catch (error) {
                this.error = error.message;
                console.error('Failed to fetch ladder details:', error);
            } finally {
                this.loading = false;
            }
        },
        formatFactionType(type) {
            return type.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
        },
        getBottomGradientColors() {
            const colors = {
                ORC: {
                    top: "#2A3F29",
                    bottom: "#C0B104"
                },
                UNDEAD: {
                    top: "#848484",
                    bottom: "#182E26"
                },
                HUMAN: {
                    top: "#CFCFD0",
                    bottom: "#1E307A"
                },
                ANGEL: {
                    top: "#D0CFCF",
                    bottom: "#C6AC47"
                },
                ELF: {
                    top: "#CACACA",
                    bottom: "#0A2F00"
                },
                DEMON: {
                    top: "#6F1F1F",
                    bottom: "#C0B104"
                }
            }

            this.bottomGradientColors = colors[this.factionType?.toUpperCase()];
        },
    },
};
</script>