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
      return this.$store.state.memos
    },
    hasMemos() {
      return this.$store.state.memos.length
    }
  }
}
</script>

<style>

</style>