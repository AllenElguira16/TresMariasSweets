<template>
  <div class="text-white px-3 py-5" style="background-color: #242424">
    <div class="lg:flex items-center">
      <div class="flex items-center justify-between">
        <h1 class="font-bold text-2xl">TRES MARIA'S SWEETS BY: IRISH</h1>
        <button @click="toggle" class="lg:hidden" ref="toggleButton">
          <font-awesome-icon :icon="'bars'" />
        </button>
      </div>
      <div class="lg:flex lg:flex-grow" :class="{ hidden: !isOpen }">
        <div class="mx-auto">
          <div class="lg:flex">
            <a href="/" class="block px-2 lg:py-0 py-2 font-semibold">Home</a>
            <a href="collection" class="block px-2 lg:py-0 py-2 font-semibold"
              >Collection</a
            >
            <a href="contact" class="block px-2 lg:py-0 py-2 font-semibold"
              >Contact</a
            >
            <a href="about" class="block px-2 lg:py-0 py-2 font-semibold"
              >About</a
            >
          </div>
        </div>
        <div class="pl-1 lg:py-0 py-2">
          <div class="flex">
            <a
              target="_blank"
              href="https://www.facebook.com/Tres-Marias-Sweets-1544677599095058/"
              class="px-1"
            >
              <img src="/images/fb.png" class="w-5" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/tres.marias_228/"
              class="px-1"
            >
              <img src="/images/ig.png" class="w-5" />
            </a>
            <a target="_blank" href="https://twitter.com/home" class="px-1">
              <img src="/images/google.png" class="w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="lg:hidden">Hello</div> -->
  </div>
</template>

<script>
export default {
  setup() {},
  mounted() {
    this.getNavStateFromElement();
    window.addEventListener("resize", this.getNavStateFromElement);
  },
  destroyed() {
    window.removeEventListener("resize", this.getNavStateFromElement);
  },
  data: () => {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    getNavStateFromElement() {
      const display = getComputedStyle(this.$refs.toggleButton).display;
      // set true if button is hidden
      this.isOpen = display === "none";
    },
  },
};
</script>
