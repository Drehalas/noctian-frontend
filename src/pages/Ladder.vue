<template>
    <div class="container-center-horizontal">
        <div class="orc-ladder screen ">
            <div class="frame-30-sSjFR3">
                <div v-if="topGradientColors" class="rectangle-3-7GkIVu"
                    :style="{ background: `linear-gradient(180deg, ${topGradientColors.top} 30%, ${topGradientColors.bottom} 100%)` }">
                </div>
                <img class="orc-banner-7GkIVu" :src="bannerImage" v-if="bannerImage">
                <div class="orc-ladder-20-logo-container">
                    <img class="ork-ladder-20-logo-7GkIVu" :src="avatarImage" v-if="avatarImage">
                </div>
                <div class="group-12-7GkIVu">
                    <div style="width: 80vw;height: inherit;">
                        <div ref="rectangle4" class="rectangle-4-c0QDzt"></div>
                        <div class="rectangle-6-c0QDzt" v-if="exp"
                            :style="{ width: currentExpWidth() + 'px', backgroundColor: expBarColor }"></div>
                    </div>
                </div>
                <div class="ladder-info-container" v-if="bottomGradientColors"
                    :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                    <div class="group-27-7GkIVu">
                        <h1 class="title-geIusQ">{{ title }}</h1>
                        <div class="level-120-geIusQ">LADDER <span class="ladder-level">1/20</span></div>
                    </div>
                    <div class="ladder-list-container">
                        <div class="group-16-7GkIVu" v-for="item in ladderEntries" :key="item.id">
                            <div class="rectangle-10"></div>
                            <div class="frame-16">
                                <div class="frame-17-b6ve6e frame-17">
                                    <div class="saruman869-6pApPI roboto-semi-bold-white-12px">
                                        {{ item.playerName }}
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="31" viewBox="0 0 2 31"
                                    fill="none" style="position: relative;left: 78px;">
                                    <path d="M1 30.9455L1 -9.76194e-05" stroke="white" stroke-width="0.3" />
                                </svg>
                                <div class="frame-18-b6ve6e frame-18">
                                    <div class="frame-4">
                                        <div class="group-8-3jj4gC group-8">
                                            <img class="pngtreeglossy-golden-coin-icon_6866281-1"
                                                src="@/assets/Global/Common/Gold.png" alt="Gold">
                                        </div>
                                        <div class="x2102-k roboto-semi-bold-white-11px">{{ item.points }}K</div>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="31" viewBox="0 0 2 31"
                                    fill="none" style="position: relative;left: 266px;">
                                    <path d="M1 30.9455L1 -9.76194e-05" stroke="white" stroke-width="0.3" />
                                </svg>
                                <div class="frame-19">
                                    <div class="x3236801-rsigCY roboto-semi-bold-white-12px">#{{ item.rank }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="group-16-7GkIVu" :key="myLadderData.id" style="margin-top: 5px;">
                            <div class="rectangle-10"></div>
                            <div class="frame-16">
                                <div class="frame-17-b6ve6e frame-17">
                                    <div class="saruman869-6pApPI roboto-semi-bold-white-12px">
                                        {{ myLadderData.playerName }}
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="31" viewBox="0 0 2 31"
                                    fill="none" style="position: relative;left: 78px;">
                                    <path d="M1 30.9455L1 -9.76194e-05" stroke="white" stroke-width="0.3" />
                                </svg>
                                <div class="frame-18-b6ve6e frame-18">
                                    <div class="frame-4">
                                        <div class="group-8-3jj4gC group-8">
                                            <img class="pngtreeglossy-golden-coin-icon_6866281-1"
                                                src="@/assets/Global/Common/Gold.png" alt="Gold">
                                        </div>
                                        <div class="x2102-k roboto-semi-bold-white-11px">{{ myLadderData.points }}K
                                        </div>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="31" viewBox="0 0 2 31"
                                    fill="none" style="position: relative;left: 266px;">
                                    <path d="M1 30.9455L1 -9.76194e-05" stroke="white" stroke-width="0.3" />
                                </svg>
                                <div class="frame-19">
                                    <div class="x3236801-rsigCY roboto-semi-bold-white-12px">#{{ myLadderData.rank }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer :selected="'Ladder'" />
        </div>
    </div>
