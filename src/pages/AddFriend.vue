/* eslint-disable vue/multi-word-component-names */

<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen orc-add-friend">
            <div class="frame-30-zHO16R">
                <FactionHeader :factionType="factionType" v-if="factionType"/>
                <div class="page-container" v-if="bottomGradientColors"
                    :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                    <GoldBar v-if="currentGold" :currentGold="currentGold" />
                    <BaseHeroBar :selected="'Peon'" :factionType="factionType" v-if="factionType"/>
                    <div style="width: 100vw; display: flex; justify-content: center; flex-direction: column; align-items: center;">
                        <div class="group-19-YWnndF">
                            <div class="group-18-ads4WT group-18">
                                <div class="rectangle-11-hwdVXu rectangle-11"></div>
                                <div class="frame-22-hwdVXu">
                                    <div class="peon-6jHW5V peon">
                                        {{getAddFriendText()}}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="2"
                                            viewBox="0 0 180 2" fill="none" style="position: relative">
                                            <path d="M0 0.929443H180" stroke="white" stroke-width="0.3" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="frame-23-hwdVXu">
                                    <p class="add-your-friends-and-SaVObQ">Add your friends and some of their
                                        gold will be added to your chest. Remember that they have to be in the same
                                        faction
                                        because no one will help their enemies.</p>
                                </div>
                            </div>
                        </div>
                        <div class="add-friend-button-YWnndF" @click="showMessage">
                            <div class="group-18-DJAnWR group-18">
                                <div class="rectangle-11-tLIa2h rectangle-11"></div>
                                <div class="frame-21-tLIa2h">
                                    <div class="add-friend-IX9HgH">ADD FRIEND</div>
                                </div>
                            </div>
                        </div>
                        <div class="group-27-YWnndF">
                            <div class="rectangle-10-nSIjJq"></div>
                            <div class="frame-16-nSIjJq">
                                <div class="friend-list-nSnucG">Friend list</div>
                                <div class="group-57-nSnucG" v-for="item in friends" :key="item.id">
                                    <div class="frame-18-mujmNE">
                                        <div class="carzyl544-RccxTl roboto-semi-bold-white-12px">
                                            {{ item.name }}
                                        </div>
                                    </div>
                                    <div class="frame-19-mujmNE frame-19">
                                        <div class="x1-fkSG5E roboto-semi-bold-white-12px">
                                            {{ item.id }}.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer :selected="'Base'" />
        </div>
    </div>
</template>

<script>
import '@/styles/add-friend.css';
import Footer from "@/components/Footer.vue";
import BaseHeroBar from "@/components/BaseHeroBar.vue";
import GoldBar from "@/components/GoldBar.vue";
import FactionHeader from "@/components/FactionHeader.vue";
import { useToast } from "vue-toastification";
import axios from 'axios';

export default {
    name: 'AddFriend',
    components: {
        Footer,
        BaseHeroBar,
        GoldBar,
        FactionHeader,
    },
    data() {
        return {
            currentGold: null,
            userId: 100,
            bottomGradientColors: null,
            factionType: null,
            friends: [],
        };
    },
    setup() {
        const toast = useToast();

        return { toast }
    },
    methods: {
        showMessage() {
            this.toast.error("An error occurred while adding friends.");
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
        },
        async fetchFriendData() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + '/friends', {
                    params: { userId: this.userId }
                });
                
                this.friends = response.data;
            } catch (error) {
                console.error('Error fetching friend data:', error);
            }
        }
    },
    async created() {
        await this.getUserData();
        await this.fetchFriendData();
        this.getBottomGradientColors();
        console.clear();
    }
};
</script>