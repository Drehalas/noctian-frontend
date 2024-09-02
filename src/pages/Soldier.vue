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
                    description: "A fortified camp that increases raid income.",
                    cost: 156920,
                    gains: 0,
                    level: 1,
                    costMultiplier: 1.5,
                    imageUrl: KoboldSlave,
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "Goblin Archer",
                    description: "A place to craft powerful weapons and armor.",
                    cost: 156.920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: GoblinArcher,
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "Orc Youngling",
                    description: "A mystical lodge that enhances magical abilities.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: OrcYoungling,
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "Wolf Pack",
                    description: "A place to train and enhance beasts for battle.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: WolfPack,
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "Orc Grunt",
                    description: "The center of the orc's power, enhancing leadership.",
                    cost: 156920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: OrcGrunt,
                    raidIncomePerHour: 0
                },
                {
                    id: "6",
                    name: "Orc Spearman",
                    description: "Enhances melee weapons with serrated edges, increasing damage.",
                    cost: 156920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: OrcSpearman,
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