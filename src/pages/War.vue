<template>
    <div class="container-center-horizontal">
        <div class="orc-war screen ">
            <div class="frame-30-0Yffcq">
                <div class="rectangle-3-gfXRIF"></div>
                <div
                    style="top: 45vh;position: absolute;z-index: 0;width: 100vw;min-height: 70vh;background: linear-gradient(180deg, #29323F 0%, #c7c7c7 100%);">
                </div>
                <img class="war-banner-gfXRIF" src="@/assets/Global/War/war banner.png" alt="war banner">
                <div
                    style="top: 50vh;position: absolute;width: 100vw;min-height: 70vh;display: flex;align-items: center;flex-direction: column;">
                    <div class="group-27-gfXRIF">
                        <div class="level-120-JSjuIa" style="font-size: 24px;">THRONE</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="2" viewBox="0 0 180 2" fill="none"
                            style="position: relative;top:15px">
                            <path d="M0 0.929443H180" stroke="white" stroke-width="0.3" />
                        </svg>
                    </div>
                    <div class="group-16-gfXRIF" v-for="(throne, index) in throneList" :key="throne.id">
                        <div class="rectangle-10-sMV5yX rectangle-10"></div>
                        <div class="frame-16-sMV5yX frame-16">
                            <div class="frame-17-vwdZa2 frame-17"
                                :style="{ backgroundColor: getWarBackgroundColor(throne.faction) }">
                                <div class="orcs roboto-semi-bold-white-12px">{{ throne.faction }}</div>
                                <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-2-91MWnz x9b3af883-354d-4413-bf7f-37baaad350d0-2"
                                    :src="throne.imageUrl">
                            </div>
                            <div class="frame-18-vwdZa2 frame-18">
                                <div class="frame-4">
                                    <div class="group-8-qFxTKI group-8"><img
                                            class="pngtreeglossy-golden-coin-icon_6866281-1"
                                            src="@/assets/Global/Common/Gold.png"
                                            alt="Pngtreeglossy golden coin icon_6866281 1"></div>
                                    <div class="x32102-b-qFxTKI roboto-semi-bold-white-11px">{{ throne.totalGold }}
                                    </div>
                                </div>
                            </div>
                            <div class="frame-19-vwdZa2 frame-19"
                                :style="{ backgroundColor: getThronePlaceColor(index + 1) }">
                                <div class="x1-RBnjXB roboto-semi-bold-white-12px">{{ index + 1 }}.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style="position: absolute;top: 30px;width: 100%;left: 0px;display: flex;flex-direction: column;align-items: center;">
                    <img class="x2-2-gfXRIF" src="@/assets/Global/War/2 2.png" alt="2 2">
                    <div class="group-39-gfXRIF" style="position: relative;" v-for="war in warList" :key="war.id">
                        <div class="rectangle-10-9mhVzY rectangle-10"></div>
                        <div class="frame-16-9mhVzY frame-16">
                            <div class="frame-19-C1Ze1Q frame-19"
                                :style="{ backgroundColor: getWarBackgroundColor(war.first) }">
                                <div class="orcs roboto-semi-bold-white-12px">{{ war.first }}</div>
                            </div>
                            <img class="x22" src="@/assets/Global/War/22.png" alt="22">

                            <div class="frame-20-C1Ze1Q frame-20"
                                :style="{ backgroundColor: getWarBackgroundColor(war.second) }">
                                <div class="elves roboto-semi-bold-white-12px">{{ war.second }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="group-45-gfXRIF">
                        <div class="rectangle-10-OxckLq rectangle-10">
                            <div class="frame-16-OxckLq frame-16">
                                <div class="frame-19-tkD6WF frame-19">
                                    <h1 class="title-JWTY9q" style="font-size: 25px;">NEXT BATTLE:</h1>
                                    <div class="x15958-JWTY9q" style="font-size: 30px;">
                                        {{ formatTime(hours) }}:{{ formatTime(minutes) }}:{{ formatTime(seconds) }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer :selected="'War'" />
        </div>
    </div>
</template>

<script>
import '@/styles/war.css';
import Footer from "@/components/Footer.vue";

export default {
    name: 'War',
    components: {
        Footer,
    },
    data() {
        return {
            warList: [
                {
                    id: 1,
                    first: "ORCS",
                    second: "ELVES"
                },
                {
                    id: 2,
                    first: "DEMONS",
                    second: "ANGELS"
                },
                {
                    id: 3,
                    first: "UNDEADS",
                    second: "HUMANS"
                }
            ],
            throneList: [
                {
                    faction: "ORCS",
                    totalGold: "321.02B"
                },
                {
                    faction: "DEMONS",
                    totalGold: "318.98B"
                },
                {
                    faction: "ANGELS",
                    totalGold: "316.51B"
                },
                {
                    faction: "ELVES",
                    totalGold: "314.27B"
                },
                {
                    faction: "HUMANS",
                    totalGold: "311.51B"
                },
                {
                    faction: "UNDEADS",
                    totalGold: "274.74B"
                }
            ],
            endTime: new Date('2024-09-12T00:00:00').getTime(),
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    },
    methods: {
        formatTime(time) {
            return time.toString().padStart(2, '0')
        },
        updateCountdown() {
            const now = new Date().getTime()
            const distance = this.endTime - now

            if (distance > 0) {
                this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
            } else {
                clearInterval(this.timer)
                this.hours = 0
                this.minutes = 0
                this.seconds = 0
            }
        },
        getWarBackgroundColor(faction) {
            switch (faction) {
                case "ORCS":
                    return "#073d029e";
                case "ELVES":
                    return "#0c9a0080";
                case "DEMONS":
                    return "#8a000080";
                case "ANGELS":
                    return "#c9d2e280";
                case "UNDEADS":
                    return "#21242980";
                case "HUMANS":
                    return "#05337e80";

                default:
                    return "#073d029e";
            }
        },
        getThronePlaceColor(place) {
            switch (place) {
                case 1:
                    return "#ffe10080";
                case 2:
                    return "#f0f0f080";
                case 3:
                    return "#9b520080";
                default:
                    return "#21242980";
            }
        },
        async loadImages() {
            for (let throne of this.throneList) {
                throne.imageUrl = (await import(`@/assets/Global/War/${this.formatFactionType(throne.faction)} logo.png`)).default;
            }
        },
        formatFactionType(type) {
            if (type == "ELVES") {
                type = "ELFS";
            }

            type = type.substring(0, type.length - 1)

            return type.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
        },
    },
    mounted() {
        this.updateCountdown();
        this.timer = setInterval(this.updateCountdown, 1000);
        this.loadImages();
    }
};
</script>