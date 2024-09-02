<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader />
                <GoldBar />
                <BaseHeroBar :selected="'Hero'" />
                <div class="hero-equp-select-lvJUvn">
                    <FactionProperty v-for="item in heroList" :key="item.id" :property="item" @click="openPopup(item)"/>
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

import SpiritShield from '@/assets/Hero/Spirit Shield.png';
import RangedWeapon from '@/assets/Hero/Ranged Weapon.png';
import OffHand from '@/assets/Hero/Off-hand.png';
import ChestArmor from '@/assets/Hero/Chest Armor.png';
import Pants from '@/assets/Hero/Pants.png';
import Gloves from '@/assets/Hero/Gloves.png';

export default {
    name: 'Hero',
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
            heroList: [
                {
                    id: "1",
                    name: "Melee Weapon",
                    description: "A well-balanced weapon made of quality steel",
                    cost: 156920,
                    gains: 0,
                    level: 1,
                    costMultiplier: 1.5,
                    imageUrl: SpiritShield,
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "Ranged Weapon",
                    description: "A place to craft powerful weapons and armor.",
                    cost: 156.920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: RangedWeapon,
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "Off-Hand",
                    description: "A mystical lodge that enhances magical abilities.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: OffHand,
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "Chest Armor",
                    description: "A place to train and enhance beasts for battle.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: ChestArmor,
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "Pants",
                    description: "The center of the orc's power, enhancing leadership.",
                    cost: 156920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: Pants,
                    raidIncomePerHour: 0
                },
                {
                    id: "6",
                    name: "Gloves",
                    description: "Enhances melee weapons with serrated edges, increasing damage.",
                    cost: 156920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: Gloves,
                    raidIncomePerHour: 0
                }
            ],
            showPopup: false, 
            selectedItem: null, 
        };
    },
    methods: {
        upgradeHero(heroId) {
            console.log(`Upgrading hero with ID: ${heroId}`);
        },
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