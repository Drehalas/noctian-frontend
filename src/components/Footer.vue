<template>
    <div class="container">
        <div class="attack-bar-container">
            <div class="attack attack-bar" :class="{ selected: selected === 'Attack' }" @click="navigateTo('Attack')">
                <img src="@/assets/Global/Common/Attack logo.png" alt="Attack Icon" />
                <span>Attack</span>
            </div>
            <div class="base attack-bar" :class="{ selected: selected === 'Base' }" @click="navigateTo('Base')">
                <img src="@/assets/Global/Common/Base logo.png" alt="Base Icon" />
                <span>Base</span>
            </div>
            <div class="ladder attack-bar" :class="{ selected: selected === 'Ladder' }" @click="navigateTo('Ladder')">
                <img src="@/assets/Global/Common/Ladder logo.png" alt="Ladder Icon" />
                <span>Ladder</span>
            </div>
            <div class="war attack-bar" :class="{ selected: selected === 'War' }" @click="navigateTo('War')">
                <img src="@/assets/Global/Common/War logo.png" alt="War Icon" />
                <span>War</span>
            </div>
            <div class="treasure attack-bar" :class="{ selected: selected === 'Treasure' }"
                @click="navigateTo('Treasure')">
                <img src="@/assets/Global/Common/Treasure logo.png" alt="Treasure Icon" />
                <span>Treasure</span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Footer',
    props: {
        selected: {
            type: String,
            required: true,
            default: 'Hero'
        }
    },
    methods: {
        navigateTo(routeName) {
            this.$router.push({ name: routeName });
        }
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rosarivo:400");

.selected {
    background-color: #0b0b0b80 !important;
    opacity: 1 !important;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: transparent;
    position: fixed;
    bottom: 40px;
}

.container .attack-bar {
    background-color: transparent;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    flex-direction: column;
    width: 3rem;
    cursor: pointer;
    opacity: 0.5;
    margin: 5px;
    padding: 7px;
}

.container .attack-bar img {
    width: 2rem;
}

.container .attack-bar-container {
    flex-direction: row;
    display: flex;
    background-color: #32363C;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 4px 4px 20px -7px rgba(0, 0, 0, 0.84);
}

.container .attack-bar-container span {
    font-size: .6rem;
    margin-top: .1rem;
    font-family: "Rosarivo", Helvetica;
}
</style>