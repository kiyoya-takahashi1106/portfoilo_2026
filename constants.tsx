
import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "髙橋 清彌",
  englishName: "Kiyoya Takahashi",
  role: "B4 ",
  email: "kiyoya.takahashi1106@gmail.com",
  profileImageUrl: "/profile.jpg",
  heroImageUrl: "/heroSection.jpg", // クールな抽象図や研究に関連する画像
  universityName: "Osaka Institute of Tech",
  departmentName: "システムデザイン工学科",
  departmentUrl: "https://www.oit.ac.jp/academic/rd/system/index.html",
  labName: "知能情報処理研究室",
  labUrl: "https://www.oit.ac.jp/labs/rd/rssrv/seo-lab/index.html",
  
  socialLinks: {
    github: "https://github.com/kiyoya-takahashi1106",
    twitter: "https://x.com/kiyoya_1106",
  },

  // bio: "大阪工業大学 システムデザイン工学科の4年生です。知能情報処理研究室に所属し、マルチモーダル学習や表情認識を用いた感情推定の研究を行っています。AI技術を駆使して、より直感的で人間に寄り添うシステムの構築を目指しています。",
  // location: "大阪, 日本",
  // experience: "AIエンジニアインターン (2025), ティーチングアシスタント (2024)",

  educationWork: [
    {
      type: 'Education',
      date: '2022 / 4 ~ Present',
      title: 'Osaka Institute of Technology',
      subtitle: 'System Design, Bachelor Student',
      logoUrl: '/educationWork/oit.jpg',
      now: true
    },
    {
      type: 'Work',
      date: '2024 / 4 ~ 2025 / 2',
      title: 'Teacher Assistant in OIT',
      subtitle: 'Programming I・IV (Python)',
      tags: ['Python', 'Teaching'],
      logoUrl: '/educationWork/oit.jpg',
      now: false
    },
    {
      type: 'Education',
      date: '2024 / 9 ~ Present',
      title: 'Computational Intelligence Lab in OIT',
      subtitle: 'Deep Learning & Computational Intelligence',
      logoUrl: '/educationWork/oit.jpg',
      now: true
    },
    {
      type: 'Work',
      date: '2025 / 2 ~ 2025 / 3',
      title: 'Server side Engineer in brightech',
      subtitle: '食事共有SNSの要件定義, api設計',
      tags: ['PHP', 'Laravel', 'MySQL', 'Ansible', 'Conoha'],
      logoUrl: '/educationWork/brightech.jpg',
      now: false
    },
    {
      type: 'Work',
      date: '2025 / 2 ~ 2025 / 5',
      title: 'AI Engine in Skill Systems',
      subtitle: '基本実装, モデル選定, フォント作成案件',
      tags: ['Python', 'Pytorch'],
      logoUrl: '/educationWork/skill_systems.jpg',
      now: false
    }
  ],
  
  research: [
    {
      id: 'r1',
      imageUrl: '/research/psychology_erc.png',
      title: 'Psychology ERC',
      description: '会話における感情認識に対して、心理学的知見に基づく "発話速度" と "話者・聞き手間の感情相互作用"を明示的に取り入れました。言語表現と言語以外の数値特徴を統合する Cross-Domain Attention を提案し、さらに話者・聞き手の相互作用状態を導入することで、感情推定の精度向上を行った。',
      tags: ['Emotion Recognition in Conversation', 'Dialogue Systems', '電子情報通信学会若手支部'],
      link: 'https://github.com/kiyoya-takahashi1106/PSYCHOLOGY-ERC',
      now: false
    },
    {
      id: 'r2',
      imageUrl: '/research/common_space.png',
      title: 'Common Space Learning Based on Representation Disentanglement for Zero-Shot Classification',
      description: 'CLIP系共通空間学習におけるInfoNCEの理論的限界に着目し、ZS分類に不要な情報の混在問題を明確化した。表現分離に基づき、必要な情報のみを用いる学習枠組みを提案し、5つの下流データセットにおいて一貫した性能向上を実証した。',
      tags: ['Common Space Learning', 'Zero-Shot Classification', 'CLIP', 'Contrastive Learning'],
      now: true
    }
  ],

  projects: [
    {
      id: 'p1',
      title: 'ひとやすみ通信',
      description: '瞬き判定による疲労検知を行い、拡張機能とサーバー連携（FastAPI・Redis・SSE/SocketIO）により休憩を促進するシステムの開発。 ',
      tech: ['JPhack', 'さくらインターネット賞', 'Google拡張機能'],
      imageUrl: '/project/JPHACK2025.jpg',
      link: 'https://github.com/jphacks/os_2521'
    },
    // {
    //   id: 'p2',
    //   title: 'Vision-Language Navigation',
    //   description: 'CLIPを用いた自然言語指示によるロボットの自律移動シミュレーション。',
    //   tech: ['Python', 'OpenCV', 'CLIP'],
    //   imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    //   link: 'https://github.com/Kiyo-Takahashi'
    // },
    // {
    //   id: 'p3',
    //   title: 'AI Portfolio Builder',
    //   description: 'Gemini APIを活用し、ユーザーの経歴から自動でポートフォリオを生成する Webツール。',
    //   tech: ['React', 'TypeScript', 'Gemini'],
    //   imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    // }
  ],

  qualifications: [
    { name: '基本情報技術者試験', label: 'Applied Information Technology Engineer', icon: '📜' },
    { name: 'TOEIC L&R 775', label: 'Official Score', icon: '🌍' },
    { name: '学長章 × 1', label: 'Presidential Award', icon: '🎖️' },
  ],




  skills: [
    { name: 'React', icon: '⚛️', category: 'frontend' },
    { name: 'TypeScript', icon: '🟦', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🌊', category: 'frontend' },
    { name: 'Python', icon: '🐍', category: 'backend' },
    { name: 'PyTorch', icon: '🔥', category: 'backend' },
    { name: 'Node.js', icon: '🟢', category: 'backend' },
    { name: 'Git', icon: '📜', category: 'tools' },
    { name: 'Docker', icon: '🐳', category: 'tools' },
    { name: 'Vercel', icon: '▲', category: 'tools' },
  ]
};
