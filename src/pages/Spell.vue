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
                    description: "A fortified camp that increases raid income.",
                    cost: 156920,
                    gains: 0,
                    level: 1,
                    costMultiplier: 1.5,
                    imageUrl: WarcryEnergy,
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "Green Tide",
                    description: "A place to craft powerful weapons and armor.",
                    cost: 156.920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: GreenTide,
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "Rock Lobber",
                    description: "A mystical lodge that enhances magical abilities.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: RockLobber,
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "Firestorm",
                    description: "A place to train and enhance beasts for battle.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: Firestorm,
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "Blood Boil",
                    description: "The center of the orc's power, enhancing leadership.",
                    cost: 156920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: BloodBoil,
                    raidIncomePerHour: 0
                },
                {
                    id: "6",
                    name: "Ironhide Aura",
                    description: "Enhances melee weapons with serrated edges, increasing damage.",
                    cost: 156920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: IronhideAura,
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