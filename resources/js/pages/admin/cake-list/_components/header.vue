<template>
  <header
    class="bg-white flex justify-around py-4 shadow w-full rounded sticky top-0"
  >
    <div>
      <h1>Admin</h1>
    </div>
    <div class="flex items-center">
      <span class="material-icons">search</span>
      <div class="mx-2">|</div>
      <input
        type="text"
        placeholder="Search for cakes"
        class="border-black border-b-2"
      />
    </div>
    <div class="flex items-center">
      <div
        class="cursor-pointer hover:bg-primary hover:text-white rounded select-none text-center p-2 flex items-center"
      >
        <span class="material-icons">add</span>
        <span>Add Cake</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>