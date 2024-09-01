<!-- src/pages/Equipment.vue -->

<template>
    <div class="container-center-horizontal">
        <div class="orc-attack screen ">
            <div class="group-71-9glIQN">
                <div class="orc-attack-CiWjWe">
                    <div class="group-29-zJN8sm">
                        <div class="rectangle-3-Z6GGxj"></div>
                        <div class="rectangle-1-Z6GGxj"></div>
                        <img class="orc-banner-Z6GGxj" src="orc/attack/img/orc-banner.png" alt="Orc banner">
                        <p class="noctian-war-for-the-throne-Z6GGxj">Noctian: War for the throne</p><img
                            class="orc-button-Z6GGxj" src="orc/attack/img/orc-button.png" alt="Orc button">
                        <div class="frame-2-Z6GGxj">
                            <div class="wormfood-Cbc0iH wormfood">Wormfood</div>
                            <div class="arthur8071-Cbc0iH">Arthur8071</div>
                        </div>
                        <div class="frame-3-Z6GGxj"><img class="e3461866-28e9-4e0f-95cb-223395215a83-1-R8jrdC"
                                src="orc/attack/img/e3461866-28e9-4e0f-95cb-223395215a83-1.png"
                                alt="e3461866-28e9-4e0f-95cb-223395215a83 1">
                            <div class="war-income-per-hour-R8jrdC">War income per hour</div><img
                                class="line-1-R8jrdC line-1" src="global/img/vector-vertical.svg" alt="Line 1"><img
                                class="line-2-R8jrdC" src="global/img/vector-vertical.svg" alt="Line 2">
                            <div class="frame-4-R8jrdC frame-4">
                                <div class="group-9-1bAkpj group-9">
                                    <div class="group-8-FONy3l group-8"><img class="gold-5ouUfJ gold"
                                            src="orc/attack/img/gold.png" alt="Gold"></div>
                                </div>
                                <div class="x63631-k-1bAkpj">+636.31K</div><img class="vector-1bAkpj vector"
                                    src="orc/attack/img/vector.svg" alt="Vector">
                            </div>
                        </div>
                        <GoldBar/>
                        <img class="ork-ladder-20-logo-Z6GGxj" src="orc/attack/img/ork-ladder-20-logo.png"
                            alt="Ork Ladder 20 logo">
                        <div class="group-12-Z6GGxj">
                            <div class="rectangle-4-8WDrgx"></div>
                            <div class="rectangle-5-8WDrgx"></div>
                            <div class="frame-10-8WDrgx">
                                <div class="wormfood-CUprVx wormfood roboto-medium-white-9px">
                                    Wormfood
                                </div>
                                <img class="vector-CUprVx vector" src="global/img/vector-right.svg" alt="Vector">
                            </div>
                            <div class="level-120-8WDrgx"><span class="span0-JXIfOE">Level 1</span><span
                                    class="span1-JXIfOE roboto-medium-white-9px">/20</span></div>
                        </div>
                        <div class="frame-12-Z6GGxj">
                            <div class="group-68-jDU8To">
                                <div class="frame-34-VYxXau">
                                    <div class="group-67-XBoaRC">
                                        <div class="frame-11-Gqe1Rb frame-11"><img
                                                class="bc558d3d-8d85-47c6-a507-95a6035c5e38-1-8oF7wV"
                                                src="orc/attack/img/bc558d3d-8d85-47c6-a507-95a6035c5e38-1.png"
                                                alt="bc558d3d-8d85-47c6-a507-95a6035c5e38 1">
                                            <div class="x6500-6500-8oF7wV">6500 / 6500</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="buff-button-jDU8To">
                                <div class="frame-33-RPMWVZ">
                                    <div class="group-56-lN2Ajn">
                                        <div class="skill-buff-HU5t6E">Skill &amp; Buff</div><img
                                            class="x83c250f6-14c4-4c9e-a6a8-5c1542948173-1-HU5t6E"
                                            src="orc/attack/img/83c250f6-14c4-4c9e-a6a8-5c1542948173-1.png"
                                            alt="83c250f6-14c4-4c9e-a6a8-5c1542948173 1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="frame-35-Z6GGxj">
                            <div class="orcs-Ip5M10">ORCS</div>
                            <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1-Ip5M10"
                                src="orc/attack/img/9b3af883-354d-4413-bf7f-37baaad350d0-1.png">
                        </div>
                    </div>
                    <GeneralAttackBar :selected="'Attack'"/>
                    <div class="select-kingdom-zJN8sm select-kingdom"><img class="binance-logo-4fyxtR"
                            src="global/img/binance-logo.png" alt="Binance Logo">
                        <div class="select-kingdom-4fyxtR select-kingdom">Select Kingdom</div>
                        <img class="line-1-4fyxtR line-1" src="global/img/vector-vertical.svg" alt="Line 1">
                        <div class="frame-36-4fyxtR">
                            <div class="frame-4-NxHzQ7 frame-4">
                                <select name="wallet" id="wallet"
                                    style="outline: none;border:none; font-size: 10px; background-color: #000000B2;color: #fff;padding: 2px;border-radius: 5px;">
                                    <option value="binance-horde"> Binance Horde</option>
                                    <option value="okx-horde">OKX Horde</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/styles/attack.css';
import GeneralAttackBar from './GeneralAttackBar.vue';
import GoldBar from './GoldBar.vue';

export default {
    name: 'Attack',
    components: {
        GeneralAttackBar,
        GoldBar
    },
};
</script>

<style scoped>
.equipment-page {
    padding: 20px;
}
</style>