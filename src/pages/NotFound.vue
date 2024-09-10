<template>
    <div class="container-center-horizontal">
        <div class="loading screen">
            <div class="rectangle-3-D9VNiZ"></div>
            <img class="loading-background-D9VNiZ" src="@/assets/Global/Loading/Loading background.png"
                alt="Loading background">
            <p class="noctian-war-for-the-throne-D9VNiZ text-shadow" style="font-size: 30px;">
                Noctian: War for the Throne
            </p>
            <img class="loading-logo-D9VNiZ" src="@/assets/Global/Loading/Loading Logo.png" alt="Loading Logo">
            <div
                style="position: absolute;top: 460px;width: 100vw;display: flex;align-items: center;justify-content: center;flex-direction: column;">
                <h1 class="title-D9VNiZ text-shadow"
                    style="font-size: 35px;position: relative;top: 0px;left: 0px;width: auto;">
                    404 - Page Not Found
                </h1>
                <h1 class="title-D9VNiZ text-shadow"
                    style="font-size: 25px;position: relative;top: 40px;left: 0;white-space: normal;text-align: center;line-height: 35px;">
                    The page you are looking for does not exist.
                </h1>
                <router-link to="/"
                    style="position: relative;top: 75px;text-decoration: none;left: 0;display: flex;justify-content: center;align-items: center;">
                    <h1 class="title-D9VNiZ text-shadow"
                        style="font-size: 40px;top: 0;position: relative;width: 100%;left: inherit;">
                        Go back to Home
                    </h1>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NotFound',
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");

@import url("https://fonts.googleapis.com/css?family=Rosarivo:400");

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
    background-color: #000000;
    border: 1px solid;
    border-color: #000000;
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
    font-family: "Rosarivo", Helvetica;
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
    height: auto;
    left: 19px;
    letter-spacing: -0.60px;
    line-height: 33.0px;
    position: absolute;
    text-align: left;
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
    -webkit-text-stroke: 1px #000000;
    background-color: transparent;
    color: #ffffff;
    font-family: "Rosarivo", Helvetica;
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

.text-shadow {
    text-shadow: -1px -4px #000000,
        -2px 3px #000000,
        -4px 2px #000000,
        4px -2px #000000,
        4px 2px #000000,
        -4px -1px #000000,
        4px -1px #000000,
        0px 4px #000000 !important
}
</style>