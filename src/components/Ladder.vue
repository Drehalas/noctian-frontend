<template>
    <div class="container-center-horizontal">
        <div class="orc-ladder screen ">
            <div class="frame-30-sSjFR3">
                <div class="rectangle-3-7GkIVu"></div>
                <div class="rectangle-1-7GkIVu"></div><img class="orc-banner-7GkIVu" src="global/img/orc-banner.png"
                    alt="Orc banner"><img class="ork-ladder-20-logo-7GkIVu" src="orc/ladder/img/ork-ladder-20-logo.png"
                    alt="Ork Ladder 20 logo">
                <div class="group-12-7GkIVu">
                    <div class="rectangle-4-c0QDzt"></div>
                    <div class="rectangle-6-c0QDzt"></div>
                </div>
                <div class="group-27-7GkIVu">
                    <h1 class="title-geIusQ">Wormfood</h1>
                    <div class="level-120-geIusQ">LADDER 1/20</div>
                </div>
                <div
                    style="width: 100%;justify-content: center;height: -webkit-fill-available;position: absolute;top: 524px;">
                    <div class="group-16-7GkIVu" v-for="item in ladderList" :key="item.id">
                        <div class="rectangle-10"></div>
                        <div class="frame-16">
                            <div class="frame-17-b6ve6e frame-17">
                                <div class="saruman869-6pApPI roboto-semi-bold-white-12px">{{ item.name }}</div>
                            </div>
                            <div class="frame-18-b6ve6e frame-18">
                                <div class="frame-4">
                                    <div class="group-8-3jj4gC group-8"><img
                                            class="pngtreeglossy-golden-coin-icon_6866281-1"
                                            src="global/img/-pngtree-glossy-golden-coin-icon-6866281-1.png"
                                            alt="Pngtreeglossy golden coin icon_6866281 1"></div>
                                    <div class="x2102-k roboto-semi-bold-white-11px">{{ item.gold }}K</div>
                                </div>
                            </div>
                            <div class="frame-19">
                                <div class="x3236801-rsigCY roboto-semi-bold-white-12px">#{{ item.order }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GeneralAttackBar :selected="'Ladder'" />
        </div>
    </div>
</template>

<script>
import '@/styles/css/ladder/ladder.css';
import GeneralAttackBar from "@/components/GeneralAttackBar.vue";

export default {
    name: 'Ladder',
    components: {
        GeneralAttackBar,
    },
    data() {
        return {
            ladderList: [
                {
                    id: "1",
                    order: "3236801",
                    name: "Saruman869",
                    gold: "21.02"
                },
                {
                    id: "2",
                    order: "3236802",
                    name: "Kaboom23",
                    gold: "21.02"
                },
                {
                    id: "3",
                    order: "3236803",
                    name: "BaldEagle452",
                    gold: "21.02"
                },
                {
                    id: "4",
                    order: "3236804",
                    name: "AragonFTW11",
                    gold: "21.02"
                },
            ]
        };
    },
    methods: {
    },
};
</script>