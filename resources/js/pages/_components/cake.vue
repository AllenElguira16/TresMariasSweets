<template>
  <div class="cursor-pointer hover:shadow relative h-48">
    <div class="absolute p-4" style="top: 0; left: 0">
      <div class="grid gap-4">
        <div>
          <span class="border bg-primary text-white py-1 px-2">{{
            cake.init_price
          }}</span>
        </div>
        <div>
          <span class="border bg-white text-dark py-1 px-2">{{
            cake.title
          }}</span>
        </div>
      </div>
    </div>
    <div
      v-if="adminLoginStatus === 'logged-in'"
      class="absolute p-4"
      style="top: 0; right: 0"
    >
      <div class="grid gap-4">
        <div>
          <span
            class="material-icons-outlined border bg-yellow-400 text-white py-1 px-2"
            @click="onEditOpenModal"
          >
            mode_edit
          </span>
        </div>
        <div>
          <span
            class="material-icons-outlined border bg-red-400 text-white py-1 px-2"
            @click="onDeleteOpenModal"
          >
            delete
          </span>
        </div>
      </div>
    </div>
    <!-- Edit Cake -->
    <modal
      :isActive="state.isEditActive"
      v-on:close="onEditCloseModal"
      title="Edit Cake"
    >
      <form
        @submit.prevent="editCake"
        class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
      >
        <div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Edit Cake
            </h3>
            <div class="mt-2">
              <div class="text-sm text-gray-500">
                <div class="mb-2">
                  <label class="block w-full" for="cake-title">
                    <small>Title</small>
                  </label>
                  <input
                    class="block w-full px-4 py-1 border rounded"
                    type="text"
                    id="cake-title"
                    placeholder="Strawberry Shortcake"
                    v-model.lazy="state.input.title"
                  />
                </div>
                <div class="mb-2">
                  <label class="block w-full" for="cake-init-price">
                    <small>Initial Price</small>
                  </label>
                  <input
                    class="block w-full px-4 py-1 border rounded"
                    type="number"
                    id="cake-init-price"
                    placeholder="300"
                    v-model.lazy="state.input.init_price"
                  />
                </div>
                <div class="mb-2">
                  <label class="block w-full" for="cake-picture">
                    <small>Picture</small>
                  </label>
                  <input
                    class="block w-full px-4 py-1 border rounded"
                    accept="image/*"
                    type="file"
                    id="cake-picture"
                    v-on:change="addImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 py-3 flex justify-between">
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="onEditCloseModal"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </modal>
    <!-- Delete Cake -->
    <modal
      :isActive="state.isDeleteActive"
      v-on:close="onDeleteCloseModal"
      title="Edit Cake"
    >
      <form
        @submit.prevent="deleteCake"
        class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
      >
        <div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Delete Cake
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Are you sure you want to delete?
              </p>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 py-3 flex justify-between">
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="onDeleteCloseModal"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Delete
          </button>
        </div>
      </form>
    </modal>
    <!-- Shopping Cart -->
    <div
      v-if="userLoginStatus"
      class="absolute p-4"
      style="left: 0; right: 0; bottom: 0"
    >
      <div class="grid gap-4 justify-around">
        <div
          class="border bg-yellow-400 text-white py-1 px-2 flex align-items-center w-32"
          @click="onAddToCartOpenModal"
        >
          <span>Add to Cart</span>
          <span class="material-icons-outlined"> add_shopping_cart </span>
        </div>
      </div>
    </div>
    <div class="overflow-hidden h-full">
      <img :src="cake.picture" :alt="cake.title" class="h-full w-full" />
    </div>
    <!-- Shopping Cart Instructions -->
    <modal
      :isActive="state.isAddToCartActive"
      v-on:close="onAddToCartCloseModal"
      title="Add To Cart"
    >
      <form
        @submit.prevent="addToCart"
        class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
      >
        <div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Add To Cart
            </h3>
            <div class="mt-2">
              <div class="text-sm text-gray-500">
                <div class="mb-2">
                  <label class="block w-full" for="add-to-cart-instruction">
                    <small>Instruction</small>
                  </label>
                  <textarea
                    class="block w-full px-4 py-1 border rounded resize"
                    type="text"
                    id="add-to-cart-instruction"
                    placeholder="e.g. Cake Title: John Doe"
                    v-model.lazy="state.cart.instruction"
                  />
                </div>
                <div class="mb-2">
                  <label class="block w-full" for="add-to-cart-picture">
                    <small>Example Pictures</small>
                  </label>
                  <input
                    class="block w-full px-4 py-1 border rounded"
                    accept="image/*"
                    type="file"
                    id="add-to-cart-picture"
                    v-on:change="addImageForCart"
                  />
                </div>
                <div class="mb-2">
                  <label class="block w-full">
                    <small>Quantity</small>
                  </label>
                  <button
                    type="button"
                    class="material-icons"
                    :class="
                      state.cart.quantity > 1 ? 'text-primary' : 'text-gray-400'
                    "
                    :disabled="state.cart.quantity === 1"
                    @click="state.cart.quantity--"
                  >
                    remove
                  </button>
                  <div class="inline-block align-top mx-2">
                    {{ state.cart.quantity }}
                  </div>
                  <button
                    type="button"
                    class="material-icons text-primary"
                    @click="state.cart.quantity++"
                  >
                    add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 py-3 flex justify-between">
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="onAddToCartCloseModal"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Add to Cart
          </button>
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import Modal from "./modal";

export default {
  props: ["cake"],
  components: {
    Modal,
  },
  setup(props) {
    const store = useStore();
    const state = reactive({
      isEditActive: false,
      isDeleteActive: false,

      isAddToCartActive: false,

      input: {
        title: props.cake.title,
        init_price: props.cake.init_price,
        picture: null,
      },
      cart: {
        instruction: "",
        quantity: 1,
        picture: null,
      },
    });

    return {
      state,
      adminLoginStatus: computed(() => store.state.admin.loginStatus),
      userLoginStatus: computed(() => store.state.user.user),
      addImage: (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.readAsDataURL(file);
        reader.onload = () => {
          state.input.picture = reader.result;
        };
      },
      editCake: async () => {
        await store.dispatch("cake/editCake", {
          id: props.cake.id,
          input: state.input,
        });
      },
      deleteCake: async () => {
        await store.dispatch("cake/deleteCake", {
          id: props.cake.id,
        });
        state.isDeleteActive = false;
      },

      onEditOpenModal: () => (state.isEditActive = true),
      onEditCloseModal: () => (state.isEditActive = false),

      onDeleteOpenModal: () => (state.isDeleteActive = true),
      onDeleteCloseModal: () => (state.isDeleteActive = false),

      onAddToCartOpenModal: () => (state.isAddToCartActive = true),
      onAddToCartCloseModal: () => (state.isAddToCartActive = false),

      addImageForCart: (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.readAsDataURL(file);
        reader.onload = () => {
          state.cart.picture = reader.result;
        };
      },
      addToCart: async () => {
        await store.dispatch("cart/addToCart", {
          cake_id: props.cake.id,
          title: props.cake.title,
          init_price: props.cake.init_price,
          instructions: state.cart.instruction,
          picture: state.cart.picture,
          quantity: state.cart.quantity,
        });
        state.isAddToCartActive = false;
      },
    };
  },
};
</script>