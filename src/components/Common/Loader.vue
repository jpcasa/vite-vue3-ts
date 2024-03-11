<script lang="ts" setup>
import LoaderJSON from '~/assets/animations/main-loader.json'
import LoaderNormalJSON from '~/assets/animations/loader.json'

interface Props {
  main?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  main: false
})

const dots = ref<string>('')

const animateDots = () => {
  setTimeout(() => {
    if (dots.value.length === 3) dots.value = ''
    else dots.value += '.'
    animateDots()
  }, 500)
}

onMounted(() => {
  if (props.main) animateDots()
})
</script>

<template lang="pug">
div
  .default-loader(v-if="!props.main")
    Vue3Lottie(:animationData="LoaderNormalJSON" :width="120" :height="120")
  .main(v-else)
    Vue3Lottie(:animationData="LoaderJSON" :width="200" :height="200")
</template>

<style lang="postcss" scoped>
.main {
  @apply fixed w-full h-full flex flex-col items-center justify-center;
}

.default-loader {
  @apply flex items-center justify-center h-64;
}
</style>