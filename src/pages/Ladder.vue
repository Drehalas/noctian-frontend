<template>
    <div class="container-center-horizontal">
        <div class="orc-ladder screen ">
            <div class="frame-30-sSjFR3">
                <div class="rectangle-3-7GkIVu" style="background: linear-gradient(180deg, #000000 30%, #ABE5CA 100%);">
                </div>
                <img class="orc-banner-7GkIVu" src="@/assets/Global/Attack/Undead banner.png" alt="Orc banner">
                <div class="orc-ladder-20-logo-container">
                    <img class="ork-ladder-20-logo-7GkIVu" src="@/assets/Undead images/Undead Avatar/20. Lost Soul.png"
                        alt="Ork Ladder 20 logo">
                </div>
                <div class="group-12-7GkIVu">
                    <div style="width: 80vw;height: inherit;">
                        <div class="rectangle-4-c0QDzt"></div>
                        <div class="rectangle-6-c0QDzt"></div>
                    </div>
                </div>
                <div class="ladder-info-container"
                    style="background:linear-gradient(180deg, #848484 0%, #182E26 100%);">
                    <div class="group-27-7GkIVu">
                        <h1 class="title-geIusQ">{{ ladderTitle }}</h1>
                        <div class="level-120-geIusQ">LADDER <span class="ladder-level">1/20</span></div>
                    </div>
                    <div class="ladder-list-container">
                        <div class="group-16-7GkIVu" v-for="item in ladderEntries" :key="item.id">
                            <div class="rectangle-10"></div>
                            <div class="frame-16">
                                <div class="frame-17-b6ve6e frame-17">
                                    <div class="saruman869-6pApPI roboto-semi-bold-white-12px">
                                        {{ item.playerName}}
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
                                        {{ myLadderData.playerName}}
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
                                        <div class="x2102-k roboto-semi-bold-white-11px">{{ myLadderData.points }}K</div>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="31" viewBox="0 0 2 31"
                                    fill="none" style="position: relative;left: 266px;">
                                    <path d="M1 30.9455L1 -9.76194e-05" stroke="white" stroke-width="0.3" />
                                </svg>
                                <div class="frame-19">
                                    <div class="x3236801-rsigCY roboto-semi-bold-white-12px">#{{ myLadderData.rank }}</div>
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
import ladderService from '@/services/ladderService';
import Footer from "@/components/Footer.vue";

export default {
    name: 'Ladder',
    components: {
        Footer,
    },
    data() {
        return {
            ladderTitle: 'Wormfood',
            ladderEntries: [],
            myLadderData: {},
            userId: 55
        };
    },
    methods: {
        async fetchLadderDetails() {
            this.loading = true;
            try {
                const response = await ladderService.fetchAllLadders();
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
                const response = await ladderService.fetchLadderById(this.userId);
                this.myLadderData = response.data;
            } catch (error) {
                this.error = error.message;
                console.error('Failed to fetch ladder details:', error);
            } finally {
                this.loading = false;
            }
        }
    },
    created() {
        this.fetchLadderDetails();
        this.fetchLadderDetailsById();
    }
};
</script>