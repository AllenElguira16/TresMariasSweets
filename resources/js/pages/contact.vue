<template>
  <div>
    <home-navbar />

    <div class="bg-black bg-opacity-40 py-20">
      <!-- <img src="/images/contact.jpg" /> -->
      <div class="text-white text-center leading-10">
        <div class="mb-4">
          <h1 class="font-bold">Contact me</h1>
          <p>You can reach me anytime</p>
        </div>
        <div>
          <h1 class="font-bold">Operating hours</h1>
          <p>Everyday 8am - 8pm</p>
        </div>
      </div>
    </div>

    <div
      class="bg-white flex justify-around py-20 px-10 text-center leading-10"
    >
      <div class="item">
        <font-awesome-icon icon="phone" size="5x" />
        <p class="font-bold text-gray-600">Phone number</p>
        <p class="content">+63 908 721 3206</p>
      </div>
      <div class="item">
        <font-awesome-icon icon="envelope" size="5x" />
        <p class="font-bold text-gray-600">Email</p>
        <p class="content">tresmariassweets@gmail.com</p>
      </div>
      <div class="item">
        <font-awesome-icon icon="map-marker-alt" size="5x" />
        <p class="font-bold text-gray-600">Address</p>
        <p class="content">Lingayen, Pangasinan</p>
      </div>
    </div>

    <contact-form />

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15337.944108892001!2d120.32950163491836!3d16.04024935685302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33915d57cff230df%3A0xaf6e94fee4bf87fa!2sDagupan%20City%20Plaza!5e0!3m2!1sen!2sph!4v1599752790631!5m2!1sen!2sph"
      width="100%"
      height="400px"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>

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