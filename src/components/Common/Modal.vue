<script lang="ts" setup>
interface Props {
  show: boolean
  maxWidth?: string
}

const props = defineProps<Props>()

const { show } = toRefs({ ...props })
</script>

<template lang="pug">
n-modal(:show="show" @onClose="show = false")
  n-card(class="w-5/6")
    p This is a modal
</template>

<style lang="postcss" scoped></style>