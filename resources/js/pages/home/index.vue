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
import { mapActions, mapState } from "vuex";

import NavbarComponent from "./components/navbar";
import HeaderComponent from "./components/header";
import CakeComponent from "./components/cake";

export default {
  async mounted() {
    await this.setCakes();
    await this.setUser();
    console.log(this.cakes);
  },
  components: {
    NavbarComponent,
    HeaderComponent,
    CakeComponent,
  },
  methods: {
    ...mapActions("user", ["setUser"]),
    ...mapActions("cake", ["setCakes"]),
  },
  computed: {
    ...mapState("cake", ["cakes"]),
  },
};
</script>
