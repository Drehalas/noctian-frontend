<template>
    <div>
        <div class="rectangle-3-lvJUvn"
            :style="{ background: `linear-gradient(180deg, ${getTopLinearColors().top} 75%, ${getTopLinearColors().bottom} 100%)` }">
        </div>
        <img class="banner-lvJUvn" :src="BannerImg" alt="Orc banner">
    </div>
</template>

<script>
import BannerImg from '@/assets/Global/Attack/Undead banner.png';

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
                bottom: "#182E26"
            }
        }
    },
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