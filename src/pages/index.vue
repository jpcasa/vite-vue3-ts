<script lang="ts" setup></script>

<template lang="pug">
h1 {{ $t('hello_world') }}!
p This is a Vite + Vue 3 + Tailwind CSS + TypeScript + Pug template.
</template>

<style lang="postcss" scoped>
h1{
  @apply text-3xl font-semibold;
}

p {
  @apply text-slate-500;
}
</style>
