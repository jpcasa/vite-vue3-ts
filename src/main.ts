import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import { i18n } from "./plugins/i18n";

import naive from 'naive-ui'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createHead } from '@vueuse/head'

import './style.css'

import App from './App.vue'

// ROUTES
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })

// NOTE: This is a workaround for production that causes the app to crash when a dynamic import fails after a new deploy
router.onError((error, to) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('Importing a module script failed')
  ) {
    if (!to?.fullPath) {
      window.location.reload();
    } else {
      window.location.href = to.fullPath;
    }
  }
})

// STORE
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// METAS
const head = createHead()

// DEFINE APP
const app = createApp(App)
  .use(router)
  .use(pinia)
  .use(naive)
  .use(i18n)
  .use(Vue3Lottie)
  .use(head)

// MOUNT APP
app.mount('#app')
