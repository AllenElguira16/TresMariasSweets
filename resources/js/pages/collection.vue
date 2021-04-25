<template>
  <div>
    <home-navbar />

    <div class="bg-black bg-opacity-40 py-20">
      <!-- <img src="/images/logo.png" /> -->
      <div class="text-white text-center leading-10">
        <h1 class="font-bold">My Collections</h1>
        <p>Every cakes in my collection</p>
      </div>
    </div>

    <div class="bg-gray-100 py-20 text-center">
      <h1 class="font-bold">My Favorites</h1>
      <div class="grid grid-cols-4 gap-2">
        <div v-for="(image, key) in favorites" :key="key">
          <img class="w-full" :src="`/images/${image}`" :alt="image" />
          <div>CAKE {{ key + 1 }}</div>
        </div>
      </div>
    </div>

    <div class="bg-gray-100">
      <h1>CAKES</h1>
      <!-- <div>
        <div v-for="(image, key) in others" :key="key">
          <img :src="`/images/${image}`" :alt="image" />
          <div>COLLECTION {{ key + 1 }}</div>
        </div>
      </div> -->
      <div class="grid grid-cols-4 gap-2">
        <div v-for="(image, key) in others" :key="key">
          <img class="w-full" :src="`/images/${image}`" :alt="image" />
          <div>COLLECTION {{ key + 1 }}</div>
        </div>
      </div>
    </div>

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
      favorites: [
        "straw.jpg",
        "tiktok.jpg",
        "superman.jpg",
        "flowers.jpg",
        "mocha.jpg",
        "pink.jpg",
        "pony.jpg",
        "bag.jpg",
        "blue.jpg",
        "choco.jpg",
        "christmas.jpg",
        "cookies.jpg",
      ],
      others: [
        "a.jfif",
        "b.jfif",
        "c.jfif",
        "d.jfif",
        "e.jfif",
        "f.jfif",
        "g.jfif",
        "p.jfif",
        "h.jfif",
        "i.jfif",
        "j.jfif",
        "k.jfif",
        "l.jfif",
        "m.jfif",
        "n.jfif",
      ],
    };
  },
  components: {
    HomeNavbar,
    HomeFooter,
    ContactForm,
  },
};
</script>