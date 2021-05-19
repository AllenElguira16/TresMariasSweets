<template>
  <main class="grid grid-cols-12">
    <navbar-component class="col-span-1"></navbar-component>
    <div class="col-span-11 w-full p-4">
      <header-component></header-component>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import { useStore } from "vuex";

import NavbarComponent from "./_components/navbar";
import HeaderComponent from "./_components/header";

export default {
  components: {
    NavbarComponent,
    HeaderComponent,
  },
  async setup() {
    const store = useStore();

    await store.dispatch("user/setUser");
  },
};
</script>
