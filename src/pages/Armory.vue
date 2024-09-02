<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader />
                <GoldBar />
                <BaseHeroBar :selected="'Armory'" />
                <div class="hero-equp-select-lvJUvn">
                    <FactionProperty v-for="item in armoryList" :key="item.id" :property="item" @click="openPopup(item)"/>
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

import Warcamp from '@/assets/Orc images/Orc Armory/war camp.png';
import Forge from '@/assets/Orc images/Orc Armory/forge.png';
import SpiritLodge from '@/assets/Orc images/Orc Armory/spirit lodge.png';
import Bestiary from '@/assets/Orc images/Orc Armory/bestiary.png';
import GreatHall from '@/assets/Orc images/Orc Armory/great hall.png';
import SerratedBlades from '@/assets/Orc images/Orc Armory/Serrated Blades.png';

export default {
    name: 'Armory',
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
            armoryList: [
                {
                    id: "1",
                    name: "Warcamp",
                    description: "A fortified camp that increases raid income.",
                    cost: 156920,
                    gains: 0,
                    level: 1,
                    costMultiplier: 1.5,
                    imageUrl: Warcamp,
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "Forge",
                    description: "A place to craft powerful weapons and armor.",
                    cost: 156.920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: Forge,
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "Spirit Lodge",
                    description: "A mystical lodge that enhances magical abilities.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: SpiritLodge,
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "Bestiary",
                    description: "A place to train and enhance beasts for battle.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: Bestiary,
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "Great Hall",
                    description: "The center of the orc's power, enhancing leadership.",
                    cost: 156920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: GreatHall,
                    raidIncomePerHour: 0
                },
                {
                    id: "6",
                    name: "Serrated Blades",
                    description: "Enhances melee weapons with serrated edges, increasing damage.",
                    cost: 156920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: SerratedBlades,
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