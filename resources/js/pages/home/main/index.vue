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
          <div v-if="!carts.length">Seems like cart is empty</div>
          <cart-component
            v-for="(cart, index) in carts"
            :key="index"
            :cart="{
              id: index,
              ...cart,
            }"
          />
          <div
            v-if="carts.length !== 0"
            class="border w-100 bg-primary text-white text-center cursor-pointer py-2 rounded"
            @click="requestOrder"
          >
            Request Order
          </div>
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
      async requestOrder() {
        const carts = store.state.cart.carts.map((cart) => ({
          cake_id: cart.cake_id,
          instructions: cart.instructions,
          picture: cart.picture,
          quantity: cart.quantity,
          status: "requested",
        }));

        await store.dispatch("order/requestOrder", {
          carts,
        });
        await store.dispatch("cart/deleteAllCart");
      },
    };
  },
};
</script>
