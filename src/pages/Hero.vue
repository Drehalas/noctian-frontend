<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader :factionType="factionType" v-if="factionType" />
                <div class="page-container" v-if="bottomGradientColors"
                    :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                    <GoldBar v-if="currentGold" :currentGold="currentGold" />
                    <BaseHeroBar :selected="'Hero'" :factionType="factionType" v-if="factionType" />
                    <div class="hero-equp-select-lvJUvn">
                        <FactionProperty v-for="item in heroList" :key="item.id" :property="item"
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
    name: 'Hero',
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
            factionType: null,
            heroList: [],
            showPopup: false,
            selectedItem: null,
            bottomGradientColors: null,
        };
    },
    async created() {
        await this.getUserData();
        await this.getHeroEquipment();
        this.getBottomGradientColors();
        await this.loadImages();
    },
    methods: {
        async upgradeHero(heroId) {
            try {
                const response = await axios.post(process.env.VUE_APP_API_URL + '/api/hero/upgrade', {
                    userId: this.userId,
                    itemId: heroId
                });
                console.log('Upgrade successful:', response.data);
            } catch (error) {
                console.error('Failed to upgrade hero:', error);
            }
        },
        async getHeroEquipment() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + `/api/hero/${this.userId}`);
                this.heroList = response.data;
            } catch (error) {
                console.error('Failed to fetch hero equipment:', error);
            }
        },
        openPopup(item) {
            this.selectedItem = item;
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
            this.selectedItem = null;
        },
        async loadImages() {
            for (let hero of this.heroList) {
                hero.imageUrl = (await import(`@/assets/Hero/${hero.imageUrl}`)).default;
            }
        },
        async getUserData() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + `/api/userGameData/${this.userId}`);
                const { currentGold, factionType } = response.data;

                this.currentGold = currentGold;
                this.factionType = factionType;
            } catch (error) {
                console.error('Failed to fetch user game data:', error);
            }
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