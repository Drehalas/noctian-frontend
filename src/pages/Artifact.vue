<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader :factionType="factionType" v-if="factionType"/>
                <div class="page-container" v-if="bottomGradientColors"
                    :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                    <GoldBar v-if="currentGold" :currentGold="currentGold" />
                    <BaseHeroBar :selected="'Artifact'" />
                    <div class="hero-equp-select-lvJUvn">
                        <FactionProperty v-for="item in artifactList" :key="item.id" :property="item"
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
    name: 'Artifact',
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
            artifactList: [
                {
                    id: "1",
                    name: "The Gavel of War God",
                    description: "This massive warhammer, said to be wielded by the Orcish god of war himself, empowers the Orcish Warlord, increasing their size, strength, and damage output. Additionally, it emits a powerful aura that boosts the morale and fighting spirit of nearby Orcs, making them more resistant to fear and control effects.",
                    cost: 19175106,
                    gains: 3835021,
                    level: 0,
                    costMultiplier: 2,
                    imageUrl: "The Gavel of War God.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "The Blood Chalice of Mauller",
                    description: "This ancient chalice, filled with the blood of a powerful demon, grants the Orcish army the ability to regenerate health rapidly in battle. The chalice also curses enemy units, causing them to bleed and weaken over time.",
                    cost: 402677224,
                    gains: 80535445,
                    level: 0,
                    costMultiplier: 2,
                    imageUrl: "The Blood Chalice of Mauller.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "The Banner of the Wars",
                    description: "This massive banner, adorned with the symbols of Orcish gods and heroes, instills an unbreakable will to fight in the Orcish army. It increases their movement speed, attack speed, and damage, while also reducing the effectiveness of enemy morale-lowering abilities.",
                    cost: 8456221712,
                    gains: 1691244342,
                    level: 0,
                    costMultiplier: 2,
                    imageUrl: "The Banner of the Wars.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "The Mask of the Beastlord",
                    description: "This terrifying mask, crafted from the skull of a legendary beast, allows the wearer to tap into their primal instincts. It grants the Orcish Warlord the ability to transform into a powerful beast form, increasing their strength, speed, and resilience.",
                    cost: 177580655956,
                    gains: 35516131191,
                    level: 0,
                    costMultiplier: 2,
                    imageUrl: "The Mask of the Beastlord.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "The Heart of the Volcano",
                    description: "This glowing shard of volcanic rock, said to contain the essence of a fire elemental, grants the Orcish army control over fire magic. It allows them to summon fiery eruptions, imbue their weapons with flames, and even create a protective barrier of fire around their forces.",
                    cost: 3729193775067,
                    gains: 745838755013,
                    level: 0,
                    costMultiplier: 2,
                    imageUrl: "The Heart of the Volcano.png",
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
            for (let artifact of this.artifactList) {
                artifact.imageUrl = (await import(`@/assets/${this.formatFactionType(this.factionType)} images/${this.formatFactionType(this.factionType)} Artifact/${artifact.imageUrl}`)).default;
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