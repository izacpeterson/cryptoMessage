<script setup>
import CryptoJS from "crypto-js";
</script>
<template>
  <div class="input">
    <label for="">Message: <input v-model="message" type="text" /></label>
    <label for="">Password: <input v-model="password" type="text" /></label>
    <button @click="decrypt({ message })">Decrypt</button>
  </div>
  <h1>Decrypted Message:</h1>
  <h2>{{ decryptedMessage }}</h2>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      password: "",
      decryptedMessage: "",
    };
  },
  methods: {
    decrypt() {
      this.decryptedMessage = CryptoJS.AES.decrypt(
        this.message,
        this.password
      ).toString(CryptoJS.enc.Utf8);
    },
  },
};
</script>
