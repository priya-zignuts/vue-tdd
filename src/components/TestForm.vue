<template>
  <div class="form-popup">
    <form class="form-container" @submit.prevent="submit">
      <label for="username"><b>Username:</b></label>
      <input v-model="form.username" id="username" type="text" />

      <label for="email"><b>Email:</b></label>
      <input v-model="form.email" id="email" type="email" />

      <label for="password"><b>Password:</b></label>
      <input v-model="form.password" id="password" type="password" />

      <button type="submit" class="btn">Sign Up</button>
      <h3>Already Register ? <a href="/login">Sign in</a></h3>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useForm } from "vee-validate";

const { handleSubmit } = useForm({
  validationSchema: {
    username(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    }
  }
});
const form = ref({
  username: "",
  email: "",
  password: "",
});

const submit = handleSubmit(() => {
  axios
    .post(`${process.env.VUE_APP_API_URL}register`, {
      email: form.value.email,
      password: form.value.password,
    })
    .then((res) => {
      console.log("Successful Submission!", res);
    });
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
/* Add your styles here */
.form-container {
  max-width: 300px;
  background-color: white;
  margin: auto;
  width: 50%;
}

.form-popup {
  display: block;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

.form-container input[type="text"],
.form-container input[type="email"],
.form-container input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container input[type="text"]:focus,
.form-container input[type="email"]:focus,
.form-container input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/login button */
.form-container .btn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.8;
}

.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}
</style>
