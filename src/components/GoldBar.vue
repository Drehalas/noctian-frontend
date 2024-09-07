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
    components: {
    },
    data() {
        return {
            totalGold: 507.93
        };
    },
    computed: {
        formattedGold() {
            return this.totalGold.toFixed(2);
        }
    },
    methods: {
        addGold(amount) {
            this.totalGold += amount;
        }
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
    padding: 0 20px;
    background: #21242980;
    box-shadow: 0 8px 32px 0 #21242980;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid #21242980;
}
</style>