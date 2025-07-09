<!-- File: src/views/Landing.vue -->

<template>
  <div class="landing-container">
    <h2>{{ project?.name }}</h2>

    <div class="button-group">
      <a
        v-if="project?.url"
        :href="project.url"
        target="_blank"
        class="landing-btn"
        >🌐 {{ $t('QRcode.website') }}</a
      >
      <a
        v-if="project?.youtubeLink"
        :href="`https://youtu.be/${extractYouTubeId(project.youtubeLink)}`"
        target="_blank"
        class="landing-btn"
        >📺 {{ $t('QRcode.YouTube') }}</a
      >
      <a
        v-if="project?.githubLink"
        :href="project.githubLink"
        target="_blank"
        class="landing-btn"
        >💻 {{ $t('QRcode.GitHub') }}</a
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import zhData from '../data/resumeData.zh.js'
import enData from '../data/resumeData.en.js'

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()

const resumeData = computed(() => {
  return locale.value === 'zh' ? zhData : enData
})

const projectName = route.params.id

const project = computed(() => {
  return resumeData.value.projects.find((p) => p.name === projectName)
})

// 將各種 YouTube 連結統一為 youtu.be/xxxx
function extractYouTubeId(link) {
  if (!link) return ''
  const patterns = [
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^?&]+)/,
    /youtu\.be\/([^?&]+)/,
  ]
  for (const pattern of patterns) {
    const match = link.match(pattern)
    if (match && match[1]) return match[1]
  }
  return ''
}
</script>

<style scoped>
.landing-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-group {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
}
.button-group a {
  width: 100px;
}

.landing-btn {
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  background-color: #3182ce;
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>
