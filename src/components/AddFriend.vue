/* eslint-disable vue/multi-word-component-names */

<template>
    <div class="container-center-horizontal hero">
        <div class="orc-hero screen orc-add-friend">
            <div class="frame-30-zHO16R">
                <FactionHeader />
                <GoldBar />
                <BaseHeroBar :selected="'Peon'" />
                <div class="group-19-YWnndF">
                    <div class="group-18-ads4WT group-18">
                        <div class="rectangle-11-hwdVXu rectangle-11"></div>
                        <div class="frame-22-hwdVXu">
                            <div class="peon-6jHW5V peon">PEON</div>
                        </div>
                        <div class="frame-23-hwdVXu">
                            <p class="add-your-friends-and-SaVObQ">Add your friends and some of their
                                gold will be added to your chest. Remember that they have to be in the same faction
                                because no one will help their enemies.</p>
                        </div>
                    </div>
                </div>
                <div class="add-friend-button-YWnndF">
                    <div class="group-18-DJAnWR group-18">
                        <div class="rectangle-11-tLIa2h rectangle-11"></div>
                        <div class="frame-21-tLIa2h">
                            <div class="add-friend-IX9HgH">ADD FRIEND</div>
                        </div>
                    </div>
                </div>
                <div class="group-27-YWnndF">
                    <div class="rectangle-10-nSIjJq"></div>
                    <div class="frame-16-nSIjJq">
                        <div class="friend-list-nSnucG">Friend list</div>
                        <div class="group-57-nSnucG" v-for="item in friends" :key="item.id">
                            <div class="frame-18-mujmNE">
                                <div class="carzyl544-RccxTl roboto-semi-bold-white-12px">
                                    {{item.name}}
                                </div>
                            </div>
                            <div class="frame-19-mujmNE frame-19">
                                <div class="x1-fkSG5E roboto-semi-bold-white-12px">
                                    {{item.id}}.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GeneralAttackBar :selected="'Base'" />
        </div>
    </div>
</template>

<script>
import '@/styles/css/add-friend/add-friend.css';
import GeneralAttackBar from "@/components/GeneralAttackBar.vue";
import BaseHeroBar from "@/components/BaseHeroBar.vue";
import GoldBar from "@/components/GoldBar.vue";
import FactionHeader from "@/components/FactionHeader.vue";

export default {
    name: 'AddFriend',
    components: {
        GeneralAttackBar,
        BaseHeroBar,
        GoldBar,
        FactionHeader,
    },
    data() {
        return {
            friends: [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
            ],
        };
    },
    methods: {
    },
};
</script>