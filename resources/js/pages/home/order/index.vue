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
          <select
            class="px-3 py-2"
            v-model="currentStatus"
            @change="changeOrderTab"
          >
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
        v-for="order in orders[currentStatus]"
        :key="order.id"
        class="mb-4"
        v-else
      >
        <div>
          <h3 class="font-bold" v-if="currentStatus === 'placed'">
            Order ID: {{ hashID(order.id) }}
          </h3>
          <div class="flex">
            <div class="flex-1 font-bold">{{ order.cake.title }}</div>
            <div>{{ order.cake.init_price * order.quantity }}</div>
          </div>
          <div class="flex justify-between">
            <div>
              <small class="block text-gray-400">
                <span>
                  {{
                    order.instructions !== null && order.instructions.length
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
            <div class="flex">
              <button
                class="bg-primary flex px-4 py-2 text-white mr-2"
                @click="changeOrderStatus(order.id, 'placed')"
                v-if="['accepted'].includes(currentStatus)"
              >
                Place Order
              </button>
              <button
                class="bg-red-500 flex px-4 py-2 text-white"
                @click="changeOrderStatus(order.id, 'cancelled')"
                v-if="['requested', 'accepted'].includes(currentStatus)"
              >
                Cancel
              </button>
              <button
                class="bg-red-500 flex px-4 py-2 text-white opacity-40"
                v-if="['cancelled'].includes(currentStatus)"
              >
                Cancelled
              </button>
              <button
                class="bg-primary flex px-4 py-2 text-white opacity-40"
                v-if="['done'].includes(currentStatus)"
              >
                Done
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
import md5 from "md5";

export default {
  async setup() {
    const store = useStore();
    const status = ["requested", "accepted", "placed", "cancelled", "done"];
    const currentStatus = ref("requested");

    const getAllOrders = () => {
      status.forEach(async function (status) {
        await store.dispatch("order/getOrders", {
          status,
        });
      });
    };

    getAllOrders();

    console.log(store.state.order.orders);

    return {
      _status: status,
      currentStatus,
      orders: computed(() => store.state.order.orders),
      changeOrderTab: () => {
        getAllOrders();
      },
      async changeOrderStatus(id, status) {
        await store.dispatch("order/changeOrderStatus", {
          id,
          status,
        });

        getAllOrders();
      },
      hashID: (id) => md5(id),
    };
  },
};
</script>