<template>
    <div>
        <div class="bg-gradient-to-b from-[#D8EEFD] to-white w-full">
            <Header />
            <h1 class="text-left text-[40px] leading-[56px] font-semibold tracking-[-0.8px] text-[#101828] my-10 mx-24">
                Shopping Cart</h1>
        </div>
        <div class="flex mx-auto justify-between mx-28">
            <div class="flex flex-col gap-5 w-2/3 mb-10">
                <CheckoutCard v-for="(data, index) in checkout" :key="index" :name="data.name" :colorName="data.colorName"
                    :price="data.price" :quantity="data.quantity"/>
            </div>
            <div class="w-1/3 h-[160px] gap-2 flex flex-col border rounded-lg border-[#EAECF0] p-4">
                <div class="flex justify-between">
                    <p>Sub Total</p>
                    <p>Rp144.000</p>
                </div>
                <div>
                    <p class="w-[40%] text-[#98A2B3]">Shipping and taxes calculated at checkout</p>
                </div>
                <button class="bg-[#0984DD] text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2 font-semibold"><img src="../../assets/icons/ArrowWhite.png" alt="">Checkout</button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">

const checkout = ref([{
    name: 'UX review presentations',
    colorName: 'red',
    price: 36000,
    quantity: 1,
},
{
    name: 'UX review presentations',
    colorName: 'red',
    price: 36000,
    quantity: 1,
},
{
    name: 'UX review presentations',
    colorName: 'red',
    price: 36000,
    quantity: 1,
},
{
    name: 'UX review presentations',
    colorName: 'red',
    price: 36000,
    quantity: 1,
}])

</script>