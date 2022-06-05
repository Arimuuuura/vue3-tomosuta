<template>
  <div>
    <input v-model="title" type="text">
  </div>
  <div>
    <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
  </div>
  <div class="center">
    <button @click="save">保存</button>
    <button v-if="memo.id" @click="remove">削除</button>
  </div>
</template>

<script>
export default {
	name: 'MemoForm',
	props: [
		'memo'
	],
	data() {
		return {
			title: this.memo.title,
			content: this.memo.content
		}
	},
	methods: {
		save() {
			let memo = {
				title: this.title,
				content: this.content
			}

			// 新規メモか既存メモの編集か判断
			if(this.memo.id) {
				memo.id = this.memo.id
			}

			// vuex に入力データを保存
			this.$store.commit('save', memo);
			// vueRouter でホーム画面に飛ばす
			this.$router.push('/');
		},
		remove() {
			// 削除ボタンが押されたら store の delete を呼ぶ
			this.$store.commit('delete', this.memo.id);
			// delete 後ホーム画面に飛ばす
			this.$router.push('/');
		}
	}
}
</script>

<style scoped>
div {
	margin-bottom: 10px;
}
input[type=text] {
	width: 100%;
}
textarea {
	width: 100%;
	height: 30em;
}
button {
	width: 5em;
	margin: 3px;
}
.center {
	text-align: center;
}
</style>