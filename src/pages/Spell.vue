<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader />
                <GoldBar />
                <BaseHeroBar :selected="'Spell'" />
                <div class="hero-equp-select-lvJUvn">
                    <FactionProperty v-for="item in spellList" :key="item.id" :property="item" @click="openPopup(item)"/>
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

import WarcryEnergy from '@/assets/Orc images/Orc Spell/Warcry Energy.png';
import GreenTide from '@/assets/Orc images/Orc Spell/Green Tide.png';
import RockLobber from '@/assets/Orc images/Orc Spell/Rock Lobber.png';
import Firestorm from '@/assets/Orc images/Orc Spell/Firestorm.png';
import BloodBoil from '@/assets/Orc images/Orc Spell/Blood Boil.png';
import IronhideAura from '@/assets/Orc images/Orc Spell/Ironhide Aura.png';
import SpiritShield from '@/assets/Orc images/Orc Spell/Spirit Shield.png';
import TrollRegeneration from '@/assets/Orc images/Orc Spell/Troll Regeneration.png';
import GroundSlam from '@/assets/Orc images/Orc Spell/Ground Slam.png';
import WarChant from '@/assets/Orc images/Orc Spell/War Chant.png';
import FeralSpeed from '@/assets/Orc images/Orc Spell/Feral Speed.png';
import BloodScent from '@/assets/Orc images/Orc Spell/Blood Scent.png';
import ShamanisticWard from '@/assets/Orc images/Orc Spell/Shamanistic Ward.png';
import CalloftheWild from '@/assets/Orc images/Orc Spell/Call of the Wild.png';
import VisionQuest from '@/assets/Orc images/Orc Spell/Vision Quest.png';
import Enfeeblement from '@/assets/Orc images/Orc Spell/Enfeeblement.png';
import Vulnerability from '@/assets/Orc images/Orc Spell/Vulnerability.png';
import Confusion from '@/assets/Orc images/Orc Spell/Confusion.png';
import RottingTouch from '@/assets/Orc images/Orc Spell/Rotting Touch.png';
import CurseofWeakness from '@/assets/Orc images/Orc Spell/Curse of Weakness.png';
import WarGodsMight from '@/assets/Orc images/Orc Spell/War Gods Might.png';
import TheGreatWarcry from '@/assets/Orc images/Orc Spell/The Great Warcry.png';
import RupturingEarth from '@/assets/Orc images/Orc Spell/Rupturing Earth.png';
import BloodMoon from '@/assets/Orc images/Orc Spell/Blood Moon.png';
import AncestralFury from '@/assets/Orc images/Orc Spell/Ancestral Fury.png';
import BloodSacrifice from '@/assets/Orc images/Orc Spell/Blood Sacrifice.png';
import SummonGreaterDemon from '@/assets/Orc images/Orc Spell/Summon Greater Demon.png';

