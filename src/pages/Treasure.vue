<template>
    <div class="container-center-horizontal">
        <div class="orc-treasure screen ">
            <div class="frame-30-exKbOx">
                <svg xmlns="http://www.w3.org/2000/svg" width="428" height="451" viewBox="0 0 428 451" fill="none">
                    <path d="M0 -82H428V451H0V-82Z" fill="url(#paint0_linear_37_17731)" />
                    <defs>
                        <linearGradient id="paint0_linear_37_17731" x1="214" y1="122.377" x2="214" y2="451"
                            gradientUnits="userSpaceOnUse">
                            <stop />
                            <stop offset="1" stop-color="#EDAE00" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="428" height="597" viewBox="0 0 428 597" fill="none">
                    <path d="M0 50C0 22.3858 22.3858 0 50 0H378C405.614 0 428 22.3858 428 50V598H0V50Z"
                        fill="url(#paint0_linear_37_17734)" />
                    <defs>
                        <linearGradient id="paint0_linear_37_17734" x1="214" y1="0" x2="214" y2="598"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#C79200" />
                            <stop offset="1" stop-color="#C7C7C7" />
                        </linearGradient>
                    </defs>
                </svg>
                <img class="war-banner-Cjm0nv" src="@/assets/Global/Treasure/Treasure banner.png" alt="war banner">

                <div class="group-27-Cjm0nv">
                    <h1 class="level-120-zFJ7xU" style="font-size: 24px;">TREASURE</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="2" viewBox="0 0 180 2" fill="none"
                        style="position: relative;top:20px">
                        <path d="M0 0.929443H180" stroke="white" stroke-width="0.3" />
                    </svg>
                </div>
                <div class="group-70-Cjm0nv">
                    <img class="x32-h3edDf" src="@/assets/Global/Treasure/Gold pile 3.png" alt="32">
                    <img class="x31-h3edDf" src="@/assets/Global/Treasure/Gold pile 1.png" alt="31">
                    <img class="x2-2-h3edDf" src="@/assets/Global/Treasure/Chest.png" alt="2 2">
                    <img class="x34-h3edDf" src="@/assets/Global/Treasure/Gold pile 1.png" alt="34">
                    <img class="x33-h3edDf" src="@/assets/Global/Treasure/Gold pile 2.png" alt="33">
                </div>
                <div class="group-19-Cjm0nv">
                    <div class="group-18-GtvAHp group-18">
                        <div class="rectangle-11-9Nt7xs rectangle-11"></div>
                        <div class="frame-23-9Nt7xs">
                            <p class="please-connect-your-di0LSt" style="font-size: 10px;">
                                Please connect your wallet to earn rewards and purchase buffs.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="add-wallet-button-Cjm0nv" @click="showMessage">
                    <div class="group-18-0fbiDm group-18">
                        <div class="rectangle-11-ZVRKks rectangle-11"></div>
                        <div class="frame-21-ZVRKks">
                            <div class="add-wallet-mbRsOe" style="font-size: 24px;">ADD WALLET</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer :selected="'Treasure'" />
        </div>
    </div>
</template>

<script>
import '@/styles/treasure.css';
import Footer from "@/components/Footer.vue";
import { useToast } from "vue-toastification";

export default {
    name: 'Treasure',
    components: {
        Footer,
    },
    data() {
        return {

        };
    },
    setup() {
        const toast = useToast();

        return { toast }
    },
    methods: {
        showMessage() {
            this.toast.error("An error occurred while connecting to the wallet.");
        }
    }
};
</script>