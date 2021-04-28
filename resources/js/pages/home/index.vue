<template>
  <main class="auto-cols-auto gap-0 grid grid-flow-col">
    <navbar-component></navbar-component>
    <div class="w-full p-4">
      <header-component :isLoggedIn="user !== null"></header-component>
      <div class="py-4">
        <div class="gap-4 grid grid-cols-5">
          <cake-component
            v-for="(cake, key) in cakes"
            :key="key"
            :cake="cake"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavbarComponent from "./components/navbar";
import HeaderComponent from "./components/header";
import CakeComponent from "./components/cake";

export default {
  data() {
    return {
      cakes: null,
      user: null,
    };
  },
  async mounted() {
    let response = await axios.get("/api/cakes");
    this.cakes = response.data;

    response = await axios.get("/api/user");
    if (response.data.success) {
      this.user = response.data.user;
    }
    // console.log(response.data);
  },
  components: {
    NavbarComponent,
    HeaderComponent,
    CakeComponent,
  },
};
</script>