</template>

<script>
import '@/styles/ladder.css';
import Footer from "@/components/Footer.vue";
import axios from 'axios';

export default {
    name: 'Ladder',
    components: {
        Footer,
    },
    data() {
        return {
            ladderEntries: [],
            myLadderData: {},
            factionType: null,
            avatarImage: null,
            bannerImage: null,
            title: null,
            exp: null,
            expBarColor: null,
            topGradientColors: null,
            bottomGradientColors: null,
            userId: 55
        };
    },
    methods: {
        async fetchLadderDetails() {
            this.loading = true;
            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + '/ladders', {
                    params: { userId: this.userId }
                });

                this.ladderEntries = response.data.map(ladder => ({
                    id: ladder.id,
                    playerName: ladder.playerName,
                    points: ladder.points,
                    rank: ladder.rank
                }));
            } catch (error) {
                this.error = error.message;
                console.error('Failed to fetch ladder details:', error);
            } finally {
                this.loading = false;
            }
        },
        async fetchLadderDetailsById() {
            this.loading = true;
            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + '/ladders/' + this.userId, {
                    params: { userId: this.userId }
                });

                this.myLadderData = response.data;
            } catch (error) {
                this.error = error.message;
                console.error('Failed to fetch ladder details:', error);
            } finally {
                this.loading = false;
            }
        },
        async getUserData() {
            this.loading = true;

            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + '/user', {
                    params: { userId: this.userId }
                });

                const { factionType, avatarImage, title, exp } = response.data;
                this.factionType = factionType;
                this.avatarImage = avatarImage;
                this.title = title;
                this.exp = exp;
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
        async loadImages() {
            this.bannerImage = (await import(`@/assets/Global/Attack/${this.formatFactionType(this.factionType)} banner.png`)).default;
            this.avatarImage = (await import(`@/assets/${this.formatFactionType(this.factionType)} images/${this.formatFactionType(this.factionType)} Avatar/${this.avatarImage}`)).default;
        },
        currentExpWidth() {
            const rectangle4 = document.querySelector('.rectangle-4-c0QDzt');
            const width = rectangle4?.offsetWidth;

            return (this.exp / 100) * width;
        },
        getExpBarColor() {
            const colors = {
                ORC: "#C0B104",
                UNDEAD: "#ABE5CA",
                HUMAN: "#0D2CAB",
                ANGEL: "#FFFFFF",
                ELF: "#237C02",
                DEMON: "#F3D213"
            }

            this.expBarColor = colors[this.factionType?.toUpperCase()];
        },
        getTopGradientColors() {
            const colors = {
                ORC: {
                    top: "#000000",
                    bottom: "#D1001C"
                },
                UNDEAD: {
                    top: "#000000",
                    bottom: "#182E26"
                },
                HUMAN: {
                    top: "#000000",
                    bottom: "#0D2CAB"
                },
                ANGEL: {
                    top: "#000000",
                    bottom: "#FFFFFF"
                },
                ELF: {
                    top: "#000000",
                    bottom: "#4ACC17"
                },
                DEMON: {
                    top: "#000000",
                    bottom: "#D1001C"
                }
            }

            this.topGradientColors = colors[this.factionType?.toUpperCase()];
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
    async created() {
        await this.getUserData();
        await this.fetchLadderDetails();
        await this.fetchLadderDetailsById();
        await this.loadImages();
    },
    mounted() {
        this.currentExpWidth();
        this.getExpBarColor();
        this.getTopGradientColors();
        this.getBottomGradientColors();
    }
};
</script>