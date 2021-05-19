<template>
  <main class="flex h-screen">
    <section class="m-auto w-2/6 bg-white p-4 rounded shadow">
      <header class="text-center">
        <h1>Tres Maria's Sweets</h1>
      </header>
      <div>
        <div class="flex pt-2 text-gray-500">
          <button
            class="flex-1 border-b-2 py-2"
            :class="{ 'border-primary': state.accountState === 'edit' }"
            @click="changeAccountState('edit')"
          >
            EDIT
          </button>
          <button
            class="flex-1 border-b-2 py-2"
            :class="{ 'border-primary': state.accountState === 'delete' }"
            @click="changeAccountState('delete')"
          >
            DELETE
          </button>
        </div>
        <div>
          <edit-component v-if="state.accountState === 'edit'" />
          <delete-component v-else-if="state.accountState === 'delete'" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { reactive } from "vue";
import EditComponent from "./_components/edit";
import DeleteComponent from "./_components/delete";

export default {
  setup() {
    const state = reactive({
      accountState: "edit",
    });

    return {
      state,
      changeAccountState(newState) {
        state.accountState = newState;
      },
    };
  },
  components: {
    EditComponent,
    DeleteComponent,
  },
};
</script>
