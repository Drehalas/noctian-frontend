<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader />
                <div class="page-container">
                    <GoldBar />
                    <BaseHeroBar :selected="'Spell'" />
                    <div class="hero-equp-select-lvJUvn">
                        <FactionProperty v-for="item in spellList" :key="item.id" :property="item"
                            @click="openPopup(item)" />
                    </div>
                </div>
            </div>
            <Footer :selected="'Base'" />
        </div>
    </div>
    <FactionPropertyPopup v-if="showPopup" :item="selectedItem" @close="closePopup" />
</template>

<script>
import '@/styles/hero.css';
import Footer from "@/components/Footer.vue";
import BaseHeroBar from "@/components/BaseHeroBar.vue";
import GoldBar from "@/components/GoldBar.vue";
import FactionHeader from "@/components/FactionHeader.vue";
import FactionProperty from "@/components/FactionProperty.vue";
import FactionPropertyPopup from "@/components/FactionPropertyPopup.vue";

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
                    imageUrl: "Warcry Energy.png",
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
                    imageUrl: "Green Tide.png",
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
                    imageUrl: "Rock Lobber.png",
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
                    imageUrl: "Firestorm.png",
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
                    imageUrl: "Blood Boil.png",
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
                    imageUrl: "Ironhide Aura.png",
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
                    imageUrl: "Spirit Shield.png",
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
                    imageUrl: "Troll Regeneration.png",
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
                    imageUrl: "Ground Slam.png",
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
                    imageUrl: "War Chant.png",
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
                    imageUrl: "Feral Speed.png",
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
                    imageUrl: "Blood Scent.png",
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
                    imageUrl: "Shamanistic Ward.png",
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
                    imageUrl: "Call of the Wild.png",
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
                    imageUrl: "Vision Quest.png",
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
                    imageUrl: "Enfeeblement.png",
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
                    imageUrl: "Vulnerability.png",
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
                    imageUrl: "Confusion.png",
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
                    imageUrl: "Rotting Touch.png",
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
                    imageUrl: "Curse of Weakness.png",
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
                    imageUrl: "War Gods Might.png",
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
                    imageUrl: "The Great Warcry.png",
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
                    imageUrl: "Rupturing Earth.png",
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
                    imageUrl: "Blood Moon.png",
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
                    imageUrl: "Ancestral Fury.png",
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
                    imageUrl: "Blood Sacrifice.png",
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
                    imageUrl: "Summon Greater Demon.png",
                    raidIncomePerHour: 0
                }
            ],
            showPopup: false,
            selectedItem: null,
            factionType: null
        };
    },
    async created() {
        this.getFactionType();
        await this.loadImages();
        console.clear();
    },
    methods: {
        openPopup(item) {
            this.selectedItem = item;
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
            this.selectedItem = null;
        },
        getFactionType() {
            this.factionType = "Orc";
        },
        async loadImages() {
            for (let spell of this.spellList) {
                spell.imageUrl = (await import(`@/assets/${this.factionType} images/${this.factionType} Spell/${spell.imageUrl}`)).default;
            }
        },
    },
};
</script>