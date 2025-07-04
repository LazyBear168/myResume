<!-- File: src/views/Contact.vue -->
<template>
  <div class="container">
    <div class="box">
      <!-- 直接使用 resumeData.picture -->
      <img :src="resumeData.picture" alt="My picture" class="picture-img" />

      <h1 class="name">
        {{ resumeData.name }}
      </h1>
      <h3 :class="locale === 'en' ? 'education-en' : 'education-zh'" v-if="ntu">
        {{ ntu.school }}
        <span v-if="ntu.degree">{{ ntu.degree }}</span>
      </h3>
      <div class="jobApplication-box">
        <h3>{{ resumeData.jobApplication }}</h3>
      </div>
      <section>
        <h3 class="section-title">{{ $t('FontendSkill') }}</h3>
        <ul>
          <li v-for="project in resumeData.projects" :key="project.name">
            <a :href="project.url" target="_blank" rel="noopener noreferrer">
              <strong>{{ project.name }}</strong> </a
            ><br />
            {{ project.descriptionComplete }}<br />
            {{ $t('githubLink') }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import zhresumeData from '../data/resumeData.zh.js'
import enresumeData from '../data/resumeData.en.js'

import './Views.css'

const { locale } = useI18n()

const resumeData = computed(() =>
  locale.value === 'en' ? enresumeData : zhresumeData
)

const ntu = computed(() =>
  resumeData.value.education.find((item) => item.key === 'ntu')
)
</script>
