<template>
  <div
    class="flex flex-col lg:flex-row lg:flex bg-[#101828] justify-center items-center lg:justify-between w-full px-7 lg:px-28 py-10 lg:py-10"
  >
    <div class="flex-col mb-8 lg:mb-0">
      <p class="text-white text-xl font-semibold text-center lg:text-left">
        Join our Newsletter
      </p>
      <p class="text-white text-base text-center lg:text-left">
        Join over 4,000+ startups already growing with Morpheme.
      </p>
    </div>
    <div class="flex-col">
      <div class="flex">
        <form class="bg-grey-200 w-[266px] h-[48px]" action="Submit">
          <input
            type="text"
            placeholder="Enter your email"
            class="w-[250px] h-[32px] rounded-lg p-2"
          />
        </form>
        <button
          class="text-white w-fit h-fit bg-[#0984DD] px-2 py-1 rounded-lg hover:bg-sky-700"
        >
          Subscribe
        </button>
      </div>
      <button>
        <img src="../assets/icons/Information.png" alt="Information" />
      </button>
    </div>
  </div>
</template>
