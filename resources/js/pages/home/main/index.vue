<template>
  <div class="grid grid-cols-12 py-4">
    <div class="col-span-8">
      <div class="gap-4 grid grid-cols-4">
        <cake-component v-for="(cake, key) in cakes" :key="key" :cake="cake" />
      </div>
    </div>
    <div class="col-span-4">
      <div>
        <header class="bg-primary rounded-t-2xl p-4 text-white">
          Cart List
        </header>
        <div class="bg-white rounded-b-2xl p-4">
          <div v-if="!cart">Seems like cart is empty</div>
          <cart-component
            v-for="(cart, index) in carts"
            :key="index"
            :cart="{
              id: index,
              ...cart,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import CakeComponent from "../../_components/cake";
import CartComponent from "../_components/cart";

export default {
  components: {
    CakeComponent,
    CartComponent,
  },
  async setup() {
    const store = useStore();

    await store.dispatch("cake/setCakes");

    return {
      cakes: computed(() => store.state.cake.cakes),
      carts: computed(() => store.state.cart.carts),
    };
  },
};
</script>
