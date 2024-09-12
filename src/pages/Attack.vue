<template>
    <div class="container-center-horizontal">
        <div class="orc-attack screen ">
            <div class="group-71-9glIQN">
                <div class="orc-attack-CiWjWe">
                    <div class="group-29-zJN8sm">
                        <div class="rectangle-3-Z6GGxj" v-if="topGradientColors"
                            :style="{ background: `linear-gradient(180deg, ${topGradientColors.top} 60%, ${topGradientColors.bottom} 100%)` }">
                        </div>
                        <div class="rectangle-1-Z6GGxj" v-if="bottomGradientColors"
                            :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                        </div>
                        <img class="orc-banner-Z6GGxj" :src="bannerImage" alt="Orc banner">
                        <div
                            style="top: 1vh;position: absolute;height: 27vh;width: 100vw;display: flex;justify-content: space-around;flex-direction: column;align-items: center;">
                            <p class="noctian-war-for-the-throne-Z6GGxj">Noctian: War for the throne</p>
                            <div
                                style="width: 100vw;position: relative;display: flex;justify-content: space-around;align-items: center;">
                                <div class="select-kingdom-zJN8sm select-kingdom">
                                    <img class="binance-logo-4fyxtR" :src="logoImage" alt="Undead Logo">
                                    <div class="select-kingdom-4fyxtR select-kingdom">Select Kingdom</div>
                                    <img class="line-1-4fyxtR line-1" src="@/assets/Global/Attack/Vertical line.svg"
                                        alt="Line 1">
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
                                <div class="frame-35-Z6GGxj">
                                    <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1-Ip5M10" :src="logoImage">
                                </div>
                                <div class="frame-2-Z6GGxj" style="display: flex;flex-direction: column;align-items: baseline;">
                                    <div class="orcs-Ip5M10">{{ factionType }}</div>
                                    <div style="display: flex;">
                                        <div class="wormfood-Cbc0iH wormfood">{{ title }}</div>
                                        <div class="arthur8071-Cbc0iH">{{ name }}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="width: 100vw;position: relative;display: flex;justify-content: space-around;">
                                <div class="group-12-Z6GGxj">
                                    <div class="rectangle-4-8WDrgx" id="totalExp"></div>
                                    <div class="rectangle-5-8WDrgx" id="currentExp"
                                        :style="{ width: currentExpWidth() + 'px', backgroundColor: expBarColor }">
                                    </div>
                                    <div class="frame-10-8WDrgx">
                                        <div class="wormfood-CUprVx wormfood roboto-medium-white-9px">
                                            {{ title }}
                                        </div>
                                        <img class="vector-CUprVx vector" src="@/assets/Global/Attack/Vector.svg"
                                            alt="Vector">
                                    </div>
                                    <div class="level-120-8WDrgx">
                                        <span class="span0-JXIfOE">Level {{ level }}</span>
                                        <span class="span1-JXIfOE roboto-medium-white-9px">/20</span>
                                    </div>
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
                                                <img class="gold-5ouUfJ gold" src="@/assets/Global/Common/Gold.png"
                                                    alt="Gold">
                                            </div>
                                        </div>
                                        <div class="x63631-k-1bAkpj">+{{ incomePerHour }}</div>
                                        <img class="vector-1bAkpj vector" src="@/assets/Global/Attack/info.svg"
                                            alt="Vector"
                                            title="War income represents the passive income gained after a battle."
                                            @click="showTitle">
                                    </div>
                                    <img class="line-1-4fyxtR line-1" src="@/assets/Global/Attack/Vertical line.svg"
                                        alt="Line 1" style="position: relative;left: 125px;top: 6px;">
                                </div>
                            </div>
                        </div>
                        <div
                            style="position: relative;top: 35vh;width: 90vw;border: 1px solid transparent;left: 5vw;border-radius: 50%; overflow: hidden;">
                            <img class="orc-button-Z6GGxj" :src="buttonImage" alt="Orc button" @click="gainGold">
                            <img class="ork-ladder-20-logo-Z6GGxj" :src="avatarImage" alt="Orc Ladder 20 logo"
                                @click="gainGold">
                        </div>
                        <GoldBar v-if="currentGold" :currentGold="currentGold" />
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
                    </div>
                    <Footer :selected="'Attack'" />
                </div>
            </div>
        </div>
    </div>
    <div v-for="(text, index) in floatingTexts" :key="index" :id="index + '-float-text'"
        :style="{ top: text.y + 'px', left: text.x + 'px' }" @click="gainGold" class="floating-text">
        +{{ this.formattedGold(increaseAmount) }} <img class="" src="@/assets/Global/Common/Gold.png" alt="Gold">
    </div>
    <SkillBuff v-show="isSkillBuffVisible" @close="toggleSkillBuffDiv" :currentGold="currentGold"
        :currentTon="currentTon" v-if="currentGold && currentTon" />
</template>

