<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-slate-800 text-white py-4 shadow-md">
    <div class="wrapper max-w-6xl mx-auto px-4">
      <nav class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <RouterLink to="/home" class="text-lg font-semibold hover:text-blue-300 transition-colors"
          >Home</RouterLink
        >
        <RouterLink to="/line" class="text-lg hover:text-blue-300 transition-colors"
          >NYC Population Growth vs Water Consumption</RouterLink
        >
        <RouterLink to="/bubble" class="text-lg hover:text-blue-300 transition-colors"
          >Crime Frequency by Time of Day and Month</RouterLink
        >
      </nav>
    </div>
  </header>

  <main class="max-w-6xl mx-auto p-4">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
