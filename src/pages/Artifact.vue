<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader />
                <GoldBar />
                <BaseHeroBar :selected="'Artifact'" />
                <div class="hero-equp-select-lvJUvn">
                    <FactionProperty v-for="item in artifactList" :key="item.id" :property="item"
                        @click="openPopup(item)" />
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

import GavelOfWarGod from '@/assets/Orc images/Orc Artifact/The Gavel of War God.png';
import BloodChaliceOfMauller from '@/assets/Orc images/Orc Artifact/The Blood Chalice of Mauller.png';
import BannerOfTheWars from '@/assets/Orc images/Orc Artifact/The Banner of the Wars.png';
import MaskOfTheBeastlord from '@/assets/Orc images/Orc Artifact/The Mask of the Beastlord.png';
import HeartOfTheVolcano from '@/assets/Orc images/Orc Artifact/The Heart of the Volcano.png';

export default {
    name: 'Artifact',
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
            artifactList: [
                {
                    id: "1",
                    name: "The Gavel of War God",
                    description: "A fortified camp that increases raid income.",
                    cost: 156920,
                    gains: 0,
                    level: 1,
                    costMultiplier: 1.5,
                    imageUrl: GavelOfWarGod,
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "The Blood Chalice of Mauller",
                    description: "A place to craft powerful weapons and armor.",
                    cost: 156.920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: BloodChaliceOfMauller,
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "The Banner of the Wars",
                    description: "A mystical lodge that enhances magical abilities.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: BannerOfTheWars,
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "The Mask of the Beastlord",
                    description: "A place to train and enhance beasts for battle.",
                    cost: 1569.20,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: MaskOfTheBeastlord,
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "The Heart of the Volcano",
                    description: "The center of the orc's power, enhancing leadership.",
                    cost: 156920,
                    gains: 0,
                    level: 0,
                    costMultiplier: 1.5,
                    imageUrl: HeartOfTheVolcano,
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