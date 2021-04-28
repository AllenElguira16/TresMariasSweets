<template>
  <nav class="bg-white h-screen p-4 shadow w-28 sticky top-0">
    <!-- Navbar header -->
    <header class="pb-32">
      <img src="/images/logo.png" alt="Logo" />
    </header>
    <!-- Navbar Items -->
    <div>
      <ul>
        <li
          class="cursor-pointer hover:bg-primary hover:text-white rounded select-none text-center p-2"
        >
          <div>
            <span class="material-icons-outlined text-4xl">cake</span>
          </div>
          <div>Cakes</div>
        </li>
        <li
          class="cursor-pointer hover:bg-primary hover:text-white rounded select-none text-center p-2"
        >
          <div>
            <span class="material-icons-outlined">favorite_border</span>
          </div>
          <div>Favorites</div>
        </li>
        <li
          class="cursor-pointer hover:bg-primary hover:text-white rounded select-none text-center p-2"
        >
          <div>
            <span class="material-icons-outlined">person</span>
          </div>
          <div>About</div>
        </li>
      </ul>
    </div>
  </nav>
</template>
