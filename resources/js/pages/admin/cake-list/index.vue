<template>
  <div class="w-full p-4">
    <header-component></header-component>
    <div class="py-4">
      <div class="gap-4 grid grid-cols-5">
        <cake-component v-for="(cake, key) in cakes" :key="key" :cake="cake" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import CakeComponent from "../../_components/cake";
import HeaderComponent from "./_components/header";

export default {
  components: {
    CakeComponent,
    HeaderComponent,
  },
  async setup() {
    const store = useStore();

    await store.dispatch("cake/setCakes");

    return {
      cakes: computed(() => store.state.cake.cakes),
    };
  },
};
</script>
