<template>
    <div>
        <div class="rectangle-3-lvJUvn" v-if="topGradientColors"
            :style="{ background: `linear-gradient(180deg, ${topGradientColors.top} 65%, ${topGradientColors.bottom} 100%)` }">
        </div>
        <img v-if="bannerImg" class="banner-lvJUvn" :src="bannerImg" :alt="this.formatFactionType(this.factionType) + 'banner'">
    </div>
</template>

<script>

export default {
    name: 'FactionHeader',
    props: {
        factionType: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            bannerImg: null,
            topGradientColors: null
        };
    },
    methods: {
        getTopGradientColors() {
            const colors = {
                ORC: {
                    top: "#000000",
                    bottom: "#D1001C"
                },
                UNDEAD: {
                    top: "#000000",
                    bottom: "#182E26"
                },
                HUMAN: {
                    top: "#000000",
                    bottom: "#0D2CAB"
                },
                ANGEL: {
                    top: "#000000",
                    bottom: "#FFFFFF"
                },
                ELF: {
                    top: "#000000",
                    bottom: "#4ACC17"
                },
                DEMON: {
                    top: "#000000",
                    bottom: "#D1001C"
                }
            }
            
            this.topGradientColors = colors[this.factionType?.toUpperCase()];
        },
        formatFactionType(type) {
            return type.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
        },
    },
    async mounted() {
        this.getTopGradientColors();
        this.bannerImg = (await import(`@/assets/Global/Attack/${this.formatFactionType(this.factionType)} banner.png`)).default;
    }
};
</script>

<style>
.rectangle-3-lvJUvn {
    background-color: transparent;
    height: 185px;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100vw;
    z-index: 1;
}

.rectangle-1-lvJUvn {
    background-color: transparent;
    height: calc(100vh + 164px);
    left: 0px;
    position: relative;
    top: 185px;
    width: 100vw;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    z-index: 1;
}

.banner-lvJUvn {
    background-color: transparent;
    left: 0px;
    object-fit: cover;
    position: absolute;
    top: 90px;
    width: 100vw;
    z-index: 2;
}
</style>