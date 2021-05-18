<template>
  <div>
    <div class="flex">
      <div class="flex-1">{{ cart.title }}</div>
      <div>{{ cart.init_price }}</div>
    </div>
    <div class="flex justify-between">
      <div>
        <small class="block text-gray-400">
          <span>
            {{
              cart.instruction.length ? cart.instruction : "~No instruction~"
            }}
          </span>
        </small>
        <small class="block text-gray-400">
          <span>
            {{ cart.picture ? "~Picture Included~" : "~No Picture~" }}
          </span>
        </small>
      </div>
      <div>
        <button class="material-icons text-primary">remove</button>
        <div class="inline-block align-top mx-2">{{ cart.quantity }}</div>
        <button class="material-icons text-primary">add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart"],
};
</script>