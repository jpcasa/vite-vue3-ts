<script lang="ts" setup>
import { useConfigStore } from '~/stores/config'

const configStore = useConfigStore()

const app = getCurrentInstance()
const i18n = app?.appContext.config.globalProperties.$i18n

/**
 * Sets the language of the app
 */
const handleLang = () => {
  const lang = configStore.currentLanguage || 'en'
  configStore.setLanguage(String(lang))
  
  if (i18n) i18n.locale = String(lang)
}

onMounted(() => handleLang())
</script>

<template lang="pug">
router-view
</template>

<style lang="postcss" scoped></style>