<script>
import { RouterLink, RouterView } from "vue-router";
import logo from "./assets/logo.svg";
</script>

<template>
  <header>
    <img src="./assets/logo.svg" alt="" />
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
}
img {
  width: 75px;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
