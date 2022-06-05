<template>
<div>
  <MemoForm v-if="memo" :memo="memo" />
  <p v-else>指定されたメモはありません。</p>
</div>
</template>

<script>
import MemoForm from '@/components/MemoForm'

export default {
	name: 'EditView',
	components: {
		MemoForm
	},
	computed: {
		memo() {
			const id = parseInt(this.$route.params.id)
			return this.$store.getters.getMemoById(id)
		}
	}
}
</script>

<style>

</style>