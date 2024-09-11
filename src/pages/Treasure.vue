<template>
    <div class="container-center-horizontal">
        <div class="orc-treasure screen ">
            <div class="frame-30-exKbOx">
                <div
                    style="top: 0px;position: relative;z-index: 0;width: 100vw;height: 35vh;background: linear-gradient(180deg, #000000 50%, #EDAE00 100%);">
                </div>
                <div
                    style="top: 0;position: relative;z-index: 0;width: 100vw;height: 65vh;background: linear-gradient(180deg, #C79200 0%, #C7C7C7 100%);">
                </div>
                <img class="war-banner-Cjm0nv" src="@/assets/Global/Treasure/Treasure banner.png" alt="war banner">
                <div style="display:flex;justify-content:center;height: 35vh;width: 100vw;position: absolute;top: 0;">
                    <div class="group-70-Cjm0nv">
                        <img class="x32-h3edDf" src="@/assets/Global/Treasure/Gold pile 3.png" alt="32">
                        <img class="x31-h3edDf" src="@/assets/Global/Treasure/Gold pile 1.png" alt="31">
                        <img class="x2-2-h3edDf" src="@/assets/Global/Treasure/Chest.png" alt="2 2">
                        <img class="x34-h3edDf" src="@/assets/Global/Treasure/Gold pile 1.png" alt="34">
                        <img class="x33-h3edDf" src="@/assets/Global/Treasure/Gold pile 2.png" alt="33">
                    </div>
                </div>
                <div style="display: flex;justify-content:center;width:100vw;position:absolute;top: 42vh;flex-direction: column;align-items: center;">
                    <div class="group-27-Cjm0nv">
                        <h1 class="level-120-zFJ7xU" style="font-size: 24px;">TREASURE</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="2" viewBox="0 0 180 2" fill="none"
                            style="position: relative;top:20px">
                            <path d="M0 0.929443H180" stroke="white" stroke-width="0.3" />
                        </svg>
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