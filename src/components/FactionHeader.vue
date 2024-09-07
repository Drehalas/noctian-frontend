<template>
    <div>
        <div class="rectangle-3-lvJUvn"
            :style="{ background: `linear-gradient(180deg, ${getTopLinearColors().top} 75%, ${getTopLinearColors().bottom} 100%)` }">
        </div>
        <div class="rectangle-1-lvJUvn"
            :style="{ background: `linear-gradient(180deg, ${getBottomLinearColors().top} 0%, ${getBottomLinearColors().bottom} 100%)` }">
        </div>
        <img class="banner-lvJUvn" :src="BannerImg" alt="Orc banner">
    </div>
</template>

<script>
import BannerImg from '@/assets/Global/Attack/Orc banner.png';

export default {
    name: 'FactionHeader',
    data() {
        return {
            BannerImg
        };
    },
    methods: {
        getTopLinearColors() {
            return {
                top: "#000000",
                bottom: "#d1001c"
            }
        },
        getBottomLinearColors() {
            return {
                top: "#2a3f29",
                bottom: "#c0b104"
            }
        }
    },
};
</script>

<style>
.rectangle-3-lvJUvn {
    background-color: transparent;
    height: 150px;
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
    position: fixed;
    top: 0;
    width: 100vw;
}

.banner-lvJUvn {
    background-color: transparent;
    height: 428px;
    left: 0px;
    object-fit: cover;
    position: absolute;
    top: -34px;
    width: 100vw;
    z-index: 2;
}
</style>