<template>
    <div class="home">
      <input type="text" v-model="searchWord">
      <button @click="search">検索</button>
      <ul v-if="searchMemos.length > 0">
        <li v-for="searchMemo in searchMemos" :key="searchMemo.id">
          <router-link :to="{ name:'edit', params: { id: searchMemo.id } }">
          {{ searchMemo.title }}
          </router-link>
        </li>
      </ul>
      <ul v-else-if="hasMemos">
        <li v-for="memo in memos" :key="memo.id">
          <router-link :to="{ name:'edit', params: { id: memo.id } }">
          {{ memo.title }}
          </router-link>
        </li>
      </ul>
      <p v-else>メモはありません</p>
    </div>
</template>
<script>
export default {
  name: 'HomeView',
  data () {
    return {
      searchWord: '',
      searchMemos: []
    }
  },
  computed: {
    hasMemos() {
      return this.$store.getters.getCount
    },
    memos() {
      return this.$store.getters.getAll
    }
  },
  methods: {
    search() {
      this.searchMemos = this.$store.getters.getMemosByWord(this.searchWord)
      return this.searchMemos
    }
  },
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