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
            :class="{ 'border-primary': state.accountState === 'sign-in' }"
            @click="changeAccountState('sign-in')"
          >
            SIGN IN
          </button>
          <button
            class="flex-1 border-b-2 py-2"
            :class="{ 'border-primary': state.accountState === 'sign-up' }"
            @click="changeAccountState('sign-up')"
          >
            SIGN UP
          </button>
        </div>
        <div>
          <signin-component v-if="state.accountState === 'sign-in'" />
          <signup-component v-else-if="state.accountState === 'sign-up'" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { reactive, ref } from "vue";

import SignupComponent from "./_components/signup";
import SigninComponent from "./_components/signin";

export default {
  components: {
    SignupComponent,
    SigninComponent,
  },
  setup() {
    const state = reactive({
      accountState: "sign-in",
    });

    return {
      state,
      changeAccountState(newState) {
        state.accountState = newState;
      },
    };
  },
};
</script>
