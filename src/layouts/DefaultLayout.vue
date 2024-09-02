<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="default-layout">
    <Attack />
  </div>
</template>

<script>
import Attack from '@/pages/Hero.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Attack,
  },
};
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>