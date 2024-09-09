<template>
    <div class="frame-10-lvJUvn">
        <div class="gold-container">
            <div class="group-9-XsTlFn group-9">
                <div class="group-8-oc1ZZS group-8">
                    <img class="pngtreeglossy-golden-coin-icon_6866281-1-UAjQ2R" src="@/assets/Global/Common/Gold.png"
                        alt="Pngtreeglossy golden coin icon_6866281 1">
                </div>
            </div>
            <h1 class="title-XsTlFn">{{ formattedGold }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoldBar',
    props: {
        currentGold: {
            type: Number,
            required: true,
        }
    },
    components: {
    },
    computed: {
        formattedGold() {
            const suffixes = ['', 'k', 'M', 'B', 'T'];
            let suffixIndex = 0;
            let value = this.currentGold;
            while (value >= 1000 && suffixIndex < suffixes.length - 1) {
                value /= 1000;
                suffixIndex++;
            }

            return value.toFixed(1).replace(/.0$/, '') + suffixes[suffixIndex];
        },
    },
    methods: {
    },
};
</script>

<style scoped>
.title-XsTlFn {
    font-size: 30px !important;
    font-family: 'Times New Roman', Times, serif !important;
}

.gold-container {
    display: flex;
    padding: 0 10px;
    background: #21242980;
    box-shadow: 0 8px 32px 0 #21242980;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid #21242980;
}
</style>