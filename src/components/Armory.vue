<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader />
                <GoldBar />
                <BaseHeroBar :selected="'Armory'" />
                <div class="hero-equp-select-lvJUvn">
                    <FactionProperty v-for="item in armoryList" :key="item.id" :property="item" />
                </div>
            </div>
            <GeneralAttackBar :selected="'Base'" />
        </div>
    </div>
</template>

<script>
import '@/styles/hero.css';
import GeneralAttackBar from "@/components/GeneralAttackBar.vue";
import BaseHeroBar from "@/components/BaseHeroBar.vue";
import GoldBar from "@/components/GoldBar.vue";
import FactionHeader from "@/components/FactionHeader.vue";
import FactionProperty from "@/components/FactionProperty.vue";

export default {
    name: 'Armory',
    components: {
        GeneralAttackBar,
        BaseHeroBar,
        GoldBar,
        FactionHeader,
        FactionProperty
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
                    imageUrl: "/styles/css/hero/img/warcamp.png",
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
                    imageUrl: "/styles/css/hero/img/forge.png",
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
                    imageUrl: "/styles/css/hero/img/spirit-lodge.png",
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
                    imageUrl: "/styles/css/hero/img/bestiary.png",
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
                    imageUrl: "/styles/css/hero/img/warcamp.png",
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
                    imageUrl: "/styles/css/hero/img/serrated-blades@2x.png",
                    raidIncomePerHour: 0
                }
            ]
        };
    },
    methods: {
    },
};
</script>