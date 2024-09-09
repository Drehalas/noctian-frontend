<template>
    <div class="container-center-horizontal">
        <div class="orc-attack screen ">
            <div class="group-71-9glIQN">
                <div class="orc-attack-CiWjWe">
                    <div class="group-29-zJN8sm">
                        <div class="rectangle-3-Z6GGxj" v-if="topGradientColors"
                            :style="{ background: `linear-gradient(180deg, ${topGradientColors.top} 50%, ${topGradientColors.bottom} 100%)` }">
                        </div>
                        <div class="rectangle-1-Z6GGxj" v-if="bottomGradientColors"
                            :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                        </div>
                        <img class="orc-banner-Z6GGxj" :src="bannerImage" alt="Orc banner">
                        <p class="noctian-war-for-the-throne-Z6GGxj">Noctian: War for the throne</p>
                        <div>
                            <img class="orc-button-Z6GGxj" :src="buttonImage" alt="Orc button"
                                style="border: 1px solid transparent; border-radius: 50%;" @click="gainGold">
                            <img class="ork-ladder-20-logo-Z6GGxj" :src="avatarImage" alt="Orc Ladder 20 logo"
                                @click="gainGold">
                        </div>
                        <div class="frame-2-Z6GGxj">
                            <div class="wormfood-Cbc0iH wormfood">{{ title }}</div>
                            <div class="arthur8071-Cbc0iH">{{ name }}</div>
                        </div>
                        <div class="frame-3-Z6GGxj">
                            <img class="e3461866-28e9-4e0f-95cb-223395215a83-1-R8jrdC"
                                src="@/assets/Global/Attack/Orc attack logo.png" alt="Orc attack logo">
                            <img class="line-1-4fyxtR line-1" src="@/assets/Global/Attack/Vertical line.svg"
                                alt="Line 1" style="top: 6px;">
                            <div class="war-income-per-hour-R8jrdC">War income per hour</div>
                            <div class="frame-4-R8jrdC frame-4">
                                <div class="group-9-1bAkpj group-9">
                                    <div class="group-8-FONy3l group-8">
                                        <img class="gold-5ouUfJ gold" src="@/assets/Global/Common/Gold.png" alt="Gold">
                                    </div>
                                </div>
                                <div class="x63631-k-1bAkpj">+{{ incomePerHour }}</div>
                                <img class="vector-1bAkpj vector" src="@/assets/Global/Attack/info.svg" alt="Vector"
                                    title="War income represents the passive income gained after a battle."
                                    @click="showTitle">
                            </div>
                            <img class="line-1-4fyxtR line-1" src="@/assets/Global/Attack/Vertical line.svg"
                                alt="Line 1" style="position: relative;left: 125px;top: 6px;">
                        </div>
                        <GoldBar v-if="currentGold" :currentGold="currentGold"/>
                        <div class="group-12-Z6GGxj">
                            <div class="rectangle-4-8WDrgx" id="totalExp"></div>
                            <div class="rectangle-5-8WDrgx" id="currentExp"
                                :style="{ width: currentExpWidth() + 'px', backgroundColor: expBarColor }"></div>
                            <div class="frame-10-8WDrgx">
                                <div class="wormfood-CUprVx wormfood roboto-medium-white-9px">
                                    {{ title }}
                                </div>
                                <img class="vector-CUprVx vector" src="@/assets/Global/Attack/Vector.svg" alt="Vector">
                            </div>
                            <div class="level-120-8WDrgx">
                                <span class="span0-JXIfOE">Level {{ level }}</span>
                                <span class="span1-JXIfOE roboto-medium-white-9px">/20</span>
                            </div>
                        </div>
                        <div class="frame-12-Z6GGxj">
                            <div class="group-68-jDU8To">
                                <div class="frame-34-VYxXau">
                                    <div class="group-67-XBoaRC">
                                        <div class="frame-11-Gqe1Rb frame-11">
                                            <img class="bc558d3d-8d85-47c6-a507-95a6035c5e38-1-8oF7wV"
                                                src="@/assets/Global/Attack/Mana.png"
                                                alt="bc558d3d-8d85-47c6-a507-95a6035c5e38 1">
                                            <div class="x6500-6500-8oF7wV">{{ currentMana }} / {{ totalMana }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="buff-button-jDU8To" @click="toggleSkillBuffDiv">
                                <div class="frame-33-RPMWVZ">
                                    <div class="group-56-lN2Ajn">
                                        <div class="skill-buff-HU5t6E">Skill &amp; Buff</div>
                                        <img class="x83c250f6-14c4-4c9e-a6a8-5c1542948173-1-HU5t6E"
                                            src="@/assets/Global/Attack/Skill.png" alt="Skill">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="frame-35-Z6GGxj">
                            <div class="orcs-Ip5M10">{{ factionType }}</div>
                            <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1-Ip5M10" :src="logoImage">
                        </div>
                    </div>
                    <Footer :selected="'Attack'" />
                    <div class="select-kingdom-zJN8sm select-kingdom">
                        <img class="binance-logo-4fyxtR" :src="logoImage" alt="Undead Logo">
                        <div class="select-kingdom-4fyxtR select-kingdom">Select Kingdom</div>
                        <img class="line-1-4fyxtR line-1" src="@/assets/Global/Attack/Vertical line.svg" alt="Line 1">
                        <div class="frame-36-4fyxtR">
                            <div class="frame-4-NxHzQ7 frame-4">
                                <select name="wallet" id="wallet"
                                    style="width:inherit;outline: none;border:none; font-size: 10px; background-color: #000000B2;color: #fff;padding: 2px;border-radius: 5px;">
                                    <option value="none" selected>-None-</option>
                                    <!-- <option value="binance-horde"> Binance Horde</option>
                                    <option value="okx-horde">OKX Horde</option> -->
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-for="(text, index) in floatingTexts" :key="index" :id="index + '-float-text'"
        :style="{ top: text.y + 'px', left: text.x + 'px' }" @click="gainGold" class="floating-text">
        +{{ this.formattedGold(increaseAmount) }} <img class="" src="@/assets/Global/Common/Gold.png" alt="Gold">
    </div>
    <SkillBuff v-show="isSkillBuffVisible" @close="toggleSkillBuffDiv" />
</template>

<script>
import '@/styles/attack.css';
// import attackService from '@/services/attackService';
import Footer from '@/components/Footer.vue';
import GoldBar from '@/components/GoldBar.vue';
import SkillBuff from '@/components/SkillBuff.vue';
import { useToast } from "vue-toastification";

export default {
    name: 'Attack',
    components: {
        Footer,
        GoldBar,
        SkillBuff
    },
    data() {
        return {
            isSkillBuffVisible: false,
            bannerImage: null,
            avatarImage: null,
            buttonImage: null,
            logoImage: null,
            floatingTexts: [],
            name: null,
            incomePerHour: null,
            increaseAmount: null,
            factionType: null,
            currentGold: null,
            level: null,
            exp: null,
            currentMana: null,
            totalMana: null,
            title: null,
            expBarColor: null,
            bottomGradientColors: null,
            topGradientColors: null,
            userId: 100,
        }
    },
    setup() {
        const toast = useToast();

        return { toast }
    },
    methods: {
        toggleSkillBuffDiv() {
            this.isSkillBuffVisible = !this.isSkillBuffVisible;
        },
        gainGold(event) {
            const { innerHeight, innerWidth } = window;
            const limit = 150;

            const x = (innerWidth - event.clientX < limit) ? event.clientX - limit : event.clientX;
            const y = (innerHeight - event.clientY < limit) ? event.clientY - limit : event.clientY;
            this.createFloatingText(x, y);

            this.addGold(this.increaseAmount);
        },    
        addGold(amount) {
            this.currentGold += amount;
        },
        createFloatingText(x, y) {
            this.floatingTexts.push({ x, y });

            setTimeout(() => {
                this.floatingTexts.shift();
            }, 500);
        },
        showTitle(event) {
            this.toast.info(event.target.title);
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
                        factionType: "ELF"
                    }
                };

                //await attackService.getUserById(this.userId);

                const { name, incomePerHour, increaseAmount, factionType, currentGold, level, avatarImage, exp, currentMana, totalMana, title } = response.data;
                this.name = name;
                this.incomePerHour = incomePerHour;
                this.increaseAmount = increaseAmount;
                this.factionType = this.formatFactionType(factionType);
                this.currentGold = currentGold;
                this.level = level;
                this.avatarImage = avatarImage;
                this.exp = exp;
                this.currentMana = currentMana;
                this.totalMana = totalMana;
                this.title = title;
            } catch (error) {
                this.error = error.message;
                console.error('Failed to fetch ladder details:', error);
            } finally {
                this.loading = false;
            }
        },
        formatFactionType(type) {
            console.log(type);

            return type.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
        },
        async loadImages() {
            this.bannerImage = (await import(`@/assets/Global/Attack/${this.factionType} banner.png`)).default;
            this.avatarImage = (await import(`@/assets/${this.factionType} images/${this.factionType} Avatar/${this.avatarImage}`)).default;
            this.buttonImage = (await import(`@/assets/Global/Attack/${this.factionType} button.png`)).default;
            this.logoImage = (await import(`@/assets/Global/Attack/${this.factionType} logo.png`)).default;
        },
        formattedGold(number) {
            const suffixes = ['', 'k', 'M', 'B', 'T'];
            let suffixIndex = 0;

            while (number >= 1000 && suffixIndex < suffixes.length - 1) {
                number /= 1000;
                suffixIndex++;
            }

            return number.toFixed(1).replace(/.0$/, '') + suffixes[suffixIndex];
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
        currentExpWidth() {
            return (this.exp / 100) * 130;
        }
    },
    mounted() {
        this.getUserData();
        this.getBottomGradientColors();
        this.getTopGradientColors();
        this.loadImages();
        this.getExpBarColor();
    }
};
</script>

<style scoped>
.equipment-page {
    padding: 20px;
}

.floating-text {
    position: absolute;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    animation: floatText 1s ease-out forwards;
    display: flex;
    align-items: center;
}

@keyframes floatText {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(-50px);
    }
}
</style>