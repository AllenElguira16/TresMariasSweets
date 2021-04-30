<template>
  <form @submit.prevent="() => editAccount(input)" autocomplete="off">
    <header class="my-2">
      <h3>Edit your account</h3>
    </header>
    <div>
      <div class="mb-2">
        <label class="block w-full" for="sign-up-firstname">
          <small>First Name</small>
        </label>
        <input
          class="block w-full px-4 py-1 border"
          type="text"
          id="sign-up-firstname"
          placeholder="Juan"
          v-model.lazy="input.firstname"
        />
      </div>
      <div class="mb-2">
        <label class="block w-full" for="sign-up-lastname">
          <small>Last Name</small>
        </label>
        <input
          class="block w-full px-4 py-1 border rounded"
          type="text"
          id="sign-up-lastname"
          placeholder="Dela Cruz"
          v-model.lazy="input.lastname"
        />
      </div>
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
          Update
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      input: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["setUser", "editAccount"]),
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  async mounted() {
    await this.setUser();
    Object.keys(this.input).forEach((key) => {
      this.input[key] = this.user[key] || "";
    });
  },
};
</script>