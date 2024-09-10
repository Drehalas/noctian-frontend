<template>
    <div>
        <div class="container-center-horizontal">
            <div class="faction-selection screen">
                <div class="rectangle-3-YXzsPW"></div>
                <img class="faction-selection-background-YXzsPW"
                    src="@/assets/Global/Faction selection/faction selection background.png"
                    alt="faction selection background">
                <h1 class="title-YXzsPW text-shadow">Noctian: War for the Throne</h1>
                <img class="faction-selection-logo-YXzsPW"
                    src="@/assets/Global/Faction selection/Faction Selection Logo.png" alt="Faction Selection Logo">
                <div class="human-selection-YXzsPW" @click="showFactionDetails('HUMANS')">
                    <div class="human-selection-4aFvwT">
                        <div class="group-18">
                            <img class="rectangle-12-JrxMsg rectangle-12"
                                src="@/assets/Global/Faction selection/Human background.png" alt="Rectangle 12">
                            <div class="frame-21">
                                <div class="humans-qKcTbw rosarivo-normal-white-17px faction-title-shadow">HUMANS</div>
                            </div>
                            <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                                src="@/assets/Global/Faction selection/Human logo.png" alt="Human logo">
                        </div>
                    </div>
                </div>

                <div class="orc-selection-YXzsPW" @click="showFactionDetails('ORCS')">
                    <div class="group-18">
                        <img class="rectangle-12-9GSYS9 rectangle-12"
                            src="@/assets/Global/Faction selection/Orc background.png" alt="Rectangle 12">
                        <div class="frame-21">
                            <div class="orcs-nCgnnm rosarivo-normal-white-17px faction-title-shadow">ORCS</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Orc logo.png" alt="Orc logo">
                    </div>
                </div>

                <div class="angel-selection-YXzsPW" @click="showFactionDetails('ANGELS')">
                    <div class="group-18">
                        <img class="rectangle-12" src="@/assets/Global/Faction selection/Angel background.png"
                            alt="Rectangle 12">
                        <div class="frame-21">
                            <div class="angels-pvNINR rosarivo-normal-white-17px faction-title-shadow">ANGELS</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Angel logo.png" alt="Angel logo">
                    </div>
                </div>

                <div class="demon-selection-YXzsPW" @click="showFactionDetails('DEMONS')">
                    <div class="group-18">
                        <img class="rectangle-12" src="@/assets/Global/Faction selection/Demon background.png"
                            alt="Rectangle 12">
                        <div class="frame-21">
                            <div class="demons-hXA5hE rosarivo-normal-white-17px faction-title-shadow">DEMONS</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Demon logo.png" alt="Demon logo">
                    </div>
                </div>

                <div class="elf-selection-YXzsPW" @click="showFactionDetails('ELVES')">
                    <div class="group-18">
                        <img class="rectangle-11-5Us6sz" src="@/assets/Global/Faction selection/Elf background.png"
                            alt="Rectangle 11">
                        <div class="frame-21">
                            <div class="elves-c831ay rosarivo-normal-white-17px faction-title-shadow">ELVES</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Elf logo.png" alt="Elf logo">
                    </div>
                </div>

                <div class="undead-selection-YXzsPW" @click="showFactionDetails('UNDEADS')">
                    <div class="group-18">
                        <img class="rectangle-12" src="@/assets/Global/Faction selection/Undead background.png"
                            alt="Rectangle 12">
                        <div class="frame-21">
                            <div class="undeads-3gmlAw rosarivo-normal-white-17px faction-title-shadow">UNDEADS</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Human logo.png" alt="Undead logo">
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isFactionDetailsVisible" class="container-center-horizontal">
            <div class="human-selection screen">
                <div class="group-31-qDvr60">
                    <div class="rectangle-3-drvqzZ"
                        :style="{ background: `linear-gradient(180deg, #000 0%, ${getFactionGradientColor(selectedFaction)} 100%)` }">
                    </div>
                    <div class="rectangle-4-drvqzZ"
                        :style="{ background: `linear-gradient(180deg, #000 0%, ${getFactionGradientColor(selectedFaction)} 100%)` }">
                    </div>
                    <div class="group-28-drvqzZ">
                        <div class="rectangle-2-lfHp5b"
                            :style="{ backgroundColor: getFactionGradientColor(selectedFaction) }"></div>
                        <img class="rectangle-11-lfHp5b" :src="getFactionPopupBackgroundImg(selectedFaction)"
                            alt="Faction background">
                        <div class="human-selection-button-lfHp5b" @click="selectFaction"
                            :style="{ backgroundColor: getButtonColor(selectedFaction) }">
                            <div class="select-mYlsYp">Select</div>
                        </div>
                    </div>
                    <div class="frame-25-drvqzZ">
                        <h1 class="title-qEjfPb text-shadow" style="font-size: 16px;">{{ selectedFaction }}</h1>
                    </div>
                    <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1-drvqzZ"
                        :src="getFactionPopupLogo(selectedFaction)" alt="Faction logo">
                    <div class="frame-26-drvqzZ">
                        <p class="humans-renowned-for-orkOTD">{{ factionDescription }}</p>
                    </div>
                    <div class="close-button-drvqzZ" @click="closeFactionDetails">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                fill="none">
                                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.4308 24.8616C19.2961 24.8616 24.8616 19.2961 24.8616 12.4308C24.8616 5.56545 19.2961 0 12.4308 0C5.56545 0 0 5.56545 0 12.4308C0 19.2961 5.56545 24.8616 12.4308 24.8616ZM12.4347 13.5263L17.3759 18.4753L18.4714 17.3721L13.5301 12.4308L18.4714 7.4895L17.3759 6.39403L12.4347 11.3353L7.49338 6.38626L6.39014 7.4895L11.3392 12.4308L6.39014 17.3721L7.49338 18.4753L12.4347 13.5263Z"
                                    fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/styles/faction-selection.css";
import axios from "axios";
import humanBackground from '@/assets/Global/Faction selection/pop-up/Human background.png';
import orcBackground from '@/assets/Global/Faction selection/pop-up/Orc background.png';
import angelBackground from '@/assets/Global/Faction selection/pop-up/Angel background.png';
import demonBackground from '@/assets/Global/Faction selection/pop-up/Demon background.png';
import elfBackground from '@/assets/Global/Faction selection/pop-up/Elf background.png';
import undeadBackground from '@/assets/Global/Faction selection/pop-up/Undead background.png';

import humanLogo from '@/assets/Global/Faction selection/pop-up/Human logo.png';
import orcLogo from '@/assets/Global/Faction selection/pop-up/Orc logo.png';
import angelLogo from '@/assets/Global/Faction selection/pop-up/Angel logo.png';
import demonLogo from '@/assets/Global/Faction selection/pop-up/Demon logo.png';
import elfLogo from '@/assets/Global/Faction selection/pop-up/Elf logo.png';
import undeadLogo from '@/assets/Global/Faction selection/pop-up/Undead logo.png';

export default {
    name: 'FactionSelection',
    data() {
        return {
            descriptions: null,
            isFactionDetailsVisible: false,
            selectedFaction: '',
            factionDescription: '',
            factionPopupImages: {
                background: '',
                logo: ''
            }
        };
    },
    methods: {
        showFactionDetails(faction) {
            this.selectedFaction = faction;
            this.factionDescription = this.getFactionDescription(faction);
            this.factionPopupImages.background = this.getFactionPopupBackgroundImg(faction);
            this.factionPopupImages.logo = this.getFactionPopupLogo(faction);
            this.isFactionDetailsVisible = true;
        },
        closeFactionDetails() {
            this.isFactionDetailsVisible = false;
        },
        getFactionDescription(faction) {
            return this.descriptions[faction] || '';
        },
        getFactionPopupBackgroundImg(faction) {
            const images = {
                HUMANS: humanBackground,
                ORCS: orcBackground,
                ANGELS: angelBackground,
                DEMONS: demonBackground,
                ELVES: elfBackground,
                UNDEADS: undeadBackground
            };

            return images[faction] || '';
        },
        getFactionPopupLogo(faction) {
            const logos = {
                HUMANS: humanLogo,
                ORCS: orcLogo,
                ANGELS: angelLogo,
                DEMONS: demonLogo,
                ELVES: elfLogo,
                UNDEADS: undeadLogo
            };

            return logos[faction] || '';
        },
        getFactionGradientColor(faction) {
            const colors = {
                HUMANS: "#0D2CAB",
                ORCS: "#D1001C",
                ANGELS: "#FFFFFF",
                DEMONS: "#D1001C",
                ELVES: "#4ACC17",
                UNDEADS: "#ABE5CA"
            };

            return colors[faction] || '';
        },
        getButtonColor(faction) {
            const colors = {
                HUMANS: "#0D2CAB",
                ORCS: "#13460E",
                ANGELS: "#C6AC47",
                DEMONS: "#9E071A",
                ELVES: "#13460E",
                UNDEADS: "#048556"
            };

            return colors[faction] || '';
        },
        async selectFaction() {
            try {
                const response = await axios.post(process.env.VUE_APP_API_URL + '/factions', {
                    params: { 
                        userId: this.userId,
                        faction: this.selectedFaction
                    }
                });

                if(response.success) {
                    this.$router.push(`/?faction=${this.selectedFaction.toLowerCase()}`);
                }
            } catch (error) {
                console.error('Error fetching factions data:', error);
            }
        },
        async fetchFactionDescription() {
            try {
                const response = await axios.get(process.env.VUE_APP_API_URL + '/factions', {
                    params: { userId: this.userId }
                });

                this.descriptions = response.data;
            } catch (error) {
                console.error('Error fetching factions data:', error);
            }
        }
    },
    async mounted() {
        await this.fetchFactionDescription();
    }
};
</script>

<style>
.text-shadow {
    text-shadow: -1px -4px #000000,
        -2px 3px #000000,
        -4px 2px #000000,
        4px -2px #000000,
        4px 2px #000000,
        -4px -1px #000000,
        4px -1px #000000,
        0px 4px #000000 !important
}

.faction-title-shadow {
    text-shadow: -1px -1px #000000,
        -1px 1px #000000,
        -1px 1px #000000,
        1px -1px #000000,
        1px 1px #000000,
        -1px -1px #000000,
        -1px -1px #000000,
        0px 1px #000000 !important
}
</style>