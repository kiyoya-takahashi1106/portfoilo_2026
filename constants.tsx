
import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "髙橋 清彌",
  englishName: "Kiyoya Takahashi",
  role: "M1",
  email: "kiyoya.takahashi1106@gmail.com",
  profileImageUrl: "/profile.jpg",
  heroImageUrl: "/heroSection.jpg",
  universityName: "Ritsumeikan University",
  departmentName: "情報理工研究科 人間情報科学専攻",
  departmentUrl: "https://www.oit.ac.jp/academic/rd/system/index.html",
  labName: "知能画像処理研究室",
  labUrl: "https://media.ritsumei.ac.jp/iipl/",
  
  socialLinks: {
    github: "https://github.com/kiyoya-takahashi1106",
    twitter: "https://x.com/kiyoya_1106",
  },


  educationWork: [
    {
      type: 'Education',
      date: '2022 / 4 ~ 2026 / 3',
      title: 'Osaka Institute of Technology',
      subtitle: 'System Design, Bachelor Student',
      logoUrl: '/educationWork/oit.jpg',
      now: false
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
      date: '2024 / 9 ~ 2026 / 3',
      title: 'Computational Intelligence Lab in OIT',
      subtitle: 'Deep Learning & Computational Intelligence',
      logoUrl: '/educationWork/oit.jpg',
      now: false
    },
    {
      type: 'Work',
      date: '2025 / 2 ~ 2025 / 5',
      title: 'AI Engineer in Skill Systems',
      subtitle: 'ガン早期発見プロジェクト, 基本実装, 基盤モデル選定',
      tags: ['Python', 'Pytorch'],
      logoUrl: '/educationWork/skill_systems.jpg',
      now: false
    },
    {
      type: 'Work',
      date: '2025 / 2 ~ 2025 / 3',
      title: 'Server side Engineer in brightech',
      subtitle: '食事共有SNSの要件定義, API設計',
      tags: ['PHP', 'Laravel', 'MySQL', 'Ansible', 'Conoha'],
      logoUrl: '/educationWork/brightech.jpg',
      now: false
    },
    { 
      type: 'Work',
      date: '2025 / 12 ~ 2025 / 4',
      title: 'AI Engineer in Treee',
      subtitle: '展示会コンサル営業, クライアント商談, プロトタイプ開発',
      tags: ['Next.js', 'FastAPI', 'Firebase'],
      logoUrl: '/educationWork/treee.jpg',
      now: false
    },
    {
      type: 'Education',
      date: '2026 / 4 ~ ',
      title: 'Ritsumeikan University',
      subtitle: 'Information science and engineering, Master Student',
      logoUrl: '/educationWork/ritumei.jpg',
      now: true
    },
    {
      type: 'Education',
      date: '2026 / 4 ~ ',
      title: 'Computational Intelligence Lab in Ritsumeikan',
      subtitle: 'Intelligent image processing, Deep learning',
      logoUrl: '/educationWork/ritumei.jpg',
      now: true
    },
  ],
  
  research: [
    {
      id: 'r1',
      imageUrl: '/research/psychology_erc.png',
      title: 'Psychology ERC',
      description: '会話における感情認識に対して、心理学的知見に基づく "発話速度" と "話者・聞き手間の感情相互作用"を明示的に取り入れました。言語表現と言語以外の数値特徴を統合する Cross-Domain Attention を提案し、さらに話者・聞き手の相互作用状態を導入することで、感情推定の精度向上を行った。',
      tags: ['Emotion Recognition in Conversation', 'Dialogue Systems', '電子情報通信学会若手関西支部'],
      link: 'https://github.com/kiyoya-takahashi1106/PSYCHOLOGY-ERC',
      now: false
    },
    {
      id: 'r2',
      imageUrl: '/research/common_space.png',
      title: 'Common Space Learning Based on Representation Disentanglement for Zero-Shot Classification',
      description: 'CLIP系共通空間学習におけるInfoNCEの理論的限界に着目し、ZS分類に不要な情報の混在問題を明確化した。表現分離に基づき、必要な情報のみを用いる学習枠組みを提案し、5つの下流データセットにおいて一貫した性能向上を実証した。',
      tags: ['Common Space Learning', 'Zero-Shot Classification', 'CLIP', 'Contrastive Learning', '電子情報通信学会総合大会'],
      link: 'https://drive.google.com/file/d/19kg7Xa6D3vmiIw2f7DrSE3OWdCkZi4of/view',
      now: false
    }
  ],

  projects: [
    {
      id: 'p1',
      title: 'ひとやすみ通信',
      description: '瞬き判定による疲労検知を行い、拡張機能とサーバー連携（FastAPI・Redis・SSE/SocketIO）により休憩を促進するシステムの開発。 ',
      tech: ['JPhack2025', 'Google拡張機能', 'さくらインターネット賞'],
      imageUrl: '/project/JPHACK2025.jpg',
      link: 'https://github.com/jphacks/os_2521'
    },
  ],

  qualifications: [
    { name: '基本情報技術者試験', label: 'Applied Information Technology Engineer', icon: '📜' },
    { name: 'TOEIC L&R 775', label: 'Official Score', icon: '🌍' },
    { name: 'OIT 研究優秀賞', label: 'Research  Award', icon: '🎖️' },
    { name: '立命館大学院１年次対象成績優秀者奨学金Ⅰ', label: 'Scholarship', icon: '🎖️' },
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
