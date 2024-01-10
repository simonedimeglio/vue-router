<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'about'}">About</router-link>
    <router-link :to="{name: 'users'}">Users</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #fff;
  background: #42b983;
  padding: 10px 15px;
  border-radius: 12px;
}
</style>
