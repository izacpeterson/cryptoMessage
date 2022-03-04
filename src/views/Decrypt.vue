<script setup>
import CryptoJS from "crypto-js";
</script>
<template>
  <div class="input">
    <label for="">Message: <input v-model="decmessage" type="text" /></label>
    <label for="">Password: <input v-model="decpassword" type="text" /></label>
    <button @click="decrypt({ decmessage })">Decrypt</button>
  </div>
  <h1>Decrypted Message:</h1>
  <h2>{{ decryptedMessage }}</h2>
</template>
<script>
export default {
  data() {
    return {
      decmessage: "",
      decpassword: "",
      decryptedMessage: "",
    };
  },
  methods: {
    decrypt() {
      this.decryptedMessage = CryptoJS.AES.decrypt(
        this.decmessage,
        this.decpassword
      ).toString(CryptoJS.enc.Utf8);
    },
  },
};
</script>
