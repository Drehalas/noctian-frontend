<template>
    <div>
        <div class="base-hero-bar-lvJUvn">
            <div class="frame-16-cZXoCo frame-16">
                <div class="frame-15-wNWTLI frame-15" :class="{ selected: selected === 'Hero' }">
                    <div class="hero-n6d0Ud roboto-semi-bold-white-12px">Hero</div>
                </div>
                <div class="frame-20-wNWTLI frame-20" :class="{ selected: selected === 'Soldier' }">
                    <div class="soldier-kDvytW roboto-semi-bold-white-12px">Soldier</div>
                </div>
                <div class="frame-19-wNWTLI frame-19" :class="{ selected: selected === 'Armory' }">
                    <div class="armory-MjOaOq roboto-semi-bold-white-12px">Armory</div>
                </div>
                <div class="frame-18-wNWTLI frame-18" :class="{ selected: selected === 'Spell' }">
                    <div class="spell-KYkoHY roboto-semi-bold-white-12px">Spell</div>
                </div>
                <div class="frame-17-wNWTLI frame-17" :class="{ selected: selected === 'Artifact' }">
                    <div class="artifact-H13YWN roboto-semi-bold-white-12px">Artifact</div>
                </div>
                <div class="frame-16-wNWTLI frame-16" :class="{ selected: selected === 'Peon' }">
                    <div class="peon-LSCL1d roboto-semi-bold-white-12px">Peon</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseHeroBar',
    props: {
        selected: {
            type: String,
            required: true,
            default: 'Hero'
        }
    },
    components: {
    },
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>
<style scoped>
.selected {
  background-color: #0b0b0c80 !important; 
}
</style>