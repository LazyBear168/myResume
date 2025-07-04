// File: src/data/resumeData.en.js
import MyPicture from '/assets/Mypicture.jpg'

export default {
  picture: MyPicture,
  name: 'Cheng-Jih Chang',
  jobApplication:
    'Job Application: Frontend Web Developer / Full-Stack Web Developer',
  selfIntroSimple:
    'Engineering background with strong problem-solving skills, now focused on web development. Experienced in JavaScript, Vue, React, Node.js, and Python. Eager to grow as a frontend or full-stack developer and build impactful products.',

  projects: [
    {
      name: 'Crypto Index Tracker',
      url: 'https://crypto-index-app.web.app/',
      descriptionSimple:
        'A cryptocurrency tracking platform built with React. Integrates multiple APIs and a custom backend for historical data and candlestick charts. Frontend deployed on Firebase. Focuses on API integration and data visualization.',
      description:
        'A cryptocurrency index tracking platform developed with React. The frontend is deployed on Firebase, integrating CoinGecko and Binance APIs, along with a custom Render backend server to provide candlestick charts and historical price data. Supports real-time display of various crypto assets with responsive design and state management, enhancing skills in API integration and data visualization.',
    },
    {
      name: 'Sunny Habit App',
      url: 'https://sunny-habit-app.web.app/',
      descriptionSimple:
        'A React.js habit-tracking app with nested lists, progress tracking, and Firebase authentication. Emphasizes interactive design and data integration.',
      description:
        'A habit-tracking app built with React.js. Supports nested habit lists, daily check-ins, custom habits, and progress visualization. Integrated with Firebase for data storage and user authentication. Strengthens full-stack integration and interactive UI/UX design skills.',
    },
  ],
  contact: {
    phone: '0983-728-258',
    email: 'chengjih77@gmail.com',
    address: 'Dali District, Taichung City',
  },

  profile: {
    phone: '0983-728-258',
    email: 'chengjig77@gmail.com',
    address: 'Da’an District, Taipei City',
  },

  skills: {
    progarmming: [
      'JavaScript',
      'HTML',
      'Css',
      'React',
      'vue',
      'Node.js',
      'Python',
      'LabVIEW',
      'Wolfram Mathematica',
      'LaTeX',
      'Grapher',
    ],
    languages: ['Chinese', 'Taiwanese (native)', 'English (intermediate)'],
    softskills: [
      'Communication',
      'Teamwork',
      'Independence',
      'Problem Solving',
    ],
  },

  education: [
    {
      school: 'Cotec Engineering Consulting Inc.',
      degree: 'Structural Engineer',
      duration: '2022/09 - 2024/07',
    },
    {
      key: 'ntu',
      school: 'National Taiwan University, Department of Civil Engineering',
      degree: 'Structural Division',
      duration: '2020/09 - 2022/09',
    },
    {
      school: 'National Chi Nan University, Department of Civil Engineering',
      duration: '2016/09 - 2020/07',
    },
  ],

  research: {
    thesis:
      'Master’s Thesis: Plasticity Modeling under Multiaxial Loading using Elasto-plastic Formulation',
    tools: [
      'Mathematica for symbolic derivation',
      'MATLAB simulation',
      'LaTeX typesetting',
    ],
  },

  experiences: [
    {
      title: 'Research Assistant (MOST project)',
      duration: '2020/09 - 2022/07',
      description:
        'Experimental setup, LabVIEW, Grapher, MTS controller bidding and execution.',
    },
    {
      title: 'Teaching Assistant - Elasticity',
      duration: '2021/09 - 2022/01',
      description:
        'Grading, tutoring graduate students, communication with professors.',
    },
    {
      title: 'Teaching Assistant - Plasticity',
      duration: '2022/02 - 2022/06',
      description:
        'Grading, tutoring graduate students, communication with professors.',
    },
  ],

  workDetails: [
    {
      project: 'Chaozhou Railway Depot Project',
      description:
        'Responsible for structural modeling and design of the main steel structures and underground facilities. Coordinated with MEP and architects. Familiar with BIM integration and steel construction workflows.',
    },
    {
      project: 'Taoyuan Railway Underground Project',
      description:
        'Involved in the design of emergency exits and ventilation shafts. Experienced in underground structure design and detailing (e.g., waterproofing and excavation stages).',
    },
    {
      project: 'Taoyuan MRT Green Line',
      description:
        'Handled small station building designs, including modeling, load evaluation, rebar detailing, and coordination with other systems.',
    },
    {
      project: 'Taroko Cut-and-Cover Tunnel Rehabilitation',
      description:
        'Participated in assessment and retrofit of existing tunnel and retaining structures. Familiar with site survey, analysis, and strengthening strategies.',
    },
  ],
}
