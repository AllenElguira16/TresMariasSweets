<template>
  <header
    class="bg-white flex justify-around py-4 shadow w-full rounded sticky top-0 z-10"
  >
    <div>
      <h1>Admin</h1>
    </div>
    <div class="flex items-center">
      <span class="material-icons">search</span>
      <div class="mx-2">|</div>
      <input
        type="text"
        placeholder="Search for cakes"
        class="border-black border-b-2"
      />
    </div>
    <div class="flex items-center">
      <div
        class="cursor-pointer hover:bg-primary hover:text-white rounded select-none text-center p-2 flex items-center"
        @click="onModalOpen"
      >
        <span class="material-icons">add</span>
        <span>Add Cake</span>
      </div>
    </div>
    <modal
      :isActive="state.isActive"
      v-on:close="onModalClose"
      title="Deactivate account"
    >
      <form
        @submit.prevent="addCake"
        class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
      >
        <div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Add Cake
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
            @click="$emit('close')"
            ref="cancelButtonRef"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Add
          </button>
        </div>
      </form>
    </modal>
  </header>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import Modal from "../../../_components/modal";

export default {
  components: {
    Modal,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      isActive: false,
      input: {
        title: "",
        init_price: 0,
        picture: null,
      },
    });

    return {
      state,
      addCake: () => store.dispatch("cake/addCake", state.input),
      addImage: (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.readAsDataURL(file);
        reader.onload = () => {
          state.input.picture = reader.result;
        };
      },
      onModalOpen: () => (state.isActive = true),
      onModalClose: () => (state.isActive = false),
    };
  },
};
</script>