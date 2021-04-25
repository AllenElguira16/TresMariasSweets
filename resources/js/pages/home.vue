<template>
  <div>
    <home-navbar />

    <div class="h-96 overflow-hidden relative bg-black bg-opacity-20">
      <!-- <img src="/images/logo.png" class="w-full" style="margin-top: -7rem" /> -->
      <div class="absolute text-white" style="top: 30%; left: 10%">
        <h1>Limited Edition Shoes</h1>
        <p>Check out my collections</p>
        <a class="inline-block border rounded px-4 py-3" href="collection.html"
          >View More</a
        >
      </div>
    </div>

    <div class="bg-gray-100 py-20 text-center">
      <h1 class="font-bold">My Favorites</h1>
      <div class="grid grid-cols-2">
        <div v-for="(image, key) in images" :key="key">
          <img :src="`/images/${image}`" :alt="image" />
          <div>COLLECTION {{ key + 1 }}</div>
        </div>
      </div>
    </div>

    <div class="flex bg-white">
      <img class="w-2/4 p-10" src="/images/ceo.jpg" />
      <div class="text-justify p-10">
        <h1 class="font-bold">Who am I</h1>
        <p class="text-gray-500">
          Me and my CEO's the owner of Cakes Store would like to thank all the
          people supports us to build this Cakes Store without you we cannot
          achieve this kind of achievement we want to achieve keep on
          suppporting us and we will support you too! Thankyou Mabuhay and
          Godbless us all!
        </p>
      </div>
    </div>

    <contact-form />

    <home-footer />
  </div>
</template>

<script>
import HomeNavbar from "../components/HomeNavbar";
import HomeFooter from "../components/HomeFooter";
import ContactForm from "../components/ContactForm";

export default {
  setup() {},
  data() {
    return {
      images: ["r.png", "t.png", "s.png", "v.png"],
    };
  },
  components: {
    HomeNavbar,
    HomeFooter,
    ContactForm,
  },
};
</script>
