<!-- file: src/components/topbar/SubMenu.vue-->

<template>
  <ul role="menu" :class="className">
    <li v-for="(item, index) in items" :key="index">
      <button role="menuitem" type="button" @click="$emit('select', item)">
        {{ $t(item.key) }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import './Topbar.css'

defineProps({
  items: Array,
  className: {
    type: String,
    default: 'dropdown-content',
  },
})

defineEmits(['select'])

const { t } = useI18n()
</script>

<style scoped src="./Topbar.css"></style>
