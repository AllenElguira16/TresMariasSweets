<template>
  <div class="grid grid-cols-12 py-4">
    <div class="col-span-8">
      <div class="gap-4 grid grid-cols-4">
        <cake-component v-for="(cake, key) in cakes" :key="key" :cake="cake" />
      </div>
    </div>
    <div class="col-span-4">
      <div>
        <header class="bg-primary rounded-t-2xl p-4 text-white">
          Cart List
        </header>
        <ul class="bg-white rounded-b-2xl p-4">
          <li class="">
            <div class="flex">
              <div class="flex-1">Cake 1</div>
              <div>299</div>
            </div>
            <div class="flex justify-between">
              <small class="text-gray-400">
                <span>Title: Happy Birthday! John Doe</span>
              </small>
              <div>
                <button class="material-icons text-primary">remove</button>
                <div class="inline-block align-top mx-2">1</div>
                <button class="material-icons text-primary">add</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import CakeComponent from "../../_components/cake";

export default {
  components: {
    CakeComponent,
  },
  async setup() {
    const store = useStore();

    await store.dispatch("cake/setCakes");

    return {
      cakes: computed(() => store.state.cake.cakes),
    };
  },
};
</script>
