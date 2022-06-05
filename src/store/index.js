import { createStore } from 'vuex'

export default createStore({
  // 現在の状態
  state: {
    count: 0,
    memos: []
  },
  // 状態の取得
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => id === memo.id)
    }
  },
  // 更新関数
  mutations: {
    // memo の保存
    save(state, newMemo) {
      newMemo.id = ++state.count;
      state.memos.unshift(newMemo)
    }
  },
  // 非同期通信
  actions: {
  },
  // state をまとめたもの
  modules: {
  }
})
