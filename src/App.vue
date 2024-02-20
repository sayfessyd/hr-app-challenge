<template>
  <router-view/>
</template>

<style lang="scss">
  body {
      font-family: var(--font-family);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
      border: 0;
      height: 100vh;
  }

  #app {
    height: 100%;
  }

  #login-view {
    height: 100%;
  }

  a {
    text-decoration: none;    
  }

  a:visited, a:active {
    color: var(--surface-700) !important;
  }
</style>
