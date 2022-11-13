<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useEasterEgg } from '@src/store/easterEgg'

export default defineComponent({
  setup() {
    const ee = useEasterEgg()
    const easterEggCnt = ref(0)
    const router = useRouter()
    const curRouteName = computed(() => router.currentRoute.value.name)
    const curRoutePath = computed(() => router.currentRoute.value.path)

    return {
      curRouteName,
      curRoutePath,
      option() {
        Swal.fire({
          icon: 'info',
          title: '서비스 미지원',
          text: '게임의 품질을 높이기 위한 몇가지 옵션을 추가 개발중입니다.',
          footer: `<figure class="text-center">
                  <img class="h-[250px] inline-block" alt="toss qr code" src="https://lh3.googleusercontent.com/fife/AAbDypBFUqeiLiFdXm3vnN_pJGVSHPZQU4LQpVvLulvHlPgtCccHIRzHHSMMtN8CWTzP4gs-ljDl_8iu3EM1Oov6sjPpzsB7aRNfTu6_3M9VG-vWKgmnNEfhFdWmyZOnZXJy2fjhjplUg3fYgeCt-hBysZP7GA7ACI4_OHRinOFI9R1nWKYY0QtXA_iyK3XmvvnNlaJbzY0oHJu0AJssW-8GFE-LbNo5ntsjHF9pr9RmBJ6rbc598YiqmgCipxwr5d7qwomWOcIPoBhTwzwP3HIGnvSEdu5VI5i7Gsx7RJltLPd44S00gpYVghvtwUe-b7VQVsJ3eid51UP3lYeFDbw1p2BI5QVxvaTL83oI_lRFfdAJByEInfsnM2Vuk1-BYJmMdR-6C4KpUWIlOnayjckYbctmvPBuRm1LFqzIY5veZXU64hcsDZ6EHeUHhciw6F03sX9v3wRLfMcwV3vfNJ0ozSBJa94W8CC-Yz8rWixOb5oSoZVf91jjMuQi0ndUBiYnYUsSa30dqiQX950IrgjJH_qZ-n2h8w9SB-tqDj88YjOBGkCIA8Da3MEkTZlJhyRRKp8oCZweHmR1aUaerETGDZrARVpLlumnvpiqwRiPkI6tt0Ic_0n4kHIpUAAXMvcYTo8ko_-qltQmSab5tV01kZXXuISnSjsQEe6pmkzgLPcKCR_rHku_J-lzo55hfCSvd2Iycku5d17a57F-xOnUtbuq7JPYpvmVE0rtpichp6vbJk9XwnUkFGyd6U8xyL3xkE1c0RvM7_2M2GVkukYbmNskpS98S15LDtko6a8Za0cNz-0HaWf44OT4mXv2I8SdwtR-DFKY2rEY1bJO05R1PmmfEjeHqy2YNcOIuTtl022aHUGMQ5RcZoMR8ukVSQTcRFJ1W3leIZpSm0gboh6iSQRXuiWSdMNfT64pEz7GpXh2GwD3kp298Utl6bkM6MJpQaKTMNRdYXmO-8kAOOeZHnQ2W0eeAuRbe3sV6cRJLZd2tUGto9QGY3ZHf91WeCo3mgsKvBgdVtaItAPJSsznIlJRNGzBKUr8t62veCyo-Sw5Ggd_w9xzECV7uW8td_0N73Zf2epoJJb5qu7NOL1329J-DBalqbdPfj1f8XdxVnNznRDkfNgm6rfmNIMP4sYQT7YHbBXaK5Gv3osNeiuvBGmjdHig1XflUPXgeknSWLY2RC6uIOIQxySitbhIJrwlWOb7REnaIq5QD4KFvkH5-uYJMK5AQxTzJcV_zCK7RyNsI2d6vkNcLfQDNlQLcJv6B4LflP1f90uZC7cDtQ-oOzv82430STiSU24B8ruCXiNifkyk4O_IArCxn1-m0qnmL_0RCfJ-7msKdJ7b2T9n0FkJ0R6cFHyASKpp1LcsUYHSgxbXilzc0TLDjrA6E7jocla77fLX7xgvSg69CaxCBkQhysVVnIxMYWjvMK5TtYb-s2otOQ77GgWs8nY9tv-8j9Eohpvsee7pMVcePes=w1440-h2424"/>
                  <figcaption><a class="text-sky-400 underline hover:underline-offset-2" href="https://toss.me/seongjun94/2500">고생하는 개발자를 위해서 커피한잔 사주기<a></figcaption>
                  </figure>
                  `,
        })
      },
      refresh() {
        if (router.currentRoute.value.name === 'Baseball') {
          router.go(0)
        } else {
          router.push({ path: '/' })
        }
      },
      home() {
        router.push({ path: '/' })
      },
      easterEgg() {
        if (++easterEggCnt.value % 20 !== 0) return

        switch(curRouteName.value) {
          case 'Baseball':
            alert(ee.comData);
        }
      }
    }
  },
})
</script>

<template>
  <header class="gnb">
    <nav class="flex w-full h-[41px] bg-black rounded-lg py-2">
      <button class="p-0 bg-white text-black mx-1 flex-none" @click="option">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      </button>

      <h1 class="flex-1 text-center text-white text-2xl font-bold leading-[1.5rem]">
        <button @click="easterEgg" class="cursor-default">{{ curRouteName }}</button>
      </h1>

      <button class="p-0 bg-white text-black mx-1 flex-none" @click="refresh">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </button>

      <button class="p-0 bg-white text-black mx-1 flex-none" @click="home">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.gnb {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: 1px solid white;
  min-height: 41px;
}
</style>
