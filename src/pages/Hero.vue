<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen ">
            <div class="frame-30-zHO16R">
                <FactionHeader :factionType="factionType" v-if="factionType" />
                <div class="page-container" v-if="bottomGradientColors"
                    :style="{ background: `linear-gradient(180deg, ${bottomGradientColors.top} 0%, ${bottomGradientColors.bottom} 100%)` }">
                    <GoldBar v-if="currentGold" :currentGold="currentGold" />
                    <BaseHeroBar :selected="'Hero'" />
                    <div class="hero-equp-select-lvJUvn">
                        <FactionProperty v-for="item in heroList" :key="item.id" :property="item"
                            @click="openPopup(item)" />
                    </div>
                </div>
            </div>
            <Footer :selected="'Base'" />
        </div>
    </div>
    <FactionPropertyPopup v-if="showPopup" :item="selectedItem" @close="closePopup" :color="bottomGradientColors.bottom"/>
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
            currentGold: null,
            userId: 100,
            factionType: null,
            heroList: [
                {
                    id: "1",
                    name: "Melee Weapon",
                    description: "A well-balanced weapon made of quality steel",
                    cost: 100,
                    gains: 8,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Melee Weapon.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "2",
                    name: "Ranged Weapon",
                    description: "A precise long-range weapon crafted for accuracy",
                    cost: 150,
                    gains: 12,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ranged Weapon.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "3",
                    name: "Off-Hand",
                    description: "A versatile item held in the non-dominant hand for defense or offense",
                    cost: 225,
                    gains: 18,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Off-hand.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "4",
                    name: "Chest Armor",
                    description: "Sturdy protection for the torso, forged from durable materials",
                    cost: 338,
                    gains: 27,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Chest Armor.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "5",
                    name: "Pants",
                    description: "Flexible leg armor providing both mobility and defense",
                    cost: 506,
                    gains: 41,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Pants.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "6",
                    name: "Gloves",
                    description: "Reinforced hand protection allowing for dexterity in combat",
                    cost: 759,
                    gains: 61,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Gloves.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "7",
                    name: "Feet",
                    description: "Reliable footwear designed for stability and protection in battle",
                    cost: 1139,
                    gains: 91,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Feet.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "8",
                    name: "Belt",
                    description: "A sturdy accessory that secures armor and holds essential items",
                    cost: 1709,
                    gains: 137,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Belt.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "9",
                    name: "Bracers",
                    description: "Arm guards that deflect blows and enhance striking power",
                    cost: 2563,
                    gains: 205,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Bracers.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "10",
                    name: "Shoulder",
                    description: "Robust pauldrons that shield the upper body from attacks",
                    cost: 3844,
                    gains: 308,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Shoulder.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "11",
                    name: "Cloak",
                    description: "A flowing garment that offers concealment and weather protection",
                    cost: 5767,
                    gains: 461,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Cloak.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "12",
                    name: "Neckless",
                    description: "An ornate accessory that enhances the wearer's abilities",
                    cost: 8650,
                    gains: 692,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Neckless.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "13",
                    name: "Ring",
                    description: "A small but powerful magical item worn on the finger",
                    cost: 12975,
                    gains: 1038,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ring.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "14",
                    name: "Ring 2",
                    description: "An additional enchanted band complementing the first ring",
                    cost: 19462,
                    gains: 1557,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ring 2.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "15",
                    name: "Trinket",
                    description: "A mysterious artifact imbued with unique magical properties",
                    cost: 29193,
                    gains: 2335,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Trinket.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "16",
                    name: "Trinket 2",
                    description: "A second magical curio with its own set of mystical effects",
                    cost: 43789,
                    gains: 3503,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Trinket 2.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "17",
                    name: "Melee Weapon Gem",
                    description: "A precious stone that augments close-combat prowess",
                    cost: 65684,
                    gains: 5255,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Melee Weapon Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "18",
                    name: "Ranged Weapon Gem",
                    description: "A crystal that enhances accuracy and power in ranged attacks",
                    cost: 98526,
                    gains: 7882,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ranged Weapon Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "19",
                    name: "Off-Hand Gem",
                    description: "A jewel that boosts the effectiveness of off-hand equipment",
                    cost: 147789,
                    gains: 11823,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Off-Hand Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "20",
                    name: "Chest Gem",
                    description: "A radiant gem that reinforces chest armor's protective qualities",
                    cost: 221684,
                    gains: 17735,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Chest Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "21",
                    name: "Pants Gem",
                    description: "A lustrous stone that enhances leg armor's defensive capabilities",
                    cost: 332526,
                    gains: 26602,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Pants Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "22",
                    name: "Gloves Gem",
                    description: "A sparkling gem that improves hand-to-hand combat skills",
                    cost: 498789,
                    gains: 39903,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Gloves Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "23",
                    name: "Feet Gem",
                    description: "A shimmering stone that increases agility and sure-footedness",
                    cost: 748183,
                    gains: 59855,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Feet Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "24",
                    name: "Belt Gem",
                    description: "A gleaming jewel that bolsters the wearer's core strength",
                    cost: 1122274,
                    gains: 89782,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Belt Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "25",
                    name: "Bracers Gem",
                    description: "A brilliant gem that amplifies the power of arm strikes",
                    cost: 1683411,
                    gains: 134673,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Bracers Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "26",
                    name: "Shoulder Gem",
                    description: "A dazzling stone that strengthens shoulder armor's durability",
                    cost: 2525117,
                    gains: 202009,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Shoulder Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "27",
                    name: "Cloak Gem",
                    description: "A mystical gem that enhances the cloak's protective properties",
                    cost: 3787675,
                    gains: 303014,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Cloak Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "28",
                    name: "Neckless Gem",
                    description: "A precious stone that amplifies the necklace's magical effects",
                    cost: 5681513,
                    gains: 454521,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Neckless Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "29",
                    name: "Ring Gem",
                    description: "A tiny but potent gem that boosts the ring's enchantments",
                    cost: 8522269,
                    gains: 681782,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ring Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "30",
                    name: "Ring 2 Gem",
                    description: "Another small yet powerful gem enhancing the second ring",
                    cost: 12783404,
                    gains: 1022672,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ring 2 Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "31",
                    name: "Trinket Gem",
                    description: "A unique gem that complements the trinket's magical abilities",
                    cost: 19175106,
                    gains: 1534008,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Trinket Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "32",
                    name: "Trinket 2 Gem",
                    description: "A rare stone that synergizes with the second trinket's powers",
                    cost: 28762659,
                    gains: 2301013,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Trinket 2 Gem.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "33",
                    name: "Melee Weapon Enchant",
                    description: "A magical enhancement improving close-combat effectiveness",
                    cost: 43143988,
                    gains: 3451519,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Melee Weapon Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "34",
                    name: "Ranged Weapon Enchant",
                    description: "An arcane upgrade boosting ranged attack capabilities",
                    cost: 64715982,
                    gains: 5177279,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ranged Weapon Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "35",
                    name: "Off-Hand Enchant",
                    description: "A mystical augmentation enhancing off-hand item performance",
                    cost: 97073974,
                    gains: 7765918,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Off-Hand Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "36",
                    name: "Chest Enchant",
                    description: "A powerful spell reinforcing the chest armor's protective qualities",
                    cost: 145610961,
                    gains: 11648877,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Chest Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "37",
                    name: "Pants Enchant",
                    description: "A magical enhancement improving leg armor's defensive capabilities",
                    cost: 218416441,
                    gains: 17473315,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Pants Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "38",
                    name: "Gloves Enchant",
                    description: "An arcane boost increasing hand-to-hand combat prowess",
                    cost: 327624661,
                    gains: 26209973,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Gloves Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "39",
                    name: "Feet Enchant",
                    description: "A mystical upgrade enhancing agility and movement speed",
                    cost: 491436992,
                    gains: 39314959,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Feet Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "40",
                    name: "Belt Enchant",
                    description: "A magical reinforcement boosting the wearer's overall stability",
                    cost: 737155488,
                    gains: 58972439,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Belt Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "41",
                    name: "Bracers Enchant",
                    description: "An arcane enhancement amplifying arm guard effectiveness",
                    cost: 1105733232,
                    gains: 88458659,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Bracers Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "42",
                    name: "Shoulder Enchant",
                    description: "A powerful spell strengthening shoulder armor's resilience",
                    cost: 1658599848,
                    gains: 132687988,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Shoulder Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "43",
                    name: "Cloak Enchant",
                    description: "A mystical augmentation improving the cloak's protective qualities",
                    cost: 2487899772,
                    gains: 199031982,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Cloak Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "44",
                    name: "Neckless Enchant",
                    description: "An arcane boost amplifying the necklace's magical properties",
                    cost: 3731849658,
                    gains: 298547973,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Neckless Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "45",
                    name: "Ring Enchant",
                    description: "A potent spell enhancing the ring's mystical effects",
                    cost: 5597774487,
                    gains: 447821959,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ring Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "46",
                    name: "Ring 2 Enchant",
                    description: "Another powerful enchantment boosting the second ring's abilities",
                    cost: 8396661731,
                    gains: 671732938,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ring 2 Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "47",
                    name: "Trinket Enchant",
                    description: "A unique magical enhancement complementing the trinket's powers",
                    cost: 12594992597,
                    gains: 1007599408,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Trinket Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "48",
                    name: "Trinket 2 Enchant",
                    description: "A rare arcane upgrade synergizing with the second trinket's abilities",
                    cost: 18892488895,
                    gains: 1511399112,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Trinket 2 Enchant.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "49",
                    name: "Melee Weapon Rune",
                    description: "Ancient symbols etched to enhance close-combat performance",
                    cost: 28338733343,
                    gains: 2267098667,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Melee Weapon Rune.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "50",
                    name: "Ranged Weapon Rune",
                    description: "Mystical markings inscribed to improve ranged attack precision",
                    cost: 42508100014,
                    gains: 3400648001,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Ranged Weapon Rune.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "51",
                    name: "Off-Hand Rune",
                    description: "Arcane glyphs carved to boost off-hand equipment effectiveness",
                    cost: 63762150021,
                    gains: 5100972002,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Off-Hand Rune.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "52",
                    name: "Chest Rune",
                    description: "Powerful sigils engraved to reinforce chest armor's protective qualities",
                    cost: 95643225032,
                    gains: 7651458003,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Chest Rune.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "53",
                    name: "Pants Rune",
                    description: "Magical runes etched to enhance leg armor's defensive capabilities",
                    cost: 143464837548,
                    gains: 11477187004,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Pants Rune.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "54",
                    name: "Gloves Rune",
                    description: "Ancient symbols inscribed to improve hand-to-hand combat skills",
                    cost: 215197256322,
                    gains: 17215780506,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Gloves Rune.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "55",
                    name: "Feet Rune",
                    description: "Mystical markings carved to increase agility and sure-footedness",
                    cost: 322795884483,
                    gains: 25823670759,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Feet Rune.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "56",
                    name: "Belt Rune",
                    description: "Arcane glyphs engraved to bolster the wearer's core strength",
                    cost: 484193826725,
                    gains: 38735506138,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Belt Rune.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "57",
                    name: "Bracers Rune",
                    description: "Powerful sigils etched to amplify the effectiveness of arm guards",
                    cost: 726290740088,
                    gains: 58103259207,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Bracers Rune.png",
                    raidIncomePerHour: 0
                },
                {
                    id: "58",
                    name: "Shoulder Rune",
                    description: "Magical runes inscribed to strengthen shoulder armor's durability",
                    cost: 1089436110131,
                    gains: 87154888811,
                    level: 0,
                    costMultiplier: 1.2,
                    imageUrl: "Shoulder Rune.png",
                    raidIncomePerHour: 0
                }
            ],
            showPopup: false,
            selectedItem: null,
            bottomGradientColors: null,
        };
    },
    async created() {
        this.getUserData();
        this.getBottomGradientColors();
        await this.loadImages();
        console.clear();
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
        },
        async loadImages() {
            for (let hero of this.heroList) {
                hero.imageUrl = (await import(`@/assets/Hero/${hero.imageUrl}`)).default;
            }
        },
        async getUserData() {
            this.loading = true;

            try {
                const response = {
                    data: {
                        name: "Arthur8071",
                        incomePerHour: "500000",
                        increaseAmount: 55,
                        currentGold: 1000,
                        level: 5,
                        avatarImage: "1. High Queen.png",
                        exp: 95,
                        currentMana: 50,
                        totalMana: 100,
                        title: "Wormfood",
                        factionType: "ORC"
                    }
                };

                //await attackService.getUserById(this.userId);

                const { currentGold, factionType } = response.data;
                this.currentGold = currentGold;
                this.factionType = factionType;
            } catch (error) {
                this.error = error.message;
                console.error('Failed to fetch ladder details:', error);
            } finally {
                this.loading = false;
            }
        },
        getBottomGradientColors() {
            const colors = {
                ORC: {
                    top: "#2A3F29",
                    bottom: "#C0B104"
                },
                UNDEAD: {
                    top: "#848484",
                    bottom: "#182E26"
                },
                HUMAN: {
                    top: "#CFCFD0",
                    bottom: "#1E307A"
                },
                ANGEL: {
                    top: "#D0CFCF",
                    bottom: "#C6AC47"
                },
                ELF: {
                    top: "#CACACA",
                    bottom: "#0A2F00"
                },
                DEMON: {
                    top: "#6F1F1F",
                    bottom: "#C0B104"
                }
            }

            this.bottomGradientColors = colors[this.factionType?.toUpperCase()];
        },
    },
};
</script>