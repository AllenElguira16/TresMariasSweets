<template>
  <div class="bg-white p-4 w-2/4 mx-auto mt-4">
    <div>
      <div class="flex justify-between items-center">
        <div>
          <h2 class="font-bold my-4">
            <!-- {{ status === "requested" ? "Active" : "Past" }} Orders -->
            {{ currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1) }}
            Orders
          </h2>
        </div>

        <div>
          <select class="px-3 py-2" v-model.lazy="currentStatus">
            <option
              v-for="(status, index) in _status"
              :key="index"
              :value="status"
            >
              {{ status.charAt(0).toUpperCase() + status.slice(1) }}
            </option>
          </select>
        </div>
      </div>
      <div v-if="orders[currentStatus].length === 0">
        You have no {{ currentStatus }} orders.
      </div>
      <div
        v-for="order in orders.requested"
        :key="order.id"
        class="mb-4"
        v-else
      >
        <div>
          <div class="flex">
            <div class="flex-1 font-bold">{{ order.cake.title }}</div>
            <div>{{ order.cake.init_price }}</div>
          </div>
          <div class="flex justify-between">
            <div>
              <small class="block text-gray-400">
                <span>
                  {{
                    order.instructions.length
                      ? order.instructions
                      : "~No instruction~"
                  }}
                </span>
              </small>
              <small class="block text-gray-400">
                <span>
                  {{ order.picture ? "~Picture Included~" : "~No Picture~" }}
                </span>
              </small>
            </div>
            <div>
              <button class="bg-primary flex px-4 py-2 text-white">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  async setup() {
    const store = useStore();
    const status = ["requested", "accepted", "placed", "cancelled", "done"];
    const currentStatus = ref("requested");

    status.forEach(async function (status) {
      await store.dispatch("order/getOrders", {
        status,
      });
    });

    return {
      _status: status,
      currentStatus,
      orders: computed(() => store.state.order.orders),
    };
  },
};
</script>