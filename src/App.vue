<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/new">New</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

nav {
  padding: 30px;
  text-align: center;
}
</style>
