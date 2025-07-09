<!-- File: src/App.vue -->
<!-- Author: Cheng -->
<!-- Description: Main app layout, including navigation (Topbar) and routed content (via vue-router) -->

<template>
  <div>
    <!-- Topbar for site-wide navigation -->
    <Topbar :onSelectMenuItem="handleMenuSelect" />

    <!-- Routed content -->
    <router-view class="router-views" />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import { useRouter } from 'vue-router'
import Topbar from './topbar/Topbar.vue'
import './App.css'

const router = useRouter()

const showQRCode = ref(false)
provide('showQRCode', showQRCode)

function handleMenuSelect(route) {
  router.push('/' + route)
}
</script>
