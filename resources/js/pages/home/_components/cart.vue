<template>
  <div>
    <div class="flex">
      <div class="flex-1">{{ cart.title }}</div>
      <div>{{ cart.init_price }}</div>
    </div>
    <div class="flex justify-between">
      <div>
        <small class="block text-gray-400">
          <span>
            {{
              cart.instruction.length ? cart.instruction : "~No instruction~"
            }}
          </span>
        </small>
        <small class="block text-gray-400">
          <span>
            {{ cart.picture ? "~Picture Included~" : "~No Picture~" }}
          </span>
        </small>
      </div>
      <div>
        <button
          class="material-icons text-primary"
          v-if="cart.quantity !== 1"
          @click="() => updateQuantity(cart.quantity - 1)"
        >
          remove
        </button>
        <button
          v-else
          class="material-icons-outlined text-primary"
          @click="deleteCart"
        >
          delete
        </button>
        <div class="inline-block align-top mx-2">{{ cart.quantity }}</div>
        <button
          class="material-icons text-primary"
          @click="() => updateQuantity(cart.quantity + 1)"
        >
          add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: ["cart"],
  async setup(props) {
    const store = useStore();

    return {
      async deleteCart() {
        await store.dispatch("cart/deleteCart", {
          id: props.cart.id,
        });
      },
      async updateQuantity(newQuantity) {
        await store.dispatch("cart/updateQuantity", {
          id: props.cart.id,
          newQuantity,
        });
      },
    };
  },
};
</script>