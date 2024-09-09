<template>
    <div class="container-center-horizontal">
        <div class="orc-melee-weapon screen ">
            <div class="group-31-Jxx3Jc">
                <div class="rectangle-3-Op5bx8"></div>
                <div class="group-28-Op5bx8">
                    <div class="rectangle-2-IxqKwS"></div>
                    <div class="rectangle-11-IxqKwS"></div>
                    <div class="buy-button-IxqKwS">
                        <div class="buy-DuEsqg">Buy</div>
                    </div>
                    <div style="display: flex; justify-content: center;">
                        <p class="a-well-balanced-weap-Op5bx8">{{ item.description }}</p>
                    </div>
                </div>
                <img class="melee-weapon-Op5bx8" :src="item.imageUrl" :alt="item.name">
                <div class="frame-19-Op5bx8">
                    <div class="group-9-WQV2wA group-9">
                        <img class="gold-xS7xA3 gold" src="@/assets/Global/Common/Gold.png" alt="Gold">
                    </div>
                    <h1 class="title-WQV2wA" style="font-size: 20px;">{{ item.cost }}</h1>
                </div>
                <div class="frame-25-Op5bx8">
                    <div class="melee-weapon-AYXywa">{{ item.name }}</div>
                    <div class="frame-24-AYXywa">
                        <div class="raid-income-per-hour-kBTGjp">Raid income per hour</div>
                        <div class="frame-4-kBTGjp">
                            <div class="group-9-37ez8N group-9">
                                <img class="gold-ZIYg15 gold" src="@/assets/Global/Common/Gold.png" alt="Gold">
                            </div>
                            <div class="x123-37ez8N" style="font-size: 9px;">+{{ item.gains }}</div>
                        </div>
                    </div>
                </div>
                <div class="close-button-Op5bx8">
                    <a style="cursor: pointer;" @click="$emit('close')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.4308 24.8616C19.2961 24.8616 24.8616 19.2961 24.8616 12.4308C24.8616 5.56545 19.2961 0 12.4308 0C5.56545 0 0 5.56545 0 12.4308C0 19.2961 5.56545 24.8616 12.4308 24.8616ZM12.4347 13.5263L17.3759 18.4753L18.4714 17.3721L13.5301 12.4308L18.4714 7.4895L17.3759 6.39403L12.4347 11.3353L7.49338 6.38626L6.39014 7.4895L11.3392 12.4308L6.39014 17.3721L7.49338 18.4753L12.4347 13.5263Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/styles/faction-popup.css"
export default {
    name: 'FactionPropertyPopup',
    props: ['item']
};
</script>