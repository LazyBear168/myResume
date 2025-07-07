<!-- File: src/views/PersonalProjects.vue -->
<!-- Author: Cheng -->
<!-- Description: This view showcases all of the user's personal projects. -->

<template>
  <div class="container">
    <div class="box">
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
        <h3 class="section-title">{{ $t('Home.myPortfolio') }}</h3>
        <ul>
          <li v-for="project in AllProjects" :key="project.name">
            <a :href="project.url" target="_blank" rel="noopener noreferrer">
              <strong>{{ project.name }}</strong> </a
            ><br />
            {{ project.descriptionComplete }}<br />
            <a
              v-if="project.githubLink"
              :href="project.githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>{{ $t('githubLink') }}</div>
              <br />
            </a>
          </li>
        </ul>
      </section>
      <div class="video-box">
        <div class="demo-video">
          <iframe
            width="200"
            :height="demoVideoHeight"
            :src="'https://www.youtube.com/embed/y5jfSLDpivs'"
            title="Demo Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>{{ resumeData.demoVideo.myResume }}</p>
        </div>

        <div class="demo-video">
          <iframe
            width="200"
            :height="demoVideoHeight"
            :src="'https://www.youtube.com/embed/ug8ybXsst6U'"
            title="Demo Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>{{ resumeData.demoVideo.cryptoIndex }}</p>
        </div>

        <div class="demo-video">
          <iframe
            width="200"
            :height="demoVideoHeight"
            :src="'https://www.youtube.com/embed/Kf4CASg4BnQ'"
            title="Demo Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>{{ resumeData.demoVideo.habitTracker }}</p>
        </div>
      </div>
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

const demoVideoHeight = computed(() => (locale.value === 'en' ? '70' : '180'))

const ntu = computed(() =>
  resumeData.value.education.find((item) => item.key === 'ntu')
)
const AllProjects = computed(() =>
  resumeData.value.projects.filter((p) => p.type.includes('project'))
)
</script>
