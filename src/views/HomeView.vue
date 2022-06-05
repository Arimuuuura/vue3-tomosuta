<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
      {{ `title: ${memo.title} content: ${memo.content}` }}
      </li>
    </ul>
    <p v-else>No memo..</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    memos() {
      return this.$store.getters.getAll
    },
    hasMemos() {
      return this.$store.getters.getCount
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>