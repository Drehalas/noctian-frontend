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
    <FactionPropertyPopup v-if="showPopup" :item="selectedItem" @close="closePopup" :color="bottomGradientColors.bottom"
        :upgrade="upgradeHero" />
</template>

<script>
import '@/styles/hero.css';
import Footer from "@/components/Footer.vue";
import BaseHeroBar from "@/components/BaseHeroBar.vue";
import GoldBar from "@/components/GoldBar.vue";
import FactionHeader from "@/components/FactionHeader.vue";
import FactionProperty from "@/components/FactionProperty.vue";
import FactionPropertyPopup from "@/components/FactionPropertyPopup.vue";
import axios from 'axios';

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
            userId: "66e3679207906156d94fc3a8",
            factionType: null,
            heroList: [],
            showPopup: false,
            selectedItem: null,
            bottomGradientColors: null,
        };
    },
    async created() {
        await this.getUserData();
        await this.fetchHeroData();
        await this.loadImages();
        this.getBottomGradientColors();
        console.clear();
    },
    methods: {
        async upgradeHero(heroId) {
            const response = await axios.post(process.env.VUE_APP_API_URL + '/hero', {
                params: {
                    userId: this.userId,
                    id: heroId
                }
            });

            if (response.status == 200) {
                console.log("Success");
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
            this.loading = true;

            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + '/user', {
                    params: { userId: this.userId }
                });

                const { currentGold, factionType } = response.data[0];
                this.currentGold = currentGold;
                this.factionType = factionType;
            } catch (error) {
                this.error = error.message;
                console.error('Failed to fetch user details:', error);
            } finally {
                this.loading = false;
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
        async fetchHeroData() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + '/hero', {
                    params: { userId: this.userId }
                });

                this.heroList = response.data;
            } catch (error) {
                console.error('Error fetching hero data:', error);
            }
        }
    },
};
</script>