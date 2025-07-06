<!-- File: src/topbar/LanguagePopup.vue -->
<!-- Author: Cheng -->
<!-- Description: This component renders a popup modal for selecting a language. 
     It displays a list of available languages and emits a `select` event when the user selects a language.
     The popup can be closed by clicking outside the popup or by using the close button. -->
<template>
  <div class="popup-backdrop" @click.self="$emit('close')">
    <div class="popup">
      <h3>{{ $t('language.select') }}</h3>
      <ul>
        <li v-for="(label, lang) in languages" :key="lang">
          <button @click="$emit('select', lang)">
            {{ label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const languages = {
  en: 'English',
  zh: '中文',
}
</script>

<style scoped>
.popup-backdrop {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.popup {
  background: white;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.popup h3 {
  margin-bottom: 10px;
  font-size: 18px;
}
.popup ul {
  list-style: none;
  padding: 0;
}
.popup li {
  margin: 5px 0;
}
.popup button {
  background: none;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.popup button:hover {
  background-color: #f5f5f5;
}
@media (max-width: 595px) {
  .popup-backdrop {
    width: 595px;
  }
}
</style>
