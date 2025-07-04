// File name: SharedMenus.js
// Author: Lazy Bear

const sharedMenus = [
  {
    type: 'logo',
    id: 'logo',
    href: '/',
    class: 'logo-img',
  },
  {
    labelKey: 'menu.about',
    aria: 'About Me section',
    id: 'aboutMenu',
    items: [{ key: 'submenu.profile', type: 'route', route: 'aboutMe/resume' }],
    hidePriority: 1,
  },
  {
    labelKey: 'menu.skills',
    aria: 'Skills section',
    id: 'skillsMenu',
    items: [
      { key: 'submenu.frontend', type: 'route', route: 'skills/frontend' },
      { key: 'submenu.backend', type: 'route', route: 'skills/backend' },
    ],
    hidePriority: 2,
  },
  {
    labelKey: 'menu.projects',
    aria: 'Projects section',
    id: 'projectsMenu',
    items: [
      {
        key: 'submenu.personalProjects',
        type: 'route',
        route: 'projects/personal',
      },
    ],
    hidePriority: 3,
  },
  {
    labelKey: 'menu.experience',
    aria: 'Work Experience section',
    id: 'experienceMenu',
    items: [
      {
        key: 'submenu.jobs',
        type: 'route',
        route: 'experience/workExperience',
      },
    ],
    hidePriority: 4,
  },
  {
    labelKey: 'menu.education',
    aria: 'Education section',
    id: 'educationMenu',
    items: [
      {
        key: 'submenu.schooling',
        type: 'route',
        route: 'education/educationBackground',
      },
    ],
    hidePriority: 5,
  },
  {
    labelKey: 'menu.contact',
    aria: 'Contact section',
    id: 'contactMenu',
    items: [
      { key: 'submenu.contactForm', type: 'route', route: 'contact/contactMe' },
    ],
    hidePriority: 6,
  },
  {
    labelKey: 'menu.settings',
    aria: 'Settings',
    id: 'settingsMenu',
    items: [{ key: 'submenu.language', type: 'language' }],
    hidePriority: 10,
  },
]

export default sharedMenus
