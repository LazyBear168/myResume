// File: src/data/resumeData.zh.js
import MyPicture from '/assets/Mypicture.jpg'

export default {
  picture: MyPicture,
  name: '張丞日',
  education: [
    {
      school: '台灣世曦工程顧問股份有限公司',
      degree: '結構工程師',
      duration: '2022/09 - 2024/07',
    },
    {
      key: 'ntu',
      school: '國立台灣大學 土木工程學系',
      degree: '結構組',
      duration: '2020/09 - 2022/09',
    },
    {
      school: '國立暨南國際大學 土木工程學系',
      duration: '2016/09 - 2020/07',
    },
  ],
  jobApplication: '應徵職務：前端網頁工程師、全端網頁工程師',
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
      'Matlab',
      'Wolfram Mathematica',
    ],
    languages: ['中文', '台語(母語)', '英文(普通)'],
    softskills: ['溝通協調', '團隊合作', '獨立作業', '問題解決'],
  },
  selfIntro: {
    selfIntroSimple: `　我是一位具備工程背景並熱衷於技術創新的學習者，過去在結構工程領域累積紮實的邏輯思維與解決問題能力。近年來積極投入前端與全端網頁開發學習，熟悉 JavaScript、HTML、CSS、Vue、React 等技術，也具備 Node.js 與 Python 等後端工具操作經驗。
    　期望轉職為網頁前端／全端工程師，結合理工思維與實作能力，參與產品開發並持續精進工程技能。`,
    selfIntroComplete: `　我是一位擁有結構工程背景、邏輯嚴謹且熱愛技術挑戰的求職者。過去在土木結構領域從事工程設計多年，參與多項大型公共工程專案，期間累積了專業的結構設計能力與跨部門協作經驗。

    　在實務工作中，我不僅執行設計任務，也主動開發輔助設計工具。其中包含一套鋼結構耐震設計軟體，用於潮州機廠鋼構主廠房之結構分析與設計，提升設計效率與準確度。這段經歷讓我更加確定自己對於軟體開發的熱情與潛力。因此，我積極投入前端與全端技術的學習，掌握了 JavaScript、HTML、CSS、Vue.js、React 等前端技術，並具備 Node.js、Python 的後端實作經驗。
    
    　我完成了多項實戰作品，例如：
    Crypto Index Tracker：整合 CoinGecko、Binance API 與自建後端的加密貨幣追蹤平台，支援即時價格查詢與歷史 K 線圖。
    Sunny Habit App：具巢狀習慣清單與統計圖表的打卡應用，整合 Firebase 實作驗證與資料儲存。
    個人履歷網站：支援中英文切換的響應式個人網站，展示我的技能、作品與背景。

    　我期望將原本在結構工程中培養的邏輯思維與實務精神，轉化為對軟體產品的貢獻。未來希望能在前端或全端開發領域持續成長，與團隊共同打造兼具效能與體驗的數位產品。`,
  },

  projects: [
    {
      name: 'Crypto Index Tracker',
      url: 'https://crypto-index-app.web.app/',
      descriptionSimple:
        '使用 React 開發的加密貨幣追蹤平台，整合多來源 API 並自建後端提供歷史資料與 K 線圖，前端部署於 Firebase，強化 API 串接與資料視覺化能力。',
      descriptionComplete:
        '使用 React 開發的加密貨幣指數追蹤平台，前端部署於 Firebase，整合 CoinGecko API 與 Binance API，並自建後端 Render Server 提供 K 線圖與歷史價格查詢功能。支援多種加密資產的即時價格與圖表顯示，具備響應式設計與狀態管理，強化前端 API 串接與資料視覺化實作能力。',
      githubLink: '',
    },
    {
      name: 'Sunny Habit App',
      url: 'https://sunny-habit-app.web.app/',
      descriptionSimple:
        'React.js 習慣養成工具，具巢狀清單、打卡統計與 Firebase 驗證，著重互動設計與資料整合。',
      descriptionComplete:
        '使用 React.js 開發的習慣養成工具，支援巢狀清單、每日打卡、自訂習慣與統計圖表，並整合 Firebase 進行資料儲存與身份驗證。強化前後端整合與使用者互動設計能力。',
      githubLink: '',
    },
    {
      name: 'Chengs Resume',
      url: 'https://chengs-resume.web.app/',
      descriptionSimple:
        '個人履歷網站，展示學經歷、技能與作品，支援中英文切換與響應式設計。（就是您現在在的這個網頁呦）',
      descriptionComplete:
        '使用 Vue.js 開發的個人履歷網站，整合 Vue Router、Vue i18n 進行頁面切換與語系管理，具備中英文雙語模式與響應式設計，內容涵蓋自我介紹、技能、學經歷與個人作品等，部署於 Firebase Hosting。展現前端開發與國際化實作能力。（就是您現在在的這個網頁呦）',
      githubLink: '',
    },
    {
      name: '點擊這裡看更多介紹',
      url: 'https://chengs-resume.web.app/projects/personal',
    },
  ],
  contact: {
    phone: '0983-728-258',
    email: 'chengjih77@gmail.com',
    address: '台中市大里區',
  },

  research: {
    thesis: '碩士論文：以彈塑性模型描述多維加載下的塑性行為',
    tools: ['Mathematica 正解推導', 'MATLAB 模擬', 'LaTeX 論文排版'],
  },

  experiences: [
    {
      title: '科技部研究助理',
      duration: '2020/09 - 2022/07',
      description: '實驗操作、LabVIEW、Grapher、MTS 控制器招標。',
    },
    {
      title: '彈性力學助教',
      duration: '2021/09 - 2022/01',
      description: '撰寫與批改作業、碩博士生輔導、教授溝通橋樑。',
    },
    {
      title: '塑性力學助教',
      duration: '2022/02 - 2022/06',
      description: '撰寫與批改作業、碩博士生輔導、教授溝通橋樑。',
    },
  ],

  workDetails: [
    {
      project: '潮州機廠工程',
      description:
        '擔任結構窗口，負責機廠鋼構主廠房與地下設施之結構設計作業，包含建模、結構分析、結構BIM模型製作與圖說整合。設計期間多次與機電、設備、建築師等介面單位協調圖說，熟悉鋼構設計流程與跨部門整合經驗。',
    },
    {
      project: '桃園鐵路地下化工程',
      description:
        '參與緊急出口與通風口之地下結構及地上附屬設施設計，包含地下樓梯間、設備間與通風豎井等構造物，熟悉地下結構設計流程與相關構造細節（例如止水、開挖階段考量等）。',
    },
    {
      project: '桃園捷運綠線',
      description:
        '負責部分沿線小型廠房之結構設計，協助完成廠房建模、荷載評估與配筋設計，並配合各系統介面進行設計調整與圖說修訂。',
    },
    {
      project: '太魯閣明隧道整建工程',
      description:
        '參與明隧道結構補強與擋土構造之設計檢討，熟悉既有結構之現況調查、分析與補強方法評估。',
    },
  ],
}
