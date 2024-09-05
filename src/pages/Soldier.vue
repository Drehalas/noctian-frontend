<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader />
                <GoldBar />
                <BaseHeroBar :selected="'Soldier'" />
                <div class="hero-equp-select-lvJUvn">
                    <FactionProperty v-for="item in soldierList" :key="item.id" :property="item" @click="openPopup(item)"/>
                </div>
            </div>
            <Footer :selected="'Base'" />
        </div>
    </div>
    <FactionPropertyPopup v-if="showPopup" :item="selectedItem" @close="closePopup"/>
</template>

<script>
import '@/styles/hero.css';
import Footer from "@/components/Footer.vue";
import BaseHeroBar from "@/components/BaseHeroBar.vue";
import GoldBar from "@/components/GoldBar.vue";
import FactionHeader from "@/components/FactionHeader.vue";
import FactionProperty from "@/components/FactionProperty.vue";
import FactionPropertyPopup from "@/components/FactionPropertyPopup.vue";

import KoboldSlave from '@/assets/Orc images/Orc Soldier/kobold.png';
import GoblinArcher from '@/assets/Orc images/Orc Soldier/goblin archer.png';
import OrcYoungling from '@/assets/Orc images/Orc Soldier/orc youngling.png';
import WolfPack from '@/assets/Orc images/Orc Soldier/wolf pack.png';
import OrcGrunt from '@/assets/Orc images/Orc Soldier/orc grunt.png';
import OrcSpearman from '@/assets/Orc images/Orc Soldier/orc spearman.png';
import OrcAxeman from '@/assets/Orc images/Orc Soldier/Orc Axeman.png';
import OrcHunter from '@/assets/Orc images/Orc Soldier/Orc Hunter.png';
import OrcShaman from '@/assets/Orc images/Orc Soldier/Orc Shaman.png';
import OrcWarlock from '@/assets/Orc images/Orc Soldier/Orc Warlock.png';
import Troll from '@/assets/Orc images/Orc Soldier/Troll.png';
import Harpie from '@/assets/Orc images/Orc Soldier/Harpie.png';
import SpiderSwarm from '@/assets/Orc images/Orc Soldier/Spider Swarm.png';
import StoneGiant from '@/assets/Orc images/Orc Soldier/Stone Giant.png';
import OrcChampion from '@/assets/Orc images/Orc Soldier/Orc Champion.png';
import OrcWarlord from '@/assets/Orc images/Orc Soldier/Orc Warlord.png';
import Direwolve from '@/assets/Orc images/Orc Soldier/Direwolve.png';
import BlackOrcWarrior from '@/assets/Orc images/Orc Soldier/Black Orc Warrior.png';
import OrcRaider from '@/assets/Orc images/Orc Soldier/Orc Raider.png';
import WarlockShaman from '@/assets/Orc images/Orc Soldier/Warlock Shaman.png';
import Necromancer from '@/assets/Orc images/Orc Soldier/Necromancer.png';
import DragonRider from '@/assets/Orc images/Orc Soldier/Dragon Rider.png';
import HellLord from '@/assets/Orc images/Orc Soldier/Hell Lord.png';

export default {
    name: 'Soldier',
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
            soldierList: [
                {
                    id: "1",
                    name: "Kobold Slave",
                    description: " Weakest unit, used as meat shields.",
                    cost: 506,
                    gains: 30,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: KoboldSlave,
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "Goblin Archer",
                    description: " Weak and fast ranged units.",
                    cost: 1341,
                    gains: 80,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: GoblinArcher,
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "Orc Youngling",
                    description: " Low damage melee units.",
                    cost: 3553,
                    gains: 211,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcYoungling,
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "Wolf Pack",
                    description: " Aggressive beasts, fast with light damage.",
                    cost: 9416,
                    gains: 558,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: WolfPack,
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "Orc Grunt",
                    description: " Standard melee units.",
                    cost: 24954,
                    gains: 1479,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcGrunt,
                    raidIncomePerHour: 0
                },
                {
                    id: "6",
                    name: "Orc Spearman",
                    description: " Effective against infantry.",
                    cost: 66127,
                    gains: 3921,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcSpearman,
                    raidIncomePerHour: 0
                },
                {
                    id: "7",
                    name: "Orc Axeman",
                    description: " High damage melee units.",
                    cost: 175237,
                    gains: 10390,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcAxeman,
                    raidIncomePerHour: 0
                },
                {
                    id: "8",
                    name: "Orc Hunter",
                    description: " High ranged damage.",
                    cost: 464378,
                    gains: 27532,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcHunter,
                    raidIncomePerHour: 0
                },
                {
                    id: "9",
                    name: "Orc Shaman",
                    description: " Support unit, heals and buffs.",
                    cost: 1230602,
                    gains: 72961,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcShaman,
                    raidIncomePerHour: 0
                },
                {
                    id: "10",
                    name: "Orc Warlock",
                    description: "Enhances melee weapons with serrated edges, increasing damage.",
                    cost: 3261094,
                    gains: 193346,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcWarlock,
                    raidIncomePerHour: 0
                },
                {
                    id: "11",
                    name: "Troll",
                    description: "High health and damage, slow.",
                    cost: 8641900,
                    gains: 512366,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: Troll,
                    raidIncomePerHour: 0
                },
                {
                    id: "12",
                    name: "Harpie",
                    description: " Flying unit, fast with ranged attacks.",
                    cost: 22901036,
                    gains: 1357769,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: Harpie,
                    raidIncomePerHour: 0
                },
                {
                    id: "13",
                    name: "Spider Swarm",
                    description: " Numerous weak spiders.",
                    cost: 60687745,
                    gains: 3598088,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: SpiderSwarm,
                    raidIncomePerHour: 0
                },
                {
                    id: "14",
                    name: "Stone Giant",
                    description: "High health and damage, very slow.",
                    cost: 160822526,
                    gains: 9534932,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: StoneGiant,
                    raidIncomePerHour: 0
                },
                {
                    id: "15",
                    name: "Orc Champion",
                    description: "Powerful units specializing in melee combat.",
                    cost: 426179693,
                    gains: 25267571,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcChampion,
                    raidIncomePerHour: 0
                },
                {
                    id: "16",
                    name: "Orc Warlord",
                    description: "Leaders of the army, very powerful.",
                    cost: 1129376186,
                    gains: 66959062,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcWarlord,
                    raidIncomePerHour: 0
                },
                {
                    id: "17",
                    name: "Direwolve",
                    description: "Very strong and aggressive beasts.",
                    cost: 2992846892,
                    gains: 177441515,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: Direwolve,
                    raidIncomePerHour: 0
                },
                {
                    id: "18",
                    name: "Black Orc Warrior",
                    description: "Elite melee units.",
                    cost: 7931044265,
                    gains: 470220016,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: BlackOrcWarrior,
                    raidIncomePerHour: 0
                },
                {
                    id: "19",
                    name: "Orc Raider",
                    description: "Fast and strong.",
                    cost: 21017267301,
                    gains: 1246083042,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: OrcRaider,
                    raidIncomePerHour: 0
                },
                {
                    id: "20",
                    name: "Warlock Shaman",
                    description: " Powerful spellcasters with support abilities.",
                    cost: 55695758349,
                    gains: 3302120060,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: WarlockShaman,
                    raidIncomePerHour: 0
                },
                {
                    id: "21",
                    name: "Necromancer",
                    description: "Raise and control the dead.",
                    cost: 147593759624,
                    gains: 8750618160,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: Necromancer,
                    raidIncomePerHour: 0
                },
                {
                    id: "22",
                    name: "Dragon Rider",
                    description: "Very powerful flying unit.",
                    cost: 391123463004,
                    gains: 23189138123,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: DragonRider,
                    raidIncomePerHour: 0
                },
                {
                    id: "23",
                    name: "HellLord",
                    description: " The strongest unit, demon-like creatures.",
                    cost: 1036477176961,
                    gains: 614512160253,
                    level: 0,
                    costMultiplier: 1.05,
                    imageUrl: HellLord,
                    raidIncomePerHour: 0
                }
            ],
            showPopup: false, 
            selectedItem: null, 
        };
    },
    methods: {
        openPopup(item) {
            this.selectedItem = item;
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
            this.selectedItem = null;
        }
    },
};
</script>