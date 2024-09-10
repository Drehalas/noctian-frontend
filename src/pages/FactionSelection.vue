<template>
    <div>
        <div class="container-center-horizontal">
            <div class="faction-selection screen">
                <div class="rectangle-3-YXzsPW"></div>
                <img class="faction-selection-background-YXzsPW"
                    src="@/assets/Global/Faction selection/faction selection background.png"
                    alt="faction selection background">
                <h1 class="title-YXzsPW text-shadow">Noctian: War for the Throne</h1>
                <img class="faction-selection-logo-YXzsPW"
                    src="@/assets/Global/Faction selection/Faction Selection Logo.png" alt="Faction Selection Logo">
                <div class="human-selection-YXzsPW" @click="showFactionDetails('HUMANS')">
                    <div class="human-selection-4aFvwT">
                        <div class="group-18">
                            <img class="rectangle-12-JrxMsg rectangle-12"
                                src="@/assets/Global/Faction selection/Human background.png" alt="Rectangle 12">
                            <div class="frame-21">
                                <div class="humans-qKcTbw rosarivo-normal-white-17px faction-title-shadow">HUMANS</div>
                            </div>
                            <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                                src="@/assets/Global/Faction selection/Human logo.png" alt="Human logo">
                        </div>
                    </div>
                </div>

                <div class="orc-selection-YXzsPW" @click="showFactionDetails('ORCS')">
                    <div class="group-18">
                        <img class="rectangle-12-9GSYS9 rectangle-12"
                            src="@/assets/Global/Faction selection/Orc background.png" alt="Rectangle 12">
                        <div class="frame-21">
                            <div class="orcs-nCgnnm rosarivo-normal-white-17px faction-title-shadow">ORCS</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Orc logo.png" alt="Orc logo">
                    </div>
                </div>

                <div class="angel-selection-YXzsPW" @click="showFactionDetails('ANGELS')">
                    <div class="group-18">
                        <img class="rectangle-12" src="@/assets/Global/Faction selection/Angel background.png"
                            alt="Rectangle 12">
                        <div class="frame-21">
                            <div class="angels-pvNINR rosarivo-normal-white-17px faction-title-shadow">ANGELS</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Angel logo.png" alt="Angel logo">
                    </div>
                </div>

                <div class="demon-selection-YXzsPW" @click="showFactionDetails('DEMONS')">
                    <div class="group-18">
                        <img class="rectangle-12" src="@/assets/Global/Faction selection/Demon background.png"
                            alt="Rectangle 12">
                        <div class="frame-21">
                            <div class="demons-hXA5hE rosarivo-normal-white-17px faction-title-shadow">DEMONS</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Demon logo.png" alt="Demon logo">
                    </div>
                </div>

                <div class="elf-selection-YXzsPW" @click="showFactionDetails('ELVES')">
                    <div class="group-18">
                        <img class="rectangle-11-5Us6sz" src="@/assets/Global/Faction selection/Elf background.png"
                            alt="Rectangle 11">
                        <div class="frame-21">
                            <div class="elves-c831ay rosarivo-normal-white-17px faction-title-shadow">ELVES</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Elf logo.png" alt="Elf logo">
                    </div>
                </div>

                <div class="undead-selection-YXzsPW" @click="showFactionDetails('UNDEADS')">
                    <div class="group-18">
                        <img class="rectangle-12" src="@/assets/Global/Faction selection/Undead background.png"
                            alt="Rectangle 12">
                        <div class="frame-21">
                            <div class="undeads-3gmlAw rosarivo-normal-white-17px faction-title-shadow">UNDEADS</div>
                        </div>
                        <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1"
                            src="@/assets/Global/Faction selection/Human logo.png" alt="Undead logo">
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isFactionDetailsVisible" class="container-center-horizontal">
            <div class="human-selection screen">
                <div class="group-31-qDvr60">
                    <div class="rectangle-3-drvqzZ"
                        :style="{ background: `linear-gradient(180deg, #000 0%, ${getFactionGradientColor(selectedFaction)} 100%)` }">
                    </div>
                    <div class="rectangle-4-drvqzZ"
                        :style="{ background: `linear-gradient(180deg, #000 0%, ${getFactionGradientColor(selectedFaction)} 100%)` }">
                    </div>
                    <div class="group-28-drvqzZ">
                        <div class="rectangle-2-lfHp5b"
                            :style="{ backgroundColor: getFactionGradientColor(selectedFaction) }"></div>
                        <img class="rectangle-11-lfHp5b" :src="getFactionPopupBackgroundImg(selectedFaction)"
                            alt="Faction background">
                        <div class="human-selection-button-lfHp5b" @click="selectFaction"
                            :style="{ backgroundColor: getButtonColor(selectedFaction) }">
                            <div class="select-mYlsYp">Select</div>
                        </div>
                    </div>
                    <div class="frame-25-drvqzZ">
                        <h1 class="title-qEjfPb text-shadow" style="font-size: 16px;">{{ selectedFaction }}</h1>
                    </div>
                    <img class="x9b3af883-354d-4413-bf7f-37baaad350d0-1-drvqzZ"
                        :src="getFactionPopupLogo(selectedFaction)" alt="Faction logo">
                    <div class="frame-26-drvqzZ">
                        <p class="humans-renowned-for-orkOTD">{{ factionDescription }}</p>
                    </div>
                    <div class="close-button-drvqzZ" @click="closeFactionDetails">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                fill="none">
                                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.4308 24.8616C19.2961 24.8616 24.8616 19.2961 24.8616 12.4308C24.8616 5.56545 19.2961 0 12.4308 0C5.56545 0 0 5.56545 0 12.4308C0 19.2961 5.56545 24.8616 12.4308 24.8616ZM12.4347 13.5263L17.3759 18.4753L18.4714 17.3721L13.5301 12.4308L18.4714 7.4895L17.3759 6.39403L12.4347 11.3353L7.49338 6.38626L6.39014 7.4895L11.3392 12.4308L6.39014 17.3721L7.49338 18.4753L12.4347 13.5263Z"
                                    fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/styles/faction-selection.css";
import humanBackground from '@/assets/Global/Faction selection/pop-up/Human background.png';
import orcBackground from '@/assets/Global/Faction selection/pop-up/Orc background.png';
import angelBackground from '@/assets/Global/Faction selection/pop-up/Angel background.png';
import demonBackground from '@/assets/Global/Faction selection/pop-up/Demon background.png';
import elfBackground from '@/assets/Global/Faction selection/pop-up/Elf background.png';
import undeadBackground from '@/assets/Global/Faction selection/pop-up/Undead background.png';

import humanLogo from '@/assets/Global/Faction selection/pop-up/Human logo.png';
import orcLogo from '@/assets/Global/Faction selection/pop-up/Orc logo.png';
import angelLogo from '@/assets/Global/Faction selection/pop-up/Angel logo.png';
import demonLogo from '@/assets/Global/Faction selection/pop-up/Demon logo.png';
import elfLogo from '@/assets/Global/Faction selection/pop-up/Elf logo.png';
import undeadLogo from '@/assets/Global/Faction selection/pop-up/Undead logo.png';

export default {
    name: 'FactionSelection',
    data() {
        return {
            isFactionDetailsVisible: false,
            selectedFaction: '',
            factionDescription: '',
            factionPopupImages: {
                background: '',
                logo: ''
            }
        };
    },
    methods: {
        showFactionDetails(faction) {
            this.selectedFaction = faction;
            this.factionDescription = this.getFactionDescription(faction);
            this.factionPopupImages.background = this.getFactionPopupBackgroundImg(faction);
            this.factionPopupImages.logo = this.getFactionPopupLogo(faction);
            this.isFactionDetailsVisible = true;
        },
        closeFactionDetails() {
            this.isFactionDetailsVisible = false;
        },
        getFactionDescription(faction) {
            const descriptions = {
                HUMANS: "Humans, renowned for their cunning, courage, and adaptability, united the factions in the last Throne War and claimed dominion over the world. Yet, years of prosperity have corrupted their hearts. With the last Emperor's death and no heir to the throne, the human realm is fracturing. Kings vie for power, each claiming the imperial title. Can you unite the fractured human kingdoms and restore the Empire to its former glory? Can you lead humanity to once more dominate the world?",
                ORCS: 'The Orcs, a brutish, bloodthirsty race of warriors, suffered devastating losses supporting the demonic faction in the Throne Wars. Driven from their lands, they now roam as nomadic hordes, scavenging the desolate wastes for forgotten treasures. Now, armed with ancient knowledge and battle-hardened, they stand at the precipice of war. But they lack a leader, a warlord to unite their clans and claim the throne. Could you be the one to forge a new orcish empire? Could you rule the world?',
                ANGELS: 'The angelic faction, beings of wisdom, compassion, and order, entered the Throne War late. Residing in the celestial realm, they were detached from the affairs of Noctia until the demonic hordes threatened to consume the world. With celestial gates swinging open, angelic legions descended upon the demonic armies. After a long and bloody conflict, the angels triumphed, but at a great cost. Having ensured the human Emperor would maintain order, they returned to the heavens. But perhaps they were wrong to entrust Noctia to mortals. Could you lead the angels once more, and bring true peace and order to the world?',
                DEMONS: 'The Demons, cruel, powerful, and cunning entities, were the most formidable force in the last Throne War. They sought to conquer Noctia and transform it into a hellish realm. However, a united front of factions forced them back through the portals from which they came. After three hundred winters of gathering their strength, the Demons are poised to return. Can you lead them to victory, reclaim Noctia, and make it your infernal domain?',
                ELVES: 'The Elves, renowned for their wisdom, grace, and prowess in battle, stood with humanity in the last Throne War and claimed dominion over the forests. For centuries, they lived in tranquility. Yet, as various races, particularly humans, encroached upon their woodlands, the elves have been forced to defend their realm. Now, they sharpen their blades and gather their magical artifacts. All they lack is a queen to unite their kingdoms and lead them to victory. Could you be that queen? Could you restore peace to the world?',
                UNDEADS: "The Undead, cunning, patient, and wise necromancers, were resurrected by powerful death mages to aid humanity in the last Throne War. However, fearing their growing power, the Emperor ordered their extermination. The Undead leaders, formidable beings, evaded capture and vanished into the shadows. Now, they dwell in the swamps of Noctia, their undead armies growing stronger with each fallen soldier. They seek vengeance against humanity. Can you unite the Undead and lead them to conquer the world, creating a realm where only the undead shall reign?"
            };

            return descriptions[faction] || '';
        },
        getFactionPopupBackgroundImg(faction) {
            const images = {
                HUMANS: humanBackground,
                ORCS: orcBackground,
                ANGELS: angelBackground,
                DEMONS: demonBackground,
                ELVES: elfBackground,
                UNDEADS: undeadBackground
            };

            return images[faction] || '';
        },
        getFactionPopupLogo(faction) {
            const logos = {
                HUMANS: humanLogo,
                ORCS: orcLogo,
                ANGELS: angelLogo,
                DEMONS: demonLogo,
                ELVES: elfLogo,
                UNDEADS: undeadLogo
            };

            return logos[faction] || '';
        },
        getFactionGradientColor(faction) {
            const colors = {
                HUMANS: "#0D2CAB",
                ORCS: "#D1001C",
                ANGELS: "#FFFFFF",
                DEMONS: "#D1001C",
                ELVES: "#4ACC17",
                UNDEADS: "#ABE5CA"
            };

            return colors[faction] || '';
        },
        getButtonColor(faction) {
            const colors = {
                HUMANS: "#0D2CAB",
                ORCS: "#13460E",
                ANGELS: "#C6AC47",
                DEMONS: "#9E071A",
                ELVES: "#13460E",
                UNDEADS: "#048556"
            };

            return colors[faction] || '';
        },
        selectFaction() {
            this.$router.push(`/?faction=${this.selectedFaction.toLowerCase()}`);
        }
    }
};
</script>

<style>
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

.faction-title-shadow {
    text-shadow: -1px -1px #000000,
        -1px 1px #000000,
        -1px 1px #000000,
        1px -1px #000000,
        1px 1px #000000,
        -1px -1px #000000,
        -1px -1px #000000,
        0px 1px #000000 !important
}
</style>