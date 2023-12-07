<script setup>
import {ref} from "vue";
import axios from "axios";
const advice = ref("Advice #117");
const qoute = ref(
    "it is easy to sit up and take notice, what's difficult is getting up and taking action."
);
function generateAdvice() {
    async function $generate() {
        let $request = await axios.get("https://api.adviceslip.com/advice");
        return $request;
    }
    $generate().then((response) => {
        let {data} = response;
        advice.value = `Advice #${data.slip.id}`;
        qoute.value = data.slip.advice;
    });
}
</script>
<template>
    <div
        class="w-[90%] sm:w-[600px] min-h-[250px] bg-[#313b47] rounded-xl py-11 px-10 pb-20 relative"
    >
        <div class="header">
            <span
                class="advice-Num text-PrimaryNeonGreen uppercase tracking-[3px] text-[12px] text-center block font-[800]"
                >{{ advice }}</span
            >
        </div>
        <q
            class="mt-6 block text-center text-main text-PrimaryLightCyan font-[800]"
            >{{ qoute }}</q
        >
        <div class="icon mt-8 flex justify-center">
            <img
                src="./assets/images/pattern-divider-desktop.svg"
                alt="desktop-pattern"
                class="w-full max-w-none"
            />
        </div>
        <button
            @click="generateAdvice"
            class="absolute bottom-[-20px] bg-PrimaryNeonGreen w-[60px] h-[60px] rounded-full left-2/4 -translate-x-2/4 border-none flex justify-center items-center hover:shadow-mainBox"
        >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                    fill="#202733"
                />
            </svg>
        </button>
    </div>
    <p
        class="absolute bottom-0 break-keep min-h-[20px] left-0 w-full bg-PrimaryNeonGreen text-black text-[14px] p-1 font-[800] overflow-hidden"
    >
        <span class="block">{{ qoute }}</span>
    </p>
</template>
<style scoped>
p > span {
    animation: news-line 30s linear infinite;
}
@keyframes news-line {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>
