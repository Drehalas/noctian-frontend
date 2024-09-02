<template>
    <div class="container-center-horizontal">
        <div class="loading screen">
            <div class="rectangle-3-D9VNiZ"></div>
            <img class="loading-background-D9VNiZ" src="@/assets/Global/Loading/Loading background.png"
                alt="Loading background">
            <p class="noctian-war-for-the-throne-D9VNiZ" style="font-size: 30px;">Noctian: War for the Throne</p>
            <img class="loading-logo-D9VNiZ" src="@/assets/Global/Loading/Loading Logo.png" alt="Loading Logo">
            <h1 class="title-D9VNiZ" style="font-size: 64px;">{{ loadingText }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    data() {
        return {
            loadingText: 'Loading',
            loadingIndex: 0,
            loadingPatterns: ['Loading', 'Loading.', 'Loading..', 'Loading...'],
        };
    },
    mounted() {
        this.startLoadingAnimation();
        this.redirectAfterDelay();
    },
    methods: {
        startLoadingAnimation() {
            this.loadingInterval = setInterval(() => {
                this.loadingIndex = (this.loadingIndex + 1) % this.loadingPatterns.length;
                this.loadingText = this.loadingPatterns[this.loadingIndex];
            }, 250);
        },
        redirectAfterDelay() {
            setTimeout(() => {
                clearInterval(this.loadingInterval);
                //TODO burada yönlendirme yapılacak
            }, 3000);
        },
    },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");

@import url("https://fonts.googleapis.com/css?family=Rosarivo:400");

:root {
    --black: #000000;
    --font-family-rosarivo: "Rosarivo", Helvetica;
}

.loading {
    background-color: #191919;
    cursor: pointer;
    height: 932px;
    overflow: hidden;
    overflow-x: hidden;
    position: relative;
    width: 430px;
}

.loading .rectangle-3-D9VNiZ {
    background-color: var(--black);
    border: 1px solid;
    border-color: var(--black);
    height: 932px;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 430px;
}

.loading .loading-background-D9VNiZ {
    background-color: transparent;
    height: 931px;
    left: 0px;
    object-fit: cover;
    position: absolute;
    top: 1px;
    width: 430px;
}

.loading .noctian-war-for-the-throne-D9VNiZ {
    background-color: transparent;
    color: #ffffff;
    font-family: var(--font-family-rosarivo);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
    height: auto;
    left: 19px;
    letter-spacing: -0.60px;
    line-height: 33.0px;
    position: absolute;
    text-align: left;
    text-shadow: 0px 4px 4px #000000;
    top: 73px;
    width: 389px;
}

.loading .loading-logo-D9VNiZ {
    background-color: transparent;
    height: 283px;
    left: 75px;
    position: absolute;
    top: 189px;
    width: 281px;
}

.loading .title-D9VNiZ {
    -webkit-text-stroke: 1px var(--black);
    background-color: transparent;
    color: #ffffff;
    font-family: var(--font-family-rosarivo);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 400;
    height: auto;
    left: 86px;
    letter-spacing: -1.28px;
    line-height: 70.4px;
    position: absolute;
    text-align: left;
    top: 798px;
    white-space: nowrap;
    width: 278px;
}
</style>