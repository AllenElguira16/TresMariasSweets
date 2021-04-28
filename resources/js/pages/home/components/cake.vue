<template>
  <div class="cursor-pointer hover:shadow relative h-48">
    <header class="absolute p-4" style="top: 0; left: 0; bottom: right: 0">
      <div class="grid gap-4">
        <div>
          <span class="border bg-primary text-white py-1 px-2">{{
            cake.init_price
          }}</span>
        </div>
        <div>
          <span class="border bg-white text-dark py-1 px-2">{{
            cake.title
          }}</span>
        </div>
      </div>
    </header>
    <div class="overflow-hidden h-full">
      <img
        :src="`/images/cakes/${cake.filename}`"
        :alt="cake.title"
        class="h-full w-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["cake"],
  mounted() {
    console.log(this.cake);
  },
};
</script>