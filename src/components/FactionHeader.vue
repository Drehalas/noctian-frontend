<template>
    <div>
        <div class="rectangle-3-lvJUvn"></div>
        <div class="rectangle-1-lvJUvn"></div>
        <img class="banner-lvJUvn" :src="orcBanner" alt="Orc banner">
    </div>
</template>

<script>
import orcBanner from '@/assets/Global/Attack/Orc banner.png';

export default {
    name: 'FactionHeader',
    data() {
        return {
            orcBanner
        };
    },
    methods: {
    },
};
</script>

<style>
.rectangle-3-lvJUvn {
    background: linear-gradient(180deg, rgb(0, 0, 0) 75%, rgb(209, 0, 28) 100%);
    background-color: transparent;
    height: 150px;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100vw;
    z-index: 1;
}

.rectangle-1-lvJUvn {
    background: linear-gradient(180deg, rgb(42, 63, 41) 0%, rgb(192, 177, 4) 100%);
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