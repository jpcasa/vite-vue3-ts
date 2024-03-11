<script setup lang="ts">
import { NLoadingBarProvider } from 'naive-ui'
import { themeOverrides } from '~/constants/themeOverrides'
import { useConfigStore } from '~/stores/config'

const configStore = useConfigStore()

// Get the current global i18n instance
const app = getCurrentInstance()
const i18n = app?.appContext.config.globalProperties.$i18n

onMounted(() => {
  if (i18n) {
    i18n.locale = configStore.currentLanguage.key
  }
})
</script>

<template lang="pug">
div
  n-config-provider(:theme-overrides="themeOverrides")
    n-loading-bar-provider
      n-dialog-provider
        n-message-provider(placement="bottom")
          router-view
</template>

<style scoped></style>
