<template>
  <div id="app">
    <b-navbar class="is-dark has-background-primary">
      <template #start>
        <b-navbar-item class="has-text-weight-bold" tag="router-link" to="/">
          Movie Search
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item class="has-text-weight-bold" tag="div">
          v1.0
        </b-navbar-item>
      </template>
    </b-navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
div.container {
  margin-top: 0.75rem;
}
</style>
