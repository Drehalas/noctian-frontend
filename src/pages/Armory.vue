<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader :factionType="factionType" v-if="factionType" />
                <div class="page-container" v-if="bottomGradientColors"
                    :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                    <GoldBar v-if="currentGold" :currentGold="currentGold" />
                    <BaseHeroBar :selected="'Armory'" :factionType="factionType" v-if="factionType" />
                    <div class="hero-equp-select-lvJUvn">
                        <FactionProperty v-for="item in armoryList" :key="item.id" :property="item"
                            @click="openPopup(item)" />
                    </div>
                </div>
            </div>
            <Footer :selected="'Base'" />
        </div>
    </div>
    <FactionPropertyPopup v-if="showPopup" :item="selectedItem" @close="closePopup" :color="bottomGradientColors.bottom"
        :upgrade="upgradeArmory" />
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
            armoryList: [],
            showPopup: false,
            selectedItem: null,
            factionType: null,
            bottomGradientColors: null,
        };
    },
    async created() {
        await this.getUserData();
        await this.fetchArmoryData();
        await this.loadImages();
        this.getBottomGradientColors();
        console.clear();
    },
    methods: {
        async upgradeArmory(armoryId) {
            const response = await axios.post(process.env.VUE_APP_API_URL + '/armories', {
                params: {
                    userId: this.userId,
                    id: armoryId
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
            for (let armory of this.armoryList) {
                armory.imageUrl = (await import(`@/assets/${this.formatFactionType(this.factionType)} images/${this.formatFactionType(this.factionType)} Armory/${armory.imageUrl}`)).default;
            }
        },
        async getUserData() {
            this.loading = true;

            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + '/user', {
                    params: { userId: this.userId }
                });

                const { currentGold, factionType } = response.data;
                this.currentGold = currentGold;
                this.factionType = factionType;
            } catch (error) {
                this.error = error.message;
                console.error('Failed to fetch user details:', error);
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
        async fetchArmoryData() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + '/armory', {
                    params: { userId: this.userId }
                });

                this.armoryList = response.data;
            } catch (error) {
                console.error('Error fetching armory data:', error);
            }
        }
    },
};
</script>