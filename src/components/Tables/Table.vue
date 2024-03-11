<script lang="ts" setup>
import type { Column } from '~/models/common'

interface Props {
  columns: Column[]
  data: any[]
  withPagination?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  withPagination: true,
  loading: false,
})

const emit = defineEmits<{
  (e: 'clicked:load-more'): void
}>()
</script>

<template lang="pug">
div
  .table
    .table-header
      .table-header-item(
        v-for="column in props.columns"
        :key="column.key"
        :style="{ gridColumn: `span ${column.spanColumns} / span ${column.spanColumns}` }"
      )
        span {{ column.title }}
    .table-content
      .table-row(v-for="(item, i) in props.data" :key="i")
        .table-cell(
          v-for="column in props.columns"
          :key="column.key"
          :style="{ gridColumn: `span ${column.spanColumns} / span ${column.spanColumns}` }"
        )
          component(:is="item[column.key]")
  .table-pagination.mt-4(v-if="props.withPagination")
    n-button(
      class="w-full"
      type="primary"
      :loading="props.loading"
      @click="emit('clicked:load-more')"
    ) Load More
</template>

<style lang="postcss">
.table {
  @apply flex flex-col shadow-md;
}

.table-header {
  @apply hidden md:grid grid-cols-12 bg-zinc-200 rounded-t-md h-10 items-center px-4 font-medium;
  font-family: 'Quicksand', sans-serif;
}

.table-content {
  @apply bg-white text-[0.8rem];

  & .table-row {
    @apply flex flex-col py-2 md:items-center px-4 border-b border-zinc-200;
    @apply md:grid md:grid-cols-12;
    border-bottom: 1px solid #e5e7eb;

    &:last-child {
      @apply border-b-0;
    }
  }
}
</style>