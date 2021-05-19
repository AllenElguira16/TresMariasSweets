<template>
  <form @submit.prevent="(e) => signin(input)" autocomplete="off">
    <header class="my-2">
      <h3>Admin Login</h3>
    </header>
    <div>
      <div class="mb-2">
        <label class="block w-full" for="sign-up-email">
          <small>Username</small>
        </label>
        <input
          class="block w-full px-4 py-1 border rounded"
          type="text"
          id="sign-up-email"
          placeholder="juan_delacruz"
          v-model.lazy="state.input.username"
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
          v-model.lazy="state.input.password"
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
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const state = reactive({
      input: {
        username: "",
        password: "",
      },
    });

    return {
      state,
      signin: () => store.dispatch("admin/logIn", state.input),
    };
  },
};
</script>
