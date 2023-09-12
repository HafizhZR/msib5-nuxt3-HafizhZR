<template>
  <div>
    <div class="bg-gradient-to-b from-[#D8EEFD] to-white w-full">
      <Header />
      <div class="flex justify-center items-center mx-32 my-10">
        <button
          class="absolute left-32 border w-[90px] h-[40px] flex items-center justify-center font-semibold bg-white rounded-lg"><span
            class="material-symbols-outlined">
            arrow_back
          </span>Back</button>
        <h1 class="text-center text-[40px] leading-[56px] font-semibold tracking-[-0.8px] text-[#101828] my-10">
          Product Detail</h1>
        <button
          class="absolute right-32 border w-[120px] h-[40px] flex justify-center items-center font-semibold bg-[#0984DD] text-white rounded-lg"><span
            class="material-symbols-outlined">
            add
          </span>Add to Cart</button>
      </div>
    </div>
    <div class="flex mx-20 mb-20">
      <div class="flex flex-col w-1/2 justify-center items-center gap-3">
        <div class="flex justify-center items-center bg-gray-100 rounded-lg w-[555px] h-[430px]">
          <img class="" src="../../assets/images/Bottle.png" alt="">
        </div>
        <div class="justify-center items-center flex">
          <div class="flex gap-3">
            <img class="w-[130px] h-[130px] bg-gray-100 rounded-lg" src="../../assets/images/Bottle.png" alt="">
            <img class="w-[130px] h-[130px] bg-gray-100 rounded-lg" src="../../assets/images/Bottle.png" alt="">
            <img class="w-[130px] h-[130px] bg-gray-100 rounded-lg" src="../../assets/images/Bottle.png" alt="">
            <img class="w-[130px] h-[130px] bg-gray-100 rounded-lg" src="../../assets/images/Bottle.png" alt="">
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="mb-10">
          <h1 class="text-[#101828] text-3xl font-semibold leading-[38px] mb-2">Sprite Nyatanya Nyegerin</h1>
          <p class="text-[#0764A7] text-2xl font-semibold leading-[32px]">$ 14.50</p>
        </div>
        <div class="mb-10">
          <p class="mb-2 text-[#667085]">Color</p>
          <div class="flex w-[75%]">
            <div class="w-1/3 flex">
              <div class="bg-[#F95016] w-[30px] h-[30px] rounded-full mr-2"></div>
              <p class="flex justify-center items-center">Color Name</p>
            </div>
            <div class="w-1/3 flex">
              <div class="bg-[#27AE60] w-[30px] h-[30px] rounded-full mr-2"></div>
              <p class="flex justify-center items-center">Color Name</p>
            </div>
            <div class="w-1/3 flex">
              <div class="bg-[#6172F3] w-[30px] h-[30px] rounded-full mr-2"></div>
              <p class="flex justify-center items-center">Color Name</p>
            </div>
          </div>
        </div>
        <div class="mb-10">
          <p class="mb-2 text-[#667085]">Size</p>
          <div class="flex gap-3">
            <div>
              <div class="bg-[#F9FAFB] w-[40px] h-[40px] flex justify-center items-center rounded-lg">S</div>
            </div>
            <div>
              <div class="bg-[#EAECF0] w-[40px] h-[40px] flex justify-center items-center rounded-lg">M</div>
            </div>
            <div>
              <div class="bg-[#F9FAFB] w-[40px] h-[40px] flex justify-center items-center rounded-lg">L</div>
            </div>
            <div>
              <div class="bg-[#EAECF0] w-[40px] h-[40px] flex justify-center items-center rounded-lg">XL</div>
            </div>
          </div>
        </div>
        <div class="mb-10">
          <p class="mb-2 text-[#667085]">Quantity</p>
          <div class="flex gap-3">
            <button class="w-[40px] h-[40px] bg-[#EAECF0] rounded-lg font-2xl">
              -
            </button>
            <input type="number" name="Quantity" id="" placeholder="0"
              class="text-center w-[40px] h-[40px] bg-[#fff] border rounded-lg">
            <button class="w-[40px] h-[40px] bg-[#0984DD] rounded-lg text-[#fff] font-2xl">
              +
            </button>
          </div>
        </div>
        <div>
          <p class="mb-2 text-[#667085]">
            Description
          </p>
          <p class="font-[20px] font-semibold leading-[30px] text-[#262262]">
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
            aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
            neque.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>