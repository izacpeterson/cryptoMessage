<template>
  <div class="input">
    <label for="">Message: <input v-model="message" type="text" /></label>
    <label for="">Key: <input v-model="password" type="text" /></label>
    <div class="buttons">
      <button @click="encrypt()">Encrypt</button>
      <button @click="decrypt()">Decrypt</button>
    </div>
  </div>
  <div v-if="showEncryptMessage" class="message">
    <h1>Encrypted Message:</h1>
    <h2>{{ encryptedMessage }}</h2>
  </div>
  <div v-if="showDecryptMessage" class="message">
    <h1>Decrypted Message:</h1>
    <h2>{{ decryptedMessage }}</h2>
  </div>
</template>
<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      message: "",
      password: "",
      encrypedMessage: "",
      decryptedMessage: "",
      showEncryptMessage: false,
      showDecryptMessage: false,
    };
  },
  methods: {
    encrypt() {
      this.encryptedMessage = CryptoJS.AES.encrypt(this.message, this.password).toString();
      this.message = "";
      this.showEncryptMessage = true;
      this.showDecryptMessage = false;
    },
    decrypt() {
      this.decryptedMessage = CryptoJS.AES.decrypt(this.message, this.password).toString(CryptoJS.enc.Utf8);
      this.showEncryptMessage = false;
      this.showDecryptMessage = true;
    },
  },
};
</script>
<style>
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
button {
  margin: 20px;
  padding: 10px;
  background-color: #3fa03f;
  color: white;
  border: none;
}
input {
  border: none;
  font-size: 24px;
  outline: none;
}
h2 {
  margin: 10px;
  padding: 10px;
  overflow-wrap: break-word;
  max-width: 75%;
}
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
