<template>
    <div>
        <transition name="slide-up">
            <div class="orc-skill-u38-buff screen ">
                <div class="frame-30-QHYqVR">
                    <div class="rectangle-3-YDVDeA"></div>
                    <div class="group-14-YDVDeA">
                        <div class="rectangle-2-28LpMs"></div>
                    </div>
                    <div class="rectangle-1-YDVDeA"></div>
                    <div class="frame-10-YDVDeA">
                        <div class="group-9-PMa95H group-9">
                            <div class="group-8-ogQsnh group-8">
                                <img class="pngtreeglossy-golden-coin-icon_6866281-1-fAllUh"
                                    src="@/assets/Global/Common/Gold.png"
                                    alt="Pngtreeglossy golden coin icon_6866281 1">
                            </div>
                        </div>
                        <h1 class="title-PMa95H" style="font-size: 40px;" v-if="currentGold">{{ currentGold }}</h1>
                    </div>
                    <div class="frame-11-YDVDeA">
                        <div class="group-9-od4OWG group-9">
                            <div class="group-8-AvdaVK group-8">
                                <img class="ton-logo-rdGx6S ton-logo" src="@/assets/Buff/Ton Logo.png" alt="Ton Logo">
                            </div>
                        </div>
                        <div class="x801-od4OWG" style="font-size: 40px;" v-if="currentTon">{{ currentTon }}</div>
                    </div>
                    <div class="group-28-YDVDeA">
                        <div class="skills-THK8T8 roboto-normal-white-20px" style="font-size: 20px !important;">Skills
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="370" height="4" viewBox="0 0 370 4" fill="none"
                            style="top: 20px;position: relative;">
                            <path opacity="0.4" d="M2 2H368" stroke="white" stroke-width="4" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div class="group-29-YDVDeA">
                        <div class="potion-vBOoVd roboto-normal-white-20px" style="font-size: 20px !important;">Potion
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="370" height="4" viewBox="0 0 370 4" fill="none"
                            style="top: 20px;position: relative;">
                            <path opacity="0.4" d="M2 2H368" stroke="white" stroke-width="4" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div class="group-30-YDVDeA">
                        <div class="items-dn1v0N roboto-normal-white-20px" style="font-size: 20px !important;">Items
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="370" height="4" viewBox="0 0 370 4" fill="none"
                            style="top: 20px;position: relative;">
                            <path opacity="0.4" d="M2 2H368" stroke="white" stroke-width="4" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div class="group-31-YDVDeA">
                        <div class="spells-dzXnyo roboto-normal-white-20px" style="font-size: 20px !important;">Spells
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="370" height="4" viewBox="0 0 370 4" fill="none"
                            style="top: 20px;position: relative;">
                            <path opacity="0.4" d="M2 2H368" stroke="white" stroke-width="4" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div class="skills-selection-YDVDeA">
                        <div v-for="(skill, index) in skills" :key="index" class="property-61-BxVpmb property-61"
                            @click="openPopup(skill)">
                            <div class="group-18">
                                <div class="rectangle-11"></div>
                                <div class="frame-22-K1R0Nx frame-22">
                                    <div class="lvl-0 roboto-semi-bold-white-9px">lvl {{ skill.level }}</div>
                                    <div class="frame-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="25" viewBox="0 0 2 25"
                                            fill="none">
                                            <path d="M0.894409 0.588623L0.894408 24.9578" stroke="white"
                                                stroke-opacity="0.2" stroke-width="0.3" />
                                        </svg>
                                        <div class="group-9-KkCCdX group-9">
                                            <img class="gold" :src="skill.iconSrc" :alt="skill.iconAlt" />
                                        </div>
                                        <div class="x15692-k roboto-semi-bold-white-11px">
                                            {{ skill.cost }}
                                        </div>
                                    </div>
                                </div>
                                <div class="frame-21-K1R0Nx frame-21">
                                    <div class="multi-attack-6ErPOi roboto-normal-white-9px">
                                        {{ skill.name }}
                                    </div>
                                    <div class="frame-20-6ErPOi frame-20">
                                        <div class="attack-6ZfXec roboto-medium-white-7px" style="font-size: 7px;">
                                            {{ skill.info }}
                                        </div>
                                        <div class="frame-19">
                                            <div class="x1 roboto-semi-bold-white-8-2px">{{ skill.gains }}</div>
                                        </div>
                                    </div>
                                </div>
                                <img class="multi-attack-K1R0Nx" :src="skill.imageUrl" :alt="skill.imageAlt" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="1" viewBox="0 0 180 1"
                                    fill="none" style="position: relative; top: 55px;">
                                    <path d="M0 0.487244H180" stroke="white" stroke-opacity="0.2" stroke-width="0.3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="potion-selection-YDVDeA potion-selection">
                        <div class="property-61-BxVpmb property-61" v-for="(potion, index) in potions" :key="index"
                            @click="openPopup(potion)">
                            <div class="group-18">
                                <div class="rectangle-11"></div>
                                <div class="frame-22-K1R0Nx frame-22">
                                    <div class="lvl-0 roboto-semi-bold-white-9px">
                                        {{ potion.currentPotions }} / {{ potion.totalPotions }}</div>
                                    <div class="frame-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="25" viewBox="0 0 2 25"
                                            fill="none">
                                            <path d="M0.894409 0.588623L0.894408 24.9578" stroke="white"
                                                stroke-opacity="0.2" stroke-width="0.3" />
                                        </svg>
                                        <div class="x15692-k roboto-semi-bold-white-11px">Cooldown: 00:00</div>
                                    </div>
                                </div>
                                <div class="frame-21-K1R0Nx frame-21">
                                    <div class="multi-attack-6ErPOi roboto-normal-white-9px" style="top:15px">
                                        Mana Potion
                                    </div>
                                </div>
                                <img class="multi-attack-K1R0Nx" src="@/assets/Buff/Mana Potion.png" alt="Mana Potion">
                                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="1" viewBox="0 0 180 1"
                                    fill="none" style="position: relative;top: 55px;">
                                    <path d="M0 0.487244H180" stroke="white" stroke-opacity="0.2" stroke-width="0.3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="item-select-YDVDeA">
                        <div class="property-61-BxVpmb property-61" v-for="(item, index) in items" :key="index"
                            @click="item.cooldown ? null : openPopup(item)">
                            <div class="cooldown" v-if="item.cooldown">
                                <div>Currently not active please wait</div>
                                <div style="font-size: 30px">
                                    {{ formattedCooldowns[index] }}
                                </div>
                            </div>
                            <div class="group-18">
                                <div class="rectangle-11"></div>
                                <div class="frame-22-K1R0Nx frame-22">
                                    <div class="lvl-0 roboto-semi-bold-white-9px">lvl {{ item.level }}</div>
                                    <div class="frame-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="25" viewBox="0 0 2 25"
                                            fill="none">
                                            <path d="M0.894409 0.588623L0.894408 24.9578" stroke="white"
                                                stroke-opacity="0.2" stroke-width="0.3" />
                                        </svg>
                                        <div class="group-9-KkCCdX group-9">
                                            <img class="gold" src="@/assets/Buff/Ton Logo.png" alt="Ton Logo">
                                        </div>
                                        <div class="x15692-k roboto-semi-bold-white-11px">{{ item.cost }} TON</div>
                                    </div>
                                </div>
                                <div class="frame-21-K1R0Nx frame-21">
                                    <div class="multi-attack-6ErPOi roboto-normal-white-9px">
                                        {{ item.name }}
                                    </div>
                                    <div class="frame-20-6ErPOi frame-20">
                                        <div class="attack-6ZfXec roboto-medium-white-7px" style="font-size: 7px;">
                                            {{ item.info }}</div>
                                        <div class="frame-19">
                                            <div class="x1 roboto-semi-bold-white-8-2px">{{ item.gains }}</div>
                                        </div>
                                    </div>
                                </div>
                                <img class="multi-attack-K1R0Nx" :src="item.imageUrl" :alt="item.imageAlt" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="1" viewBox="0 0 180 1"
                                    fill="none" style="position: relative;top: 55px;">
                                    <path d="M0 0.487244H180" stroke="white" stroke-opacity="0.2" stroke-width="0.3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="potion-selection-3oCFl8 potion-selection">
                        <div class="property-61-BxVpmb property-61" v-for="(spell, index) in spells" :key="index"
                            @click="openPopup(spell)">
                            <div class="group-18">
                                <div class="rectangle-11"></div>
                                <div class="frame-22-K1R0Nx frame-22">
                                    <div class="lvl-0 roboto-semi-bold-white-9px"></div>
                                    <div class="frame-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="25" viewBox="0 0 2 25"
                                            fill="none">
                                            <path d="M0.894409 0.588623L0.894408 24.9578" stroke="white"
                                                stroke-opacity="0.2" stroke-width="0.3" />
                                        </svg>
                                        <div class="group-9-KkCCdX group-9">
                                            <img class="gold" src="@/assets/Buff/Ton Logo.png" alt="Ton Logo">
                                        </div>
                                        <div class="x15692-k roboto-semi-bold-white-11px">10 TON</div>
                                    </div>
                                </div>
                                <div class="frame-21-K1R0Nx frame-21">
                                    <div class="multi-attack-6ErPOi roboto-normal-white-9px">
                                        The Ancient's <br>Transformation Ritual
                                    </div>
                                    <div class="frame-20-6ErPOi frame-20">
                                        <div class="attack-6ZfXec roboto-medium-white-7px" style="font-size: 7px;">
                                            Faction Chance</div>
                                    </div>
                                </div>
                                <img class="multi-attack-K1R0Nx"
                                    src="@/assets/Buff/The Ancients Transformation Ritual.png"
                                    alt="The Ancients Transformation Ritual">
                                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="1" viewBox="0 0 180 1"
                                    fill="none" style="position: relative;top: 55px;">
                                    <path d="M0 0.487244H180" stroke="white" stroke-opacity="0.2" stroke-width="0.3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="close-button-YDVDeA">
                        <a @click="closeSkillBuff">
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
        </transition>
        <SkillBuffPropertyPopup v-if="showPopup" :item="selectedItem" @close="closePopup" />
    </div>
</template>

<script>
import "@/styles/skill-buff.css"
import skillBuffService from "@/services/skillBuffService";
import SkillBuffPropertyPopup from "./SkillBuffPropertyPopup.vue";

import GoldIcon from "@/assets/Global/Common/Gold.png";
import TonIcon from "@/assets/Buff/Ton Logo.png";
import MultiAttack from "@/assets/Buff/Multi Attack.png";
import ManaPool from "@/assets/Buff/Mana Pool.png";
import AttackCritChance from "@/assets/Buff/Attack Crit Chance.png";
import AttackCritIncome from "@/assets/Buff/Attack Crit Income.png";
import MagicGodsBloodPotion from "@/assets/Buff/Magic Gods Blood Potion.png";
import HerosPocketPortal from "@/assets/Buff/Heros Pocket Portal.png";
import ArmysRaidPortal from "@/assets/Buff/Armys Raid Portal.png";
import TheAncientsTransformationRitual from "@/assets/Buff/The Ancients Transformation Ritual.png";

export default {
    name: "SkillBuff",
    components: {
        SkillBuffPropertyPopup
    },
    props: {
        currentGold: {
            type: Number,
            required: true
        },
        currentTon: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            skillBuffs: [],
            loading: true,
            showPopup: false,
            selectedItem: null,
            formattedCooldowns: [],
            skills: [
                {
                    "id": "1",
                    "name": "Multi Attack",
                    "info": "Attack",
                    "description": "With more power comes more responsibility. The more you attack, the more mana you spend.",
                    "cost": 100,
                    "gains": 1,
                    "level": 0,
                    "costMultiplier": 1.5,
                    "totalSkillGain": 1,
                    "cooldown": null,
                    "refresh": null,
                    "imageUrl": MultiAttack,
                    "iconSrc": GoldIcon
                },
                {
                    "id": "2",
                    "name": "Mana Pool",
                    "info": "Mana Pool",
                    "description": "By increasing your mana pool, you can make more attacks.",
                    "cost": 100,
                    "gains": 500,
                    "level": 0,
                    "costMultiplier": 1.5,
                    "totalSkillGain": 1000,
                    "cooldown": null,
                    "refresh": null,
                    "imageUrl": ManaPool,
                    "iconSrc": GoldIcon
                },
                {
                    "id": "2",
                    "name": "Attack Crit Chance",
                    "info": "Critical Attack Chance",
                    "description": "Increase your critical strike chance to earn more loot with just one click.",
                    "cost": 200,
                    "gains": "%1",
                    "level": 0,
                    "costMultiplier": 1.5,
                    "totalSkillGain": 1000,
                    "cooldown": null,
                    "refresh": null,
                    "imageUrl": AttackCritChance,
                    "iconSrc": GoldIcon
                },
                {
                    "id": "3",
                    "name": "Attack Crit Income",
                    "info": "Critical Income",
                    "description": "You can increase the loot you get from critical attacks by increasing your critical damage.",
                    "cost": 400,
                    "gains": "%10",
                    "level": 0,
                    "costMultiplier": 1.5,
                    "totalSkillGain": 1000,
                    "cooldown": null,
                    "refresh": null,
                    "imageUrl": AttackCritIncome,
                    "iconSrc": GoldIcon
                }
            ],
            items: [
                {
                    "id": "1",
                    "name": "Magic God's Blood Potion",
                    "info": "Regeneration per second",
                    "description": "With this powerful potion, your mana pool will now regenerate faster.",
                    "cost": 0.7,
                    "gains": "1 per second",
                    "level": 0,
                    "costMultiplier": 1.5,
                    "totalSkillGain": 1,
                    "cooldown": "00:00:10",
                    "refresh": null,
                    "imageUrl": MagicGodsBloodPotion,
                    "iconSrc": TonIcon,
                    "iconAlt": "TON"
                },
                {
                    "id": "2",
                    "name": "Hero's Pocket Portal",
                    "info": "Attack income bonus",
                    "description": "Thanks to this item, you will no longer have to carry your loot. You will see that the income from your attacks will increase.",
                    "cost": 0.7,
                    "gains": "%5",
                    "level": 0,
                    "costMultiplier": 1.5,
                    "totalSkillGain": 1,
                    "cooldown": "00:01:10",
                    "refresh": null,
                    "imageUrl": HerosPocketPortal,
                    "iconSrc": TonIcon,
                    "iconAlt": "TON"
                },
                {
                    "id": "3",
                    "name": "Army's Raid Portal",
                    "info": "Raid income bonus",
                    "description": "It's one thing to raid, it's another thing for your army to carry it. With this item, you'll see your army's raid income increase.",
                    "cost": 0.7,
                    "gains": "%5",
                    "level": 0,
                    "costMultiplier": 1.5,
                    "totalSkillGain": 1,
                    "cooldown": null,
                    "refresh": null,
                    "imageUrl": ArmysRaidPortal,
                    "iconSrc": TonIcon,
                    "iconAlt": "TON"
                }
            ],
            potions: [
                {
                    "id": "1",
                    "name": "Mana Potion",
                    "info": "Daily Refresh",
                    "description": "You can refill your Mana pool by drinking the potion, but remember, you can't drink it consecutively.",
                    "totalPotions": 6,
                    "currentPotions": 5,
                    "cost": "5 / 6",
                    "costMultiplier": 1.5,
                    "totalSkillGain": 1,
                    "cooldown": null,
                    "refresh": null,
                    "imageUrl": ManaPool,
                },
            ],
            spells: [
                {
                    "id": "1",
                    "name": "The Ancient's Transformation Ritual",
                    "info": "Faction Chance",
                    "description": "This ritual can transform you completely into a creature from another faction, but the ingredients for the spell are really hard to find.",
                    "cost": "10",
                    "costMultiplier": 1.5,
                    "totalSkillGain": 1,
                    "cooldown": null,
                    "refresh": null,
                    "imageUrl": TheAncientsTransformationRitual,
                    "iconSrc": TonIcon,
                    "iconAlt": "TON"
                },
            ]
        };
    },
    created() {
        //this.fetchSkillBuffs();
    },
    methods: {
        async fetchSkillBuffs() {
            try {
                this.skillBuffs = await skillBuffService.getAll();
            } catch (error) {
                console.error("Failed to fetch skill buff data:", error);
            } finally {
                this.loading = false;
            }
        },
        closeSkillBuff() {
            this.$emit('close');
        },
        openPopup(item) {
            this.selectedItem = item;
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
            this.selectedItem = null;
        },
        startCooldown(index, cooldownTime) {
            const [hours, minutes, seconds] = cooldownTime.split(":").map(Number);
            let totalSeconds = hours * 3600 + minutes * 60 + seconds;

            const countdownInterval = setInterval(() => {
                if (totalSeconds <= 0) {
                    clearInterval(countdownInterval);
                    this.items[index].cooldown = null;
                } else {
                    totalSeconds--;

                    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
                    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
                    const s = String(totalSeconds % 60).padStart(2, "0");

                    this.formattedCooldowns[index] = `${h}:${m}:${s}`;
                }
            }, 1000);
        },
    },
    mounted() {
        this.items.forEach((item, index) => {
            if (item.cooldown) {
                this.formattedCooldowns[index] = item.cooldown;
                this.startCooldown(index, item.cooldown);
            }
        });
    },
};
</script>

<style scoped>
.skill-buff {
    padding: 20px;
}

.loading {
    font-size: 16px;
    color: #666;
}

.skill-buff-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transform: translateY(100%);
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.5s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
    transform: translateY(0);
}

.cooldown {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #fff;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #31353b95;
    border-radius: 15px;
    cursor: not-allowed
}

.cooldown>div {
    padding: 5px;
}
</style>
