<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

function printUser(
  firstName: string,
  lastName: string,
  number: number,
  street: string,
  code: number,
  city: string,
  country: string
) {
  console.log(
    `${firstName} ${lastName} lives at ${number}, ${street}, ${code} in ${city}, ${country}`
  )
}
printUser(
  'John',
  'Doe',
  48,
  '998 Primrose Lane',
  53718,
  'Madison',
  'United States of America'
)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img
        src="./assets/vue.svg"
        class="logo vue vuevuevuevuevuevuevuevuevue"
        alt="Vue logo"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
