<template>
  <main class="flex h-screen">
    <section class="m-auto w-2/6 bg-white p-4 rounded shadow">
      <header class="text-center">
        <h1>Tres Maria's Sweets</h1>
      </header>
      <div>
        <div class="flex pt-2 text-gray-500">
          <button
            class="flex-1 border-b-2 py-2"
            :class="{ 'border-primary': accountState === 'sign-in' }"
            @click="changeAccountState('sign-in')"
          >
            SIGN IN
          </button>
          <button
            class="flex-1 border-b-2 py-2"
            :class="{ 'border-primary': accountState === 'sign-up' }"
            @click="changeAccountState('sign-up')"
          >
            SIGN UP
          </button>
        </div>
        <div>
          <div v-if="accountState === 'sign-in'">
            <!-- <input type="text" />
            <input type="password" />
            <button type="submit">Sign In</button> -->
          </div>
          <signup-component v-else-if="accountState === 'sign-up'" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SignupComponent from "./components/signup";
export default {
  data() {
    return {
      accountState: "sign-up",
    };
  },
  methods: {
    changeAccountState(newState) {
      this.accountState = newState;
    },
  },
  components: {
    SignupComponent,
  },
};
</script>