export default {
    name: 'Spell',
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
            spellList: [
                {
                    id: "1",
                    name: "Warcry Energy",
                    description: "A channeled spell that gradually increases the damage and attack speed of nearby Orc units",
                    cost: 1139,
                    gains: 80,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: WarcryEnergy,
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "Green Tide",
                    description: "Summons a horde of lesser Orcs to swarm and overwhelm the enemy",
                    cost: 2164,
                    gains: 152,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: GreenTide,
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "Rock Lobber",
                    description: "Hurls a massive boulder at a target location, dealing heavy damage and knocking back enemies",
                    cost: 4112,
                    gains: 289,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: RockLobber,
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "Firestorm",
                    description: "Calls down a rain of flaming meteors, setting the battlefield ablaze and causing panic",
                    cost: 7812,
                    gains: 549,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: Firestorm,
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "Blood Boil",
                    description: "Infects enemy units with a rage-inducing disease, causing them to attack friend and foe alike",
                    cost: 14844,
                    gains: 1043,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: BloodBoil,
                    raidIncomePerHour: 0
                },
                {
                    id: "6",
                    name: "Ironhide Aura",
                    description: "Grants nearby Orc units increased armor and damage resistance",
                    cost: 28203,
                    gains: 1981,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: IronhideAura,
                    raidIncomePerHour: 0
                },
                {
                    id: "7",
                    name: "Spirit Shield",
                    description: "Creates a protective barrier that absorbs incoming damage for a short duration",
                    cost: 53585,
                    gains: 3764,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: SpiritShield,
                    raidIncomePerHour: 0
                },
                {
                    id: "8",
                    name: "Troll Regeneration",
                    description: "Enhances the natural regenerative abilities of Orc Trolls",
                    cost: 101812,
                    gains: 7151,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: TrollRegeneration,
                    raidIncomePerHour: 0
                },
                {
                    id: "9",
                    name: "Ground Slam",
                    description: "Creates a shockwave that stuns and damages nearby enemies",
                    cost: 193443,
                    gains: 13587,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: GroundSlam,
                    raidIncomePerHour: 0
                },
                {
                    id: "10",
                    name: "War Chant",
                    description: "Inspires nearby Orc units, increasing their morale and resistance to fear",
                    cost: 367541,
                    gains: 25815,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: WarChant,
                    raidIncomePerHour: 0
                },
                {
                    id: "11",
                    name: "Feral Speed",
                    description: "Increases the movement speed of Orc units for a short duration",
                    cost: 698328,
                    gains: 49049,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: FeralSpeed,
                    raidIncomePerHour: 0
                },
                {
                    id: "12",
                    name: "Blood Scent",
                    description: "Reveals the location of hidden enemies within a certain radius",
                    cost: 1326824,
                    gains: 93192,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: BloodScent,
                    raidIncomePerHour: 0
                },
                {
                    id: "13",
                    name: "Shamanistic Ward",
                    description: "Protects friendly units from harmful spells and effects",
                    cost: 2520966,
                    gains: 177065,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: ShamanisticWard,
                    raidIncomePerHour: 0
                },
                {
                    id: "14",
                    name: "Call of the Wild",
                    description: "Summons wild beasts to fight alongside the Orcs",
                    cost: 4789835,
                    gains: 336424,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: CalloftheWild,
                    raidIncomePerHour: 0
                },
                {
                    id: "15",
                    name: "Vision Quest",
                    description: "Grants the caster temporary vision of the entire battlefield",
                    cost: 9100686,
                    gains: 639205,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: VisionQuest,
                    raidIncomePerHour: 0
                },
                {
                    id: "16",
                    name: "Enfeeblement",
                    description: "Weakens enemy units, reducing their attack and defense",
                    cost: 17291304,
                    gains: 1214490,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: Enfeeblement,
                    raidIncomePerHour: 0
                },
                {
                    id: "17",
                    name: "Vulnerability",
                    description: "Increases the damage taken by enemy units",
                    cost: 32853477,
                    gains: 2307531,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: Vulnerability,
                    raidIncomePerHour: 0
                },
                {
                    id: "18",
                    name: "Confusion",
                    description: "Causes enemy units to attack randomly, including their own allies",
                    cost: 62421606,
                    gains: 4384309,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: Confusion,
                    raidIncomePerHour: 0
                },
                {
                    id: "19",
                    name: "Rotting Touch",
                    description: "Inflicts a disease on enemy units, causing them to slowly decay and weaken",
                    cost: 118601052,
                    gains: 8330188,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: RottingTouch,
                    raidIncomePerHour: 0
                },
                {
                    id: "20",
                    name: "Curse of Weakness",
                    description: "Curses enemy units, reducing their strength and agility",
                    cost: 225341999,
                    gains: 15827357,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: CurseofWeakness,
                    raidIncomePerHour: 0
                },
                {
                    id: "21",
                    name: "War God's Might",
                    description: "Summons a powerful avatar of Gork (or Mork) to wreak havoc on the battlefield",
                    cost: 428149798,
                    gains: 30071979,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: WarGodsMight,
                    raidIncomePerHour: 0
                },
                {
                    id: "22",
                    name: "The Great Warcry",
                    description: "A massive, channeled spell that significantly increases the power and size of the entire Orc army",
                    cost: 813484616,
                    gains: 57136760,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: TheGreatWarcry,
                    raidIncomePerHour: 0
                },
                {
                    id: "23",
                    name: "Rupturing Earth",
                    description: "Creates fissures in the earth that erupt with molten rock, dealing damage and creating obstacles",
                    cost: 1545620770,
                    gains: 108559843,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: RupturingEarth,
                    raidIncomePerHour: 0
                },
                {
                    id: "24",
                    name: "Blood Moon",
                    description: "Turns the sky blood red, granting Orc units increased strength and ferocity at night",
                    cost: 2936679462,
                    gains: 206263702,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: BloodMoon,
                    raidIncomePerHour: 0
                },
                {
                    id: "25",
                    name: "Ancestral Fury",
                    description: "Calls upon the spirits of Orc ancestors to possess and empower Orc units",
                    cost: 5579690978,
                    gains: 391901034,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: AncestralFury,
                    raidIncomePerHour: 0
                },
                {
                    id: "26",
                    name: "Blood Sacrifice",
                    description: "Sacrifices a portion of the Orc army to temporarily empower the remaining units",
                    cost: 10601412859,
                    gains: 744611966,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: BloodSacrifice,
                    raidIncomePerHour: 0
                },
                {
                    id: "27",
                    name: "Summon Greater Demon",
                    description: "Summons a powerful demon to fight alongside the Orcs, but at a great cost",
                    cost: 20142684432,
                    gains: 1414762734,
                    level: 0,
                    costMultiplier: 1.3,
                    imageUrl: SummonGreaterDemon,
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