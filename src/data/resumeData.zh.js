// File: src/data/resumeData.zh.js
// Author: Cheng
// Description: Resume data in Chinese (Traditional) with added descriptions for various sections

import MyPicture from '/assets/Mypicture.jpg'

export default {
  picture: MyPicture,
  name: '張丞日',
  License: '土木工程技師',
  education: [
    {
      school: '台灣世曦工程顧問股份有限公司',
      degree: '結構工程師',
      duration: '2022/09 - 2024/07',
    },
    {
      key: 'ntu',
      school: '國立台灣大學 土木工程學系',
      degree: '碩士學位',
      duration: '2020/09 - 2022/09',
    },
    {
      school: '國立暨南國際大學 土木工程學系',
      duration: '2016/09 - 2020/07',
    },
  ],
  jobApplication: '應徵職務：前端網頁工程師、全／後端網頁工程師',
  skills: {
    progarmming: [
      'JavaScript',
      'HTML',
      'Css',
      'React',
      'vue.js',
      'Node.js',
      'Python',
      'LabVIEW',
      'git',
      'Matlab',
      'Wolfram Mathematica',
    ],
    languages: ['中文', '台語(母語)', '英文(普通)'],
    softskills: ['溝通協調', '團隊合作', '獨立作業', '問題解決'],
  },
  selfIntro: {
    selfIntroSimple: `　我是一位具備工程背景並熱衷於技術創新的學習者，過去在結構工程領域累積紮實的邏輯思維與解決問題能力。近年來積極投入前端與全端網頁開發學習，熟悉 JavaScript、HTML、CSS、Vue、React 等技術，也具備 Node.js 與 Python 等後端工具操作經驗。
    　期望轉職為網頁前端／全端工程師，結合理工思維與實作能力，參與產品開發並持續精進工程技能。`,
    selfIntroComplete: `　我是一位擁有結構工程背景、邏輯嚴謹且熱愛技術挑戰的求職者。過去在土木結構領域從事工程設計，參與多項大型公共工程專案，期間累積了專業的結構設計能力與跨部門協作經驗。

    　在實務工作中，我不僅執行設計任務，也主動開發輔助設計工具。其中包含一套鋼結構耐震設計軟體，用於潮州機廠鋼構主廠房之結構分析與設計，提升設計效率與準確度。這段經歷讓我更加確定自己對於軟體開發的熱情與潛力。因此，我積極投入前端與全端技術的學習，掌握了 JavaScript、HTML、CSS、Vue.js、React 等前端技術，並具備 Node.js、Python 的後端實作經驗。
    
    　我完成了多項實戰作品，例如：
    Crypto Index Tracker：整合 CoinGecko、Binance API 與自建後端的加密貨幣追蹤平台，支援即時價格查詢與歷史 K 線圖。
    Sunny Habit App：具巢狀習慣清單與統計圖表的打卡應用，整合 Firebase 實作驗證與資料儲存。
    個人履歷網站：支援中英文切換的響應式個人網站，展示我的技能、作品與背景。

    　我期望將原本在結構工程中培養的邏輯思維與實務精神，轉化為對軟體產品的貢獻。未來希望能在前端或全端開發領域持續成長，與團隊共同打造兼具效能與體驗的數位產品。`,
  },

  projects: [
    {
      name: 'Render Server 儲存幣價資訊',
      url: 'https://crypto-index-backend.onrender.com/kline',
      type: ['Home', 'back', 'project'],
      descriptionSimple:
        '提供前端查詢加密幣歷史價格與 K 線圖資料的 API 後端服務，整合 CoinGecko 與 Binance API 並部署於 Render。',
      descriptionComplete:
        '使用 Node.js 與 Express 開發的後端伺服器，提供查詢加密幣歷史價格與 K 線圖資料的 API 接口。整合 CoinGecko、Binance API，實作自動更新與快取。該專案部署於 Render，支援 Crypto Index Tracker 前端平台使用，K 線圖查詢 API 可透過 /kline endpoint 進行測試。',
      githubLink: 'https://github.com/LazyBear168/crypto-index-backend',
    },
    {
      name: 'Crypto Index App',
      url: 'https://crypto-index-app.web.app/',
      type: ['Home', 'front', 'resume', 'project'],
      descriptionSimple:
        '使用 React 開發的加密貨幣追蹤平台，整合多來源 API 並自建後端提供歷史資料與 K 線圖，前端部署於 Firebase，強化 API 串接與資料視覺化能力。',
      descriptionComplete:
        '使用 React 開發的加密貨幣指數追蹤平台，前端部署於 Firebase，整合 CoinGecko API 與 Binance API，並自建後端 Render Server 提供 K 線圖與歷史價格查詢功能。支援多種加密資產的即時價格與圖表顯示，具備響應式設計與狀態管理，強化前端 API 串接與資料視覺化實作能力。',
      githubLink: 'https://github.com/LazyBear168/crypto-index-app',
      youtubeLink: 'https://www.youtube.com/embed/ug8ybXsst6U',
    },
    {
      name: 'Habit Tracker',
      url: 'https://sunny-habit-app.web.app/',
      type: ['Home', 'front', 'resume', 'project'],
      descriptionSimple:
        'React.js 習慣養成工具，具巢狀清單、打卡統計與 Firebase 驗證，著重互動設計與資料整合。',
      descriptionComplete:
        '使用 React.js 開發的習慣養成工具，支援巢狀清單、每日打卡、自訂習慣與統計圖表，並整合 Firebase 進行資料儲存與身份驗證。強化前後端整合與使用者互動設計能力。',
      githubLink: 'https://github.com/LazyBear168/habit-tracker',
      youtubeLink: 'https://www.youtube.com/embed/Kf4CASg4BnQ',
    },
    {
      name: 'Chengs Resume',
      url: 'https://chengs-resume.web.app/',
      type: ['Home', 'front', 'project'],
      descriptionSimple:
        '個人履歷網站，展示學經歷、技能與作品，支援中英文切換與響應式設計。（就是您現在在的這個網頁呦）',
      descriptionComplete:
        '使用 Vue.js 開發的個人履歷網站，整合 Vue Router、Vue i18n 進行頁面切換與語系管理，具備中英文雙語模式與響應式設計，內容涵蓋自我介紹、技能、學經歷與個人作品等，部署於 Firebase Hosting。展現前端開發與國際化實作能力。（就是您現在在的這個網頁呦）',
      githubLink: 'https://github.com/LazyBear168/myResume',
      youtubeLink: 'https://www.youtube.com/embed/y5jfSLDpivs',
    },
    {
      name: '點擊這裡看更多介紹',
      url: '/projects/personal',
      type: ['Home', 'resume', 'front', 'back'],
    },
    {
      name: '【AI Poster】多模態神機妙算 - AI帶你在股市賺 - 使用 CNN, BERT, GAT 證明多模態數據源和圖神經網絡 (GNN) 技術在金融市場的應用價值 | stanCode',
      url: 'https://www.youtube.com/watch?v=pWVPCW4UvTI&t=218s&ab_channel=stanCode%E6%A8%99%E6%BA%96%E7%A8%8B%E5%BC%8F%E6%95%99%E8%82%B2%E6%A9%9F%E6%A7%8B',
      type: ['group'],
      descriptionSimple: '',
      descriptionComplete:
        '本專案旨在提升股價預測的準確性，通過多模態訓練結合新聞文本和股價蠟燭圖數據。使用圖神經網絡（GNN）進行特徵轉換和融合，克服單一數據源分析的不足。我們預期透過此專案證明多模態數據源和先進的圖神經網絡技術在金融市場預測中的潛力和應用價值。並期許後續能進一步優化模型和擴大數據來源，獲得更精確的預測結果。而我在此專案主要負責文字處理與BERT語言模型的架構',
      githubLink:
        'https://github.com/stanCodeTW/AI-Projects/tree/main/SC201Mar2024Projects/GroupE',
      youtubeLink: 'https://www.youtube.com/embed/pWVPCW4UvTI?start=218',
    },
  ],

  contact: {
    phone: '0983-728-258',
    email: 'chengjih77@gmail.com',
    address: '台中市大里區',
  },

  research: {
    publish: {
      title:
        '期刊發表：Building structure with elastoplastic bilinear model under multi-dimensional earthquake forces',
      url: 'https://academic.oup.com/jom/article/doi/10.1093/jom/ufac045/6874529',
    },
    thesis: {
      title: '碩士論文：以彈塑性模型描述多維加載下的塑性行為',
      url: 'https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22110NTU05015161%22.&searchmode=basic',
    },
    tools: ['Mathematica 正解推導', 'MATLAB 模擬', 'LabVIEW 實驗程式維護'],
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
        '擔任結構設計窗口，主導鋼構主廠房與地下設施之建模與結構分析，並負責 BIM 模型整合與圖說協調。在設計過程中，頻繁與機電、設備與建築師等跨部門單位協作，強化溝通與系統整合能力。同時亦自主開發輔助設計工具，提高團隊效率與精準度，展現技術主動性與開發潛力。',
    },
    {
      project: '桃園鐵路地下化工程',
      description:
        '參與多項地下結構設施（如緊急出口、通風口）的設計，涵蓋樓梯間、設備間與通風豎井等，深入理解地下構造之設計流程與施工限制。熟悉多階段工序與邊界條件模擬，培養縝密邏輯與專案管理能力。',
    },
    {
      project: '桃園捷運綠線',
      description:
        '負責沿線多座小型廠房之結構設計與荷載分析，並與各系統（如機電、建築）介面單位協調設計需求與圖說調整，展現靈活應變與跨職能溝通能力。過程中亦強化對建模工具與資料整合的掌握，累積大型系統架構經驗。',
    },
    {
      project: '太魯閣明隧道整建工程',
      description:
        '參與老舊結構補強與擋土設施設計，從現況調查、結構模擬到補強方案評估皆有涉獵。熟悉既有系統改造流程，並提升了問題分析、資料整理與技術提案能力，具備將工程問題轉化為系統解決方案的實務經驗。',
    },
  ],
  demoVideo: {
    myResume: '我的履歷網站',
    cryptoIndex: '我的Crypto index網站',
    habitTracker: '我的Habit Tracker 網站',
  },
}
