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
            :class="{ 'border-primary': accountState === 'edit' }"
            @click="changeAccountState('edit')"
          >
            EDIT
          </button>
          <button
            class="flex-1 border-b-2 py-2"
            :class="{ 'border-primary': accountState === 'delete' }"
            @click="changeAccountState('delete')"
          >
            DELETE
          </button>
        </div>
        <div>
          <edit-component v-if="accountState === 'edit'" />
          <delete-component v-else-if="accountState === 'delete'" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import EditComponent from "./components/edit";
import DeleteComponent from "./components/delete";

export default {
  data() {
    return {
      accountState: "edit",
    };
  },
  methods: {
    changeAccountState(newState) {
      this.accountState = newState;
    },
  },
  components: {
    EditComponent,
    DeleteComponent,
  },
};
</script>
