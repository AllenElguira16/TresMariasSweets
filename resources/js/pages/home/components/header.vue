<template>
  <header
    class="bg-white flex justify-around py-4 shadow w-full rounded sticky top-0"
  >
    <div>
      <h1>Tres Maria's Sweets</h1>
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
    <div v-if="isLoggedIn" class="flex items-center">
      <button
        class="cursor-pointer hover:bg-primary hover:text-white rounded select-none text-center p-2 flex items-center"
      >
        <span class="material-icons">person</span>
        <span>PROFILE</span>
      </button>
      <div class="mx-2">|</div>
      <button
        class="cursor-pointer hover:bg-primary hover:text-white rounded select-none text-center p-2 flex items-center"
        @click="signOut"
      >
        <span class="material-icons">power_settings_new</span>
        <span>SIGN OUT</span>
      </button>
      <button class="bg-primary flex px-4 py-2 text-white ml-2">
        <span class="material-icons-outlined">shopping_cart</span>
      </button>
    </div>
    <div v-else class="flex items-center">
      <router-link
        to="/account"
        class="cursor-pointer hover:bg-primary hover:text-white rounded select-none text-center p-2 flex items-center"
      >
        <span class="material-icons">person</span>
        <span>SIGN IN</span>
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("user", ["signOut"]),
  },
  computed: {
    ...mapGetters("user", ["isLoggedIn"]),
  },
};
</script>