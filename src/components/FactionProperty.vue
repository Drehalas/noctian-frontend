<template>
    <div class="property-11-3peoxU">
        <div class="group-18">
            <div class="rectangle-11"></div>
            <div class="frame-22-qGPTjX frame-22">
                <div class="lvl-0 roboto-semi-bold-white-9px" style="font-size: 9px;">lvl {{ property.level }}</div>
                <div class="frame-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="25" viewBox="0 0 2 25" fill="none">
                        <path d="M0.894409 0.588623L0.894408 24.9578" stroke="white" stroke-opacity="0.2"
                            stroke-width="0.3" />
                    </svg>
                    <div class="group-9-MZoG0a group-9">
                        <img class="gold-klRr92 gold" src="@/assets/Global/Common/Gold.png" alt="Gold" />
                    </div>
                    <div class="x15692-k roboto-semi-bold-white-11px" style="font-size: 11px;">
                        {{ property.cost }}
                    </div>
                </div>
            </div>
            <div class="frame-21">
                <div class="melee-weapon-KD455G roboto-normal-white-9px">{{ property.name }}</div>
                <div class="frame-20-KD455G frame-20">
                    <div class="raid-income-per-hour roboto-medium-white-7px">Raid income per hour</div>
                    <div class="frame-19-CSoEXl frame-19">
                        <div class="group-9-vdMDfX group-9">
                            <img class="gold-qniZba gold" src="@/assets/Global/Common/Gold.png" alt="Gold" />
                        </div>
                        <div class="x0 roboto-semi-bold-white-8-2px">{{ property.raidIncomePerHour }}</div>
                    </div>
                </div>
            </div>
            <img class="spirit-shield-qGPTjX" :src="property.imageUrl" :alt="property.name" loading="lazy"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="1" viewBox="0 0 180 1" fill="none"
                style="position: relative;top: 55px;">
                <path d="M0 0.487244H180" stroke="white" stroke-opacity="0.2" stroke-width="0.3" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FactionProperty',
    props: {
        property: {
            type: Object,
            required: true
        }
    }
};
</script>