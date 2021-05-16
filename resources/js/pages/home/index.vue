<template>
  <main class="auto-cols-auto gap-0 grid grid-flow-col">
    <navbar-component></navbar-component>
    <div class="w-full p-4">
      <header-component></header-component>
      <div class="py-4">
        <div class="gap-4 grid grid-cols-5">
          <cake-component
            v-for="(cake, key) in cakes"
            :key="key"
            :cake="cake"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import NavbarComponent from "./_components/navbar";
import HeaderComponent from "./_components/header";
import CakeComponent from "../_components/cake";

export default {
  components: {
    NavbarComponent,
    HeaderComponent,
    CakeComponent,
  },
  async setup() {
    const store = useStore();

    await store.dispatch("user/setUser");
    await store.dispatch("cake/setCakes");

    return {
      cakes: computed(() => store.state.cake.cakes),
    };
  },
};
</script>
