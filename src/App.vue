<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <RouterLink to="/encrypt">Encrypt</RouterLink>
    <RouterLink to="/decrypt">Decrypt</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
header {
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}
a {
  color: white;
  text-decoration: none;
  padding: 20px;
}
a:hover {
  background-color: rgba(0, 255, 0, 0.205);
}
.input {
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  align-items: center;
  justify-content: center;
}
label {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 100%; */
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  margin: 20px;
  padding: 10px;
  background-color: rgb(63, 160, 63);
  color: white;
  border: none;
}
input {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: rgb(194, 194, 194);
  font-size: 24px;
  outline: none;
}
p,
h2 {
  margin: 10px;
  padding: 10px;
  overflow-wrap: break-word;
  max-width: 100%;
}
</style>
