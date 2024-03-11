<script lang="ts" setup>
const route = useRoute()

const errorCode = computed(() => route.query.code)
</script>

<template lang="pug">
div
  p Error {{ errorCode }}
</template>

<style lang="postcss" scoped></style>

<route lang="yaml">
meta:
  layout: error
</route>