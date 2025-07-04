// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './views/AppHome.vue'
import Resume from './views/Resume.vue'
import FrontendSkills from './views/FrontendSkills.vue'
import BackendSkills from './views/BackendSkills.vue'
import PersonalProjects from './views/PersonalProjects.vue'
import WorkExperience from './views/WorkExperience.vue'
import EducationBackground from './views/EducationBackground.vue'
import ContactMe from './views/ContactMe.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/aboutMe/resume', component: Resume },
  { path: '/skills/frontend', component: FrontendSkills },
  { path: '/skills/backend', component: BackendSkills },
  { path: '/projects/personal', component: PersonalProjects },
  { path: '/experience/workExperience', component: WorkExperience },
  { path: '/education/educationBackground', component: EducationBackground },
  { path: '/contact/contactMe', component: ContactMe },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
