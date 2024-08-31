<template>
  <div class="add-friend">
    <h1>Add Friend</h1>
    <p>Add a friend to join your adventures.</p>
    <!-- Example of an add friend form -->
    <form @submit.prevent="addFriend">
      <input type="text" v-model="friendName" placeholder="Enter friend's name" />
      <button type="submit">Add Friend</button>
    </form>
    <ul>
      <li v-for="friend in friends" :key="friend.id">
        {{ friend.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AddFriend',
  data() {
    return {
      friendName: '',
      friends: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        // Mock data for illustration
      ],
    };
  },
  methods: {
    addFriend() {
      if (this.friendName) {
        this.friends.push({ id: this.friends.length + 1, name: this.friendName });
        this.friendName = '';
        console.log(`Added friend: ${this.friendName}`);
      }
    },
  },
};
</script>

<style scoped>
.add-friend {
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
}
</style>
