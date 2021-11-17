<template lang="pug">
div(class="container px-5 mx-auto")
    div(class="w-full mb-8")
        div(class="w-full my-6")
            h1(class="text-5xl font-bold mb-2 text-gray-900")
                div(class="inline-block w-18 mx-2 bg-[#35385d] rounded-full align-middle")
                    img(:src="logoImg" class="w-14 m-1")
                span(class="align-middle whitespace-nowrap") Photo Gallery
        div(class="flex flex-wrap -m-4" v-if="photosData !== null")
            div(
                v-for="(n, id) in photosData"
                class="sm:w-1/2 lg:w-1/4 w-full p-4"
                :key="n.img"
            )
                div(class="relative h-48 rounded overflow-hidden")
                    img(
                        :src="n.img"
                        class="object-cover object-center w-full h-full block transition delay-75 duration-300 ease-in-out hover:scale-125"
                    )
                    div(class="absolute bottom-0 left-0 w-full bg-opacity-70 bg-gray-700")
                        h3(class="text-white text-xs tracking-widest m-2") {{ n.author }}
                div(class="mt-3")
                    h2(class="text-gray-900 text-lg font-medium") {{ n.title }}
        div(v-else) no Photo
</template>

<script>
import logo from '@assets/logo.png'
import axios from '@api/axios.js'
import { ref } from 'vue'
export default {
    setup () {
        // 載入本地json檔
        const dataUrl = 'http://localhost:3000/res/photos.json'
        const config = {
            method: 'get',
            url: dataUrl
        }
        axios(config).then(res => {
            let result = res.data
            if (result && result.data) {
                photosData.value = result.data
            }
        })
        .catch(err => {
            console.log(err)
        })
        
        const photosData = ref(null)
        const logoImg = ref(logo)

        return {
            photosData, logoImg
        }
    }
}
</script>