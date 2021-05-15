<template>
  <main class="auto-cols-auto gap-0 grid grid-flow-col">
    <navbar-component></navbar-component>
    <router-view></router-view>
  </main>
</template>

<script>
import NavbarComponent from "./_components/navbar";

export default {
  components: {
    NavbarComponent,
  },
};
</script>