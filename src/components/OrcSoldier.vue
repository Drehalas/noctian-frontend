<template>
  <div class="container-center-horizontal">
    <div class="orc-soldier screen">
      <!-- Header and banner -->
      <div class="frame-30">
        <div class="rectangle-3"></div>
        <div class="rectangle-1"></div>
        <img class="orc-banner" src="@/assets/Orc%20images/Orc%20Artifact/Orc%20banner.png" alt="Orc banner" />

        <!-- Coin and Score -->
        <div class="frame-10">
          <div class="group-9 group-coin">
            <div class="group-8 group-coin-icon">
              <img class="coin-icon" src="@/assets/global/Common/Gold.png" alt="Gold Coin" />
            </div>
          </div>
          <h1 class="title">507,981</h1>
        </div>

        <!-- Navigation Bar -->
        <div class="base-soldier-bar">
          <div class="frame-16">
            <!-- Navigation links -->
            <div class="frame-15"><div class="hero">Hero</div></div>
            <div class="frame-20"><div class="soldier">Soldier</div></div>
            <div class="frame-19"><div class="armory">Armory</div></div>
            <div class="frame-18"><div class="spell">Spell</div></div>
            <div class="frame-17"><div class="artifact">Artifact</div></div>
            <div class="frame-16"><div class="peon">Peon</div></div>
          </div>
        </div>


        <!-- Soldier Selection -->
        <div class="soldier-select">
          <div v-for="soldier in soldiers" :key="soldier.id" class="property">
            <div class="group-18 soldier-item">
              <div class="rectangle-11"></div>
              <div class="frame-22">
                <div class="lvl-0">lvl 0</div>
                <div class="frame-4">
                  <div class="group-9"><img class="gold" src="@/assets/global/Common/Gold.png" alt="Gold" /></div>
                  <div class="x15692-k">{{ soldier.cost }}K</div>
                </div>
              </div>
              <div class="frame-21">
                <div class="soldier-name">{{ soldier.name }}</div>
                <div class="frame-20">
                  <div class="raid-income-per-hour">Raid income per hour</div>
                  <div class="frame-19">
                    <div class="group-9"><img class="gold" src="@/assets/global/Common/Gold.png" alt="Gold" /></div>
                    <div class="x0">0</div>
                  </div>
                </div>
              </div>
            </div>
            <img :src="soldier.image" :alt="soldier.name" class="soldier-image" />
          </div>
        </div>
      </div>

      <!-- General Attack Bar -->
      <div class="general-attack-bar">
        <div class="frame-11">
          <div class="frame-13">
            <div class="group"><img class="attack-icon" src="@/assets/global/Attack/Ork%20attack%20logo.png" alt="Attack" />
              <div class="attack">Attack</div>
            </div>
          </div>
          <div class="frame-17">
            <div class="group"><div class="base">Base</div><img class="base-icon" src="@/assets/global/Common/Base%20logo.png" alt="Base" /></div>
          </div>
          <div class="frame-18">
            <div class="group"><img class="ladder-icon" src="@/assets/global/Common/Ladder%20logo.png" alt="Ladder" />
              <div class="ladder">Ladder</div>
            </div>
          </div>
          <div class="frame-15">
            <div class="group"><img class="war-icon" src="@/assets/global/Common/War%20logo.png" alt="War" />
              <div class="war">War</div>
            </div>
          </div>
          <div class="frame-14">
            <div class="group"><div class="treasure">Treasure</div><img class="treasure-icon" src="@/assets/global/Common/Treasure%20logo.png" alt="Treasure" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import soldierService from '@/services/soldierService.js';
export default {
  data() {
    return {
      soldiers: [
        { id: 1, name: 'Black Orc Warrior', image: 'orc/soldier/black_orc_warrior.png', description: 'Strong melee fighter' },
        { id: 2, name: 'Direwolf', image: 'orc/soldier/direwolf.png', description: 'Fast and ferocious creature' },
        { id: 3, name: 'Dragon Rider', image: 'orc/soldier/dragon_rider.png', description: 'High flying siege unit' },
        { id: 4, name: 'Goblin Archer', image: 'orc/soldier/goblin_archer.png', description: 'Ranged unit with quick attacks' },
        { id: 5, name: 'Harpy', image: 'orc/soldier/harpy.png', description: 'Agile aerial attacker' },
        { id: 6, name: 'Hell Lord', image: 'orc/soldier/hell_lord.png', description: 'Powerful demon commander' },
        { id: 7, name: 'Kobold', image: 'orc/soldier/Kobold.png', description: 'Weak but numerous fighter' },
        { id: 8, name: 'Necromancer', image: 'orc/soldier/Necromancer.png', description: 'Master of undead magic' },
        { id: 9, name: 'Orc Axeman', image: 'orc/soldier/orc_axeman.png', description: 'Brutal frontline warrior' },
        { id: 10, name: 'Orc Champion', image: 'orc/soldier/orc_champion.png', description: 'Elite battlefield hero' },
        { id: 11, name: 'Orc Grunt', image: 'orc/soldier/orc_grunt.png', description: 'Basic infantry unit' },
        { id: 12, name: 'Orc Hunter', image: 'orc/soldier/orc_hunter.png', description: 'Skilled tracker and marksman' },
        { id: 13, name: 'Orc Raider', image: 'orc/soldier/orc_raider.png', description: 'Rapid assault specialist' },
        { id: 14, name: 'Orc Shaman', image: 'orc/soldier/orc_shaman.png', description: 'Wielder of mystical powers' },
        { id: 15, name: 'Orc Spearman', image: 'orc/soldier/orc_spearman.png', description: 'Polearm expert with extended reach' },
        { id: 16, name: 'Orc Warlock', image: 'orc/soldier/orc_warlock.png', description: 'Dark sorcerer with destructive spells' },
        { id: 17, name: 'Orc Warlord', image: 'orc/soldier/orc_warlord.png', description: 'Supreme military leader' },
        { id: 18, name: 'Orc Youngling', image: 'orc/soldier/orc_youngling.png', description: 'Youthful fighter, eager to prove' },
        { id: 19, name: 'Spider Swarm', image: 'orc/soldier/spider_swarm.png', description: 'Overwhelming group of venomous spiders' },
        { id: 20, name: 'Stone Giant', image: 'orc/soldier/stone_giant.png', description: 'Gargantuan creature with immense strength' },
        { id: 21, name: 'Troll', image: 'orc/soldier/Troll.png', description: 'Regenerating brute with immense resilience' },
        { id: 22, name: 'Warlock Shaman', image: 'orc/soldier/warlock_shaman.png', description: 'Conjurer of forbidden spells' },
        { id: 23, name: 'Wolf', image: 'orc/soldier/wolf.png', description: 'Fast pack hunter with deadly jaws' }
      ]
    };
  }
};
</script>

<!-- <style src="@/styles/soldier.css"></style> -->
