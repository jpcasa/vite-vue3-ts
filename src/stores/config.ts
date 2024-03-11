import { defineStore } from 'pinia'
import { Language } from '~/models/common'

interface StateTypes {
  theme: string
  currentLanguage: Language  
  languages: Language[]
  menuOpen: boolean
}

export const useConfigStore = defineStore('config', {
  state: (): StateTypes => ({
    theme: 'light',
    currentLanguage: { key: 'en', label: 'English' },
    languages: [
      { key: 'en', label: 'English' },
      { key: 'es', label: 'Español' },
      { key: 'fr', label: 'Français' },
      { key: 'it', label: 'Italiano' },
    ],
    menuOpen: true,
  }),
  actions: {
    setTheme(theme: string): void {
      this.theme = theme
    },
    setLanguage(key: string): void {
      this.currentLanguage = this.languages.find((lang) => lang.key === key) || this.languages[0]
    },   
  },
  persist: true,
});
