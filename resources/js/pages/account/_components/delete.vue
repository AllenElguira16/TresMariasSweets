<template>
  <form @submit.prevent="deleteAccount" autocomplete="off">
    <header class="my-2">
      <h3>Delete account</h3>
    </header>
    <div>
      <div class="mb-2">
        <div>
          Are you sure you want to delete your account? this process is
          irreversible
        </div>
      </div>
      <div class="flex">
        <router-link to="/" class="flex-1 text-center border-2"
          >Home</router-link
        >
        <button
          type="submit"
          class="flex-1 bg-red-600 w-full text-white py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["setUser", "deleteAccount"]),
  },
  async mounted() {
    await this.setUser();
  },
};
</script>