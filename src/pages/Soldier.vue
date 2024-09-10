<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader :factionType="factionType" v-if="factionType"/>
                <div class="page-container" v-if="bottomGradientColors"
                    :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                    <GoldBar v-if="currentGold" :currentGold="currentGold" />
                    <BaseHeroBar :selected="'Soldier'" :factionType="factionType" v-if="factionType"/>
                    <div class="hero-equp-select-lvJUvn">
                        <FactionProperty v-for="item in soldierList" :key="item.id" :property="item"
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
    name: 'Soldier',
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
            soldierList: [
                {
                    id: "1",
                    name: "Kobold Slave",
                    description: "Weakest unit, used as meat shields.",
                    cost: 506,
                    gains: 30,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Kobold.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "Goblin Archer",
                    description: "Weak and fast ranged units.",
                    cost: 1341,
                    gains: 80,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Goblin Archer.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "Orc Youngling",
                    description: "Low damage melee units.",
                    cost: 3553,
                    gains: 211,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Youngling.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "Wolf Pack",
                    description: "Aggressive beasts, fast with light damage.",
                    cost: 9416,
                    gains: 558,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Wolf Pack.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "Orc Grunt",
                    description: "Standard melee units.",
                    cost: 24954,
                    gains: 1479,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Grunt.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "6",
                    name: "Orc Spearman",
                    description: "Effective against infantry.",
                    cost: 66127,
                    gains: 3921,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Spearman.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "7",
                    name: "Orc Axeman",
                    description: "High damage melee units.",
                    cost: 175237,
                    gains: 10390,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Axeman.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "8",
                    name: "Orc Hunter",
                    description: "High ranged damage.",
                    cost: 464378,
                    gains: 27532,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Hunter.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "9",
                    name: "Orc Shaman",
                    description: "Support unit, heals and buffs.",
                    cost: 1230602,
                    gains: 72961,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Shaman.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "10",
                    name: "Orc Warlock",
                    description: "Enhances melee weapons with serrated edges, increasing damage.",
                    cost: 3261094,
                    gains: 193346,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Warlock.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "11",
                    name: "Troll",
                    description: "High health and damage, slow.",
                    cost: 8641900,
                    gains: 512366,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Troll.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "12",
                    name: "Harpie",
                    description: "Flying unit, fast with ranged attacks.",
                    cost: 22901036,
                    gains: 1357769,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Harpie.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "13",
                    name: "Spider Swarm",
                    description: "Numerous weak spiders.",
                    cost: 60687745,
                    gains: 3598088,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Spider Swarm.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "14",
                    name: "Stone Giant",
                    description: "High health and damage, very slow.",
                    cost: 160822526,
                    gains: 9534932,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Stone Giant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "15",
                    name: "Orc Champion",
                    description: "Powerful units specializing in melee combat.",
                    cost: 426179693,
                    gains: 25267571,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Champion.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "16",
                    name: "Orc Warlord",
                    description: "Leaders of the army, very powerful.",
                    cost: 1129376186,
                    gains: 66959062,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Warlord.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "17",
                    name: "Direwolve",
                    description: "Very strong and aggressive beasts.",
                    cost: 2992846892,
                    gains: 177441515,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Direwolve.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "18",
                    name: "Black Orc Warrior",
                    description: "Elite melee units.",
                    cost: 7931044265,
                    gains: 470220016,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Black Orc Warrior.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "19",
                    name: "Orc Raider",
                    description: "Fast and strong.",
                    cost: 21017267301,
                    gains: 1246083042,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Orc Raider.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "20",
                    name: "Warlock Shaman",
                    description: "Powerful spellcasters with support abilities.",
                    cost: 55695758349,
                    gains: 3302120060,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Warlock Shaman.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "21",
                    name: "Necromancer",
                    description: "Raise and control the dead.",
                    cost: 147593759624,
                    gains: 8750618160,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Necromancer.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "22",
                    name: "Dragon Rider",
                    description: "Very powerful flying unit.",
                    cost: 391123463004,
                    gains: 23189138123,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Dragon Rider.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "23",
                    name: "HellLord",
                    description: "The strongest unit, demon-like creatures.",
                    cost: 1036477176961,
                    gains: 614512160253,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: "Hell Lord.png",
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
            for (let soldier of this.soldierList) {
                soldier.imageUrl = (await import(`@/assets/${this.formatFactionType(this.factionType)} images/${this.formatFactionType(this.factionType)} Soldier/${soldier.imageUrl}`)).default;
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