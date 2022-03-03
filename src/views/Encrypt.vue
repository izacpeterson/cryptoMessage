<script setup>
import CryptoJS from "crypto-js";
</script>
<template>
  <div class="input">
    <label for="">Message: <input v-model="message" type="text" /></label>
    <label for="">Password: <input v-model="password" type="text" /></label>
    <button @click="encrypt({ message })">Encrypt</button>
  </div>
  <h1>Encrypted Message:</h1>
  <p>{{ encryptedMessage }}</p>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      password: "",
      encryptedMessage: "",
    };
  },
  methods: {
    encrypt() {
      this.encryptedMessage = CryptoJS.AES.encrypt(
        this.message,
        this.password
      ).toString();
    },
  },
};
</script>