<script>
import '@/styles/attack.css';
import Footer from '@/components/Footer.vue';
import GoldBar from '@/components/GoldBar.vue';
import SkillBuff from '@/components/SkillBuff.vue';
import { useToast } from "vue-toastification";
import axios from 'axios';

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
            currentTon: null
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
                const response = await axios.get(process.env.VUE_APP_API_URL + '/user', {
                    params: { userId: this.userId }
                });

                const { name, incomePerHour, increaseAmount, factionType, currentGold, level, exp, currentMana, totalMana, title, currentTon } = response.data;
                this.name = name;
                this.incomePerHour = incomePerHour;
                this.increaseAmount = increaseAmount;
                this.factionType = this.formatFactionType(factionType);
                this.currentGold = currentGold;
                this.level = level;
                this.avatarImage = this.getAvatarImage(factionType, level);
                this.exp = exp;
                this.currentMana = currentMana;
                this.totalMana = totalMana;
                this.title = title;
                this.currentTon = currentTon;
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
            const rectangle4 = document.querySelector('.rectangle-4-8WDrgx');
            const width = rectangle4?.offsetWidth;

            return (this.exp / 100) * width;
        },
        getAvatarImage(type, level) {
            const images = {
                ANGEL: {
                    1: "20.guide angel",
                    2: "19. Astral Deva",
                    3: "18.Healing Angel",
                    4: "17. Warrior Angel",
                    5: "16. Messenger Angel",
                    6: "15. Guardian Angel",
                    7: "14. Grigori",
                    8: "13. Ophanim",
                    9: "12. Bene Elohim",
                    10: "11. Elohim",
                    11: "10. Malakim",
                    12: "9. Angel",
                    13: "8. Archangel",
                    14: "7. Principalitie",
                    15: "6. Power",
                    16: "5. Virtue",
                    17: "4. Dominion",
                    18: "3. Throne",
                    19: "2. Cherubim",
                    20: "1. Archseraphim"
                },
                DEMON: {
                    1: "20. Imp",
                    2: "19. Spinagon",
                    3: "18. Nupperibo",
                    4: "17. Lemure",
                    5: "16. Rutterkin",
                    6: "15. Manes",
                    7: "14. Dretch",
                    8: "13. Chasme",
                    9: "12. Barlgura",
                    10: "11. Nalfeshnee",
                    11: "10. Glabrezu",
                    12: "9. Hezrou",
                    13: "8. Vrock",
                    14: "7. Marilith",
                    15: "6. Succubus",
                    16: "5. Balor",
                    17: "4. Pit Fiend",
                    18: "3. Overlord",
                    19: "2. Archdemon",
                    20: "1. Demon Lord"
                },
                ELF: {
                    1: "20. Initiate",
                    2: "19. Scout",
                    3: "18. Ranger",
                    4: "17. Elder",
                    5: "16. Loremaster",
                    6: "15. Shadow Walker",
                    7: "14. Bladesinger",
                    8: "13. Spellweaver",
                    9: "12. Sun Dame",
                    10: "11. Moon Priestess",
                    11: "10. Ranger Captain",
                    12: "9. Sentinel of the Stars",
                    13: "8. Warden of the Wilds",
                    14: "7. Keeper of the Grove",
                    15: "6. Guardian of the Glades",
                    16: "5. Mistress of Lore",
                    17: "4. Lady of the Forest",
                    18: "3. Eldest",
                    19: "2. Archdruid",
                    20: "1. High Queen"
                },
                HUMAN: {
                    1: "20. Peasant",
                    2: "19. Archer",
                    3: "18. Footman",
                    4: "17. Squire",
                    5: "16. High Priest",
                    6: "15. Master Mage",
                    7: "14. Sergeant",
                    8: "13. Lieutenant",
                    9: "12. Captain",
                    10: "11. Knight",
                    11: "10. Knight Commander",
                    12: "9. Baron",
                    13: "8. Viscount",
                    14: "7. Count",
                    15: "6. Marquess",
                    16: "5. Duke",
                    17: "4. Paladin",
                    18: "3. Archmage",
                    19: "2. High King",
                    20: "1. Emperor"
                },
                ORC: {
                    1: "20. Worm Food",
                    2: "19. Beast Herder",
                    3: "18. Goblin",
                    4: "17. Slave",
                    5: "16. Peon",
                    6: "15. Grunt",
                    7: "14. Warrior",
                    8: "13. Marauder",
                    9: "12. Ravager",
                    10: "11. Berserker",
                    11: "10. Brute",
                    12: "9. Raider",
                    13: "8. Slayer",
                    14: "7. Blood Guard",
                    15: "6. Chieftain",
                    16: "5. Warmaster",
                    17: "4. Warlord",
                    18: "3. High Warlord",
                    19: "2. Warchief",
                    20: "1. Great Warchief"
                },
                UNDEAD: {
                    1: "20. Lost Soul",
                    2: "19. Rotting Corpse",
                    3: "18. Zombie",
                    4: "17. Ghast",
                    5: "16. Zombie Brute",
                    6: "15. Skeleton Archer",
                    7: "14. Skeleton Warrior",
                    8: "13. Spirit",
                    9: "12. Shade",
                    10: "11. Bone Golem",
                    11: "10. Skeleton Lord",
                    12: "9. Abomination",
                    13: "8. Wraith",
                    14: "7. Revenant",
                    15: "6. Soul Reaper",
                    16: "5. Wight Lord",
                    17: "4. Banshee Queen",
                    18: "3. Death Knight",
                    19: "2. Dread Necromancer",
                    20: "1. Lich King"
                }
            }

            return images[type][level] + ".png";
        }
    },
    async mounted() {
        await this.getUserData();
        await this.loadImages();
        this.getBottomGradientColors();
        this.getTopGradientColors();
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