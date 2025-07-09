// File: src/main.js
// Author: Cheng
// Description: Initialize Vue app with router and i18n (internationalization)

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import zh from './locales/zh.json'
import en from './locales/en.json'

const savedLang = localStorage.getItem('language') || 'zh'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: { zh, en },
})

createApp(App).use(router).use(i18n).mount('#app')
