<template>
  <form @submit="signin" autocomplete="off">
    <header class="my-2">
      <h3>Sign in to your account</h3>
    </header>
    <div>
      <div class="mb-2">
        <label class="block w-full" for="sign-up-email">
          <small>E-Mail</small>
        </label>
        <input
          class="block w-full px-4 py-1 border rounded"
          type="text"
          id="sign-up-email"
          placeholder="juan_delacruz@sample.com"
          v-model.lazy="input.email"
        />
      </div>
      <div class="mb-2">
        <label class="block w-full" for="sign-up-password">
          <small>Password</small>
        </label>
        <input
          class="block w-full px-4 py-1 border rounded"
          type="password"
          id="sign-up-password"
          placeholder="********"
          v-model.lazy="input.password"
        />
      </div>
      <div class="flex">
        <router-link to="/" class="flex-1 text-center border-2"
          >Home</router-link
        >
        <button
          type="submit"
          class="flex-1 bg-primary w-full text-white py-1 rounded"
        >
          Sign In
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      input: {
        // _token: window.Laravel.csrfToken,
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      const { data } = await axios.post("/api/user/sign-in", this.input);
      alert(data.message);
      if (data.success) {
        this.$router.push("/");
      }
    },
  },
};
</script>