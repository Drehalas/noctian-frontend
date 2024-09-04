<template>
    <div class="intro screen">
        <div class="frame-a1KK9a">
            <div class="frame-29-ojYCXP">
                <div class="rectangle-13-Nx77TY">
                    <video ref="intro" autoplay muted playsinline id="intro">
                        <source src="@/assets/Global/Intro/intro.mp4" type="video/mp4" />
                    </video>
                    <div style="display: flex; justify-content: center;">
                        <button @click="handleMute(false)" v-if="!isMuteButtonVisible"
                            style="color: #fff; border: none; padding: 5px; border-radius: 5px; background-color: transparent;">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="40px" height="40px"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13zM10.5 5.445l-4.245 3.86a.75.75 0 01-.505.195h-3a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h3a.75.75 0 01.505.195l4.245 3.86V5.445z" />
                                <path
                                    d="M18.718 4.222a.75.75 0 011.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 01-1.06-1.06 9.5 9.5 0 000-13.436.75.75 0 010-1.06z" />
                                <path
                                    d="M16.243 7.757a.75.75 0 10-1.061 1.061 4.5 4.5 0 010 6.364.75.75 0 001.06 1.06 6 6 0 000-8.485z" />
                            </svg>
                        </button>
                        <button @click="handleMute(true)" v-if="isMuteButtonVisible"
                            style="color: #fff; border: none; padding: 5px; border-radius: 5px; background-color: transparent;">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="40px" height="40px"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13zM10.5 5.445l-4.245 3.86a.75.75 0 01-.505.195h-3a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h3a.75.75 0 01.505.195l4.245 3.86V5.445z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../styles/style.css"
export default {
    name: 'Intro',
    methods: {
        handleMute(isUnmute) {
            const intro = this.$refs.intro;
            intro.muted = isUnmute;
            this.isMuteButtonVisible = !isUnmute;
        },
        handleVideoEnd() {
            //TODO yönlendirme yapılacak FactionSelection
        },
    },
    mounted() {
        const intro = this.$refs.intro;
        intro.addEventListener('ended', this.handleVideoEnd);
        this.isMuteButtonVisible = false;
    },
    data() {
        return {
            isMuteButtonVisible: false
        }
    }
};
</script>

<style>
.intro {
    align-items: center;
    background-color: #191919;
    display: flex;
    gap: 10px;
    height: 100%;
    left: 0px;
    margin: 0px;
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;
    overflow-x: hidden;
    position: relative;
    top: 0px;
    width: 100%;
}

.intro .frame-a1KK9a {
    background-color: transparent;
    height: 932px;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.intro .frame-29-ojYCXP {
    background-color: #000000;
    height: 100%;
    left: 0px;
    position: relative;
    top: 0px;
    width: 100%;
}

.intro .rectangle-13-Nx77TY {
    background-color: #000000;
    height: 241px;
    left: 0px;
    position: relative;
    top: 344px;
    width: 429px;
}

.intro video {
    height: 100%;
    width: 100%;
}
</style>