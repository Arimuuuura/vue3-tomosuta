import { createStore } from 'vuex'

export default createStore({
  // 現在の状態
  state: {
    memos: []
  },
  // 状態の取得
  getters: {
  },
  // 更新関数
  mutations: {
    // memo の保存
    save(state, newMemo) {
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
