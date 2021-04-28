<template>
  <main class="auto-cols-auto gap-0 grid grid-flow-col">
    <navbar-component></navbar-component>
    <div class="w-full p-4">
      <header-component :isLoggedIn="isLoggedIn"></header-component>
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
      isLoggedIn: false,
    };
  },
  async mounted() {
    const response = await axios.get("/api/cakes");
    this.cakes = response.data;
    // console.log(response.data);
  },
  components: {
    NavbarComponent,
    HeaderComponent,
    CakeComponent,
  },
};
</script>
