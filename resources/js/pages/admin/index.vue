<template>
  <main
    v-if="loginStatus === 'logged-in'"
    class="auto-cols-auto gap-0 grid grid-flow-col"
  >
    <navbar-component></navbar-component>
    <router-view></router-view>
  </main>

  <main v-else-if="loginStatus === 'logged-out'" class="flex h-screen">
    <section class="m-auto w-2/6 bg-white p-4 rounded shadow">
      <header class="text-center">
        <h1>Tres Maria's Sweets</h1>
      </header>
      <div>
        <div class="flex pt-2 text-gray-500">
          <button class="flex-1 border-b-2 py-2 border-primary">
            Admin Login
          </button>
        </div>
        <div>
          <login-component></login-component>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import NavbarComponent from "./_components/navbar";
import LoginComponent from "./_components/login";

export default {
  components: {
    NavbarComponent,
    LoginComponent,
  },
  setup() {
    const store = useStore();

    return {
      loginStatus: computed(() => store.state.admin.loginStatus),
    };
  },
};
</script>