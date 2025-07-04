<!-- name: src/App.vue -->
<template>
  <div>
    <!-- Topbar for site-wide navigation -->
    <Topbar :onSelectMenuItem="handleMenuSelect" />

    <!-- Routed content -->
    <router-view class="router-views" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

import Topbar from './topbar/Topbar.vue'
import './App.css'

const router = useRouter()

function handleMenuSelect(route) {
  router.push('/' + route)
}
</script>
