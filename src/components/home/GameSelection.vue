<template>
  <div class="card w-10 h-14 rounded border-y-2 flex-1 hover:shadow-lg my-5 cursor-pointer origin-center hover:h-[150px]">
    <p class="title text-center text-xl leading-[3.25rem]">{{ title }}</p>
    <p class="subtitle px-3" v-html="comDescription" /> 
    <a href="#" @click.prevent="onClickStartGame" class="card-tool inline-block float-right px-5 text-lg font-semibold" :class="`text-${color}-500`">게임하기</a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  setup(props, { emit }) {
    return {
      comDescription: computed(() => {
        return props.description?.replace(/(?:\r\n|\r|\n)/g, '<br>') || ''
      }),
      onClickStartGame () {
        emit('onClickStartGame')
      }
    }
  },
})
</script>

<style scoped>
.card {
  transition: height 0.5s, box-shadow 0.5s;
}
.subtitle {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s;
}
.title {
  transition: font-size 0.5s, font-weight 0.5s;
}
.card:hover > .title {
  font-size: 1.5rem;
  font-weight: 800;
  transition: font-size 0.5s, font-weight 0.5s;
}
.card:hover > .subtitle {
  visibility: visible;
  opacity: 1;
  transition: visibility 1s linear 0s, opacity 1s;
}
.card-tool {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s;
}
.card:hover > .card-tool {
  visibility: visible;
  opacity: 1;
  transition: visibility 2.5s linear 0s, opacity 2.5s;
}
</style>
