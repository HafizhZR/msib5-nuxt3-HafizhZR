<template>
  <div>
    <div class="h-screen">
      <div class="bg-gradient-to-b from-[#D8EEFD] to-white">
        <Header />
        <div class="flex flex-col justify-center items-center gap-6 mt-20">
          <div class="text-center">
            <p class="text-[#101828] font-semibold text-xl">Thank you!</p>
            <p class="text-[#98A2B3]">Your order will be processed immediately.</p>
          </div>
          <button
            class="bg-[#0984DD] text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2 font-semibold"><img
              src="../../assets/icons/Home.png" alt="">Back to Home</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>