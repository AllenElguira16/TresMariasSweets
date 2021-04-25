<template>
  <div class="px-36 py-24 bg-black bg-opacity-20">
    <form class="p-4 rounded bg-white bg-opacity-60">
      <div>
        <h1 class="font-bold">Leave a comment</h1>
        <p class="py-4">Feel free to give me some feedback</p>
        <textarea
          class="p-2 rounded w-full h-32"
          placeholder="Message"
        ></textarea>
        <input
          class="p-2 rounded w-full bg-opacity-60"
          placeholder="Your Name"
        />
        <input
          class="p-2 rounded w-full bg-opacity-60 my-1"
          placeholder="Your Email"
        />

        <button class="p-2 rounded w-full bg-opacity-60 bg-green-400">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>