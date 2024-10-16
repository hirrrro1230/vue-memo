import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

const vuexPersist = new VuexPersistence({
    storage: localStorage
})

export default createStore({
  state: {
    count: 0,
    memos: []
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    // メモを保存する
    save (state, newMemo) {
        if (newMemo.id) {
            let x = state.memos.find(memo => memo.id === newMemo.id)
            x.title = newMemo.title
            x.content = newMemo.content
        } else {
            newMemo.id = ++state.count
            state.memos.unshift(newMemo)
        }    
    },
    delete(state, id) {
        state.memos = state.memos.filter(memo => memo.id !== id)
    },
  },
  actions: {
  },
  getters: {
    getCount: (state) => {
        return state.memos.length
    },
    getAll: (state) => {
        return state.memos
    },
    getMemoById: (state) => (id) => {
        return state.memos.find(memo => memo.id === id)
    },
    getMemosByWord: (state) => (searchWord) => {
      if (!searchWord) return state.memos; // 検索語がない場合は全てのメモを返す
      return state.memos.filter(memo => memo.title.includes(searchWord)); // 部分一致でフィルタリング
    }
  },
  modules: {
    plugins: [vuexPersist.plugin]
  },
  plugins: [vuexPersist.plugin]
});