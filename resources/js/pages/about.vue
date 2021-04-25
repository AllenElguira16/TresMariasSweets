<template>
  <div>
    <home-navbar />

    <div class="bg-black bg-opacity-40 py-20">
      <!-- <img src="/images/logo.png" /> -->
      <div class="text-white text-center leading-10">
        <h1 class="font-bold">About</h1>
        <p>Who am I</p>
      </div>
    </div>
    <div class="bg-gray-100">
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

      <div class="flex bg-white my-10">
        <div class="text-justify p-10">
          <h1 class="font-bold">About this website</h1>
          <p>
            This website is all about to those who love to order some cakes, we
            can help you by providing your choice. Just visit our official store
            and we will acomodate you.
          </p>
        </div>
        <img class="w-2/4 p-10" src="/images/logo.png" />
      </div>

      <home-footer />
    </div>
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