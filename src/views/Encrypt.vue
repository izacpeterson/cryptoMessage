<script setup>
import CryptoJS from "crypto-js";
</script>
<template>
  <div class="input">
    <label for="">Message: <input v-model="encmessage" type="text" /></label>
    <label for="">Password: <input v-model="encpassword" type="text" /></label>
    <button @click="encrypt({ encmessage })">Encrypt</button>
  </div>
  <h1>Encrypted Message:</h1>
  <p>{{ encryptedMessage }}</p>
</template>
<script>
export default {
  data() {
    return {
      encmessage: "",
      encpassword: "",
      encryptedMessage: "",
    };
  },
  methods: {
    encrypt() {
      this.encryptedMessage = CryptoJS.AES.encrypt(
        this.encmessage,
        this.encpassword
      ).toString();
    },
  },
};
</script>
