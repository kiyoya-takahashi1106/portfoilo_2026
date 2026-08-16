
import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "髙橋 清彌",
  englishName: "Kiyoya Takahashi",
  role: "M1",
  email: "kiyoya.takahashi1106@gmail.com",
  profileImageUrl: "/profile.jpg",
  heroImageUrl: "/heroSection.jpg",
  universityName: "Ritsumeikan University",
  departmentName: "立命館 情報理工研究科",
  departmentUrl: "https://www.ritsumei.ac.jp/gsise/",
  labName: "知能画像処理研究室",
  labUrl: "https://media.ritsumei.ac.jp/iipl/",
  
  socialLinks: {
    github: "https://github.com/kiyoya-takahashi1106",
    twitter: "https://x.com/kiyoya_1106",
  },

  news: [
    {
      id: 'news-1',
      category: 'Internship',
      date: '2026 / 7',
      title: 'Freee・Quickのインターン優勝!!',
      description: 'ビジネスとエンジニア両方のインターンで優勝出来ました。',
      link: '',
    },
    {
      id: 'news-2',
      category: 'Job Hunting',
      date: '2026 / 5',
      title: '28卒で就活を行い始めます!!',
      description: 'BizDev・Webエンジニア・AIエンジニアの職種で就活を行います。\n興味のある企業様はお気軽にご連絡ください。',
      link: '',
    },
    {
      id: 'news-3',
      category: 'Research',
      date: '2026 / 4',
      title: '4月から所属が立命館に移りました!!',
      description: '情報欠損環境において、ロバスト性の高いMMモデルの研究を行う予定です。',
      link: '',
    },
  ],

  educationWork: [
    {
      type: 'Education',
      shortWork: 'false',
      date: '2022 / 4 ~ 2026 / 3',
      title: 'Osaka Institute of Technology',
      subtitle: 'System Design, Bachelor Student',
      logoUrl: '/educationWork/oit.jpg',
      materialUrl: "https://www.oit.ac.jp/academic/rd/system/", 
      now: false
    },
    {
      type: 'Work',
      shortWork: 'false',
      date: '2024 / 4 ~ 2025 / 2',
      title: 'Teacher Assistant in OIT',
      subtitle: 'Programming I・IV (Python)',
      tags: ['Python', 'Teaching'],
      logoUrl: '/educationWork/oit.jpg',
      materialUrl: "", 
      now: false
    },
    {
      type: 'Education',
      shortWork: 'false',
      date: '2024 / 9 ~ 2026 / 3',
      title: 'Computational Intelligence Lab in OIT',
      subtitle: 'Deep Learning & Computational Intelligence',
      logoUrl: '/educationWork/oit.jpg',
      materialUrl: "https://www.oit.ac.jp/labs/rd/rssrv/seo-lab/member.html", 
      now: false
    },
    {
      type: 'Work',
      shortWork: 'false',
      date: '2025 / 2 ~ 2025 / 5',
      title: 'AI Engineer in Skill Systems',
      subtitle: 'ガン早期発見プロジェクト, 基本実装, 基盤モデル選定',
      tags: ['Python', 'Pytorch'],
      logoUrl: '/educationWork/skill_systems.jpg',
      materialUrl: "", 
      now: false
    },
    {
      type: 'Work',
      shortWork: 'false',
      date: '2025 / 3 / 3  ~ 14',
      title: 'Server side Engineer in brightech',
      subtitle: '食事共有SNSの要件定義, API設計',
      tags: ['PHP', 'Laravel', 'MySQL', 'Ansible', 'Conoha'],
      logoUrl: '/educationWork/brightech.jpg',
      materialUrl: "", 
      now: false
    },
    { 
      type: 'Work',
      shortWork: 'false',
      date: '2025 / 12 ~ ',
      title: 'AI Engineer in Treee',
      subtitle: '展示会コンサル営業, クライアント商談, プロトタイプ開発',
      tags: ['Next.js', 'FastAPI', 'Firebase'],
      logoUrl: '/educationWork/treee.jpg',
      materialUrl: "", 
      now: true
    },
    {
      type: 'Education',
      shortWork: 'false',
      date: '2026 / 4 ~ ',
      title: 'Ritsumeikan University',
      subtitle: 'Information science and engineering, Master Student',
      logoUrl: '/educationWork/ritumei.jpg',
      materialUrl: "https://www.ritsumei.ac.jp/gsise/", 
      now: true
    },
    {
      type: 'Education',
      shortWork: 'false',
      date: '2026 / 4 ~ ',
      title: 'Computational Intelligence Lab in Ritsumeikan',
      subtitle: 'Intelligent image processing, Deep learning',
      logoUrl: '/educationWork/ritumei.jpg',
      materialUrl: "https://media.ritsumei.ac.jp/iipl/", 
      now: true
    },
    { 
      type: 'Work',
      shortWork: 'false',
      date: '2026 / 5 / 13 ~ 6 / 5',
      title: 'Web Engineer in Degital Garage',
      subtitle: '顔タイプ診断アプリ, 要件定義, 設計, 実装',
      tags: ['Next.js', 'Hono', 'AWS'],
      logoUrl: '/educationWork/degital_garage.jpg',
      materialUrl: "", 
      now: false
    },
    { 
      type: 'Work',
      shortWork: 'true',
      date: '2026 / 7 / 2 ・ 3',
      title: 'BizDev in freee',
      subtitle: 'Dayサービス事業に対する営業戦略',
      logoUrl: '/educationWork/freee.jpg',
      materialUrl: "https://drive.google.com/file/d/1wIWQZOIsW_O7ky8MYJbwRAXsI362-CJf/view?usp=sharing", 
      now: false
    },
    { 
      type: 'Work',
      shortWork: 'true',
      date: '2026 / 8 / 1 ~ 3',
      title: 'Web Engineer in Quick',
      subtitle: '学生団体向け管理サービス, 課題発見, 要件定義, 設計, 実装',
      tags: ['Next.js', 'FastAPI'],
      logoUrl: '/educationWork/quick.jpg',
      materialUrl: "https://drive.google.com/file/d/1vXt2p8IHddeyk4JYGZkIt_0ccom_wUXs/view?usp=sharing", 
      now: false
    },
    { 
      type: 'Work',
      shortWork: 'true',
      date: '2026 / 8 / 6 ・ 7',
      title: 'BizDev in stores',
      subtitle: '5年後の店舗経営, 経営の相棒AI',
      logoUrl: '/educationWork/stores.jpg',
      materialUrl: "https://drive.google.com/file/d/1BSBoLzPyV9ris_BXtFspPmygcYOIIa4G/view?usp=sharing", 
      now: false
    },
    { 
      type: 'Work',
      shortWork: 'true',
      date: '2026 / 8 / 8 ~ 10',
      title: 'Markting in itsumo',
      subtitle: 'ONアパレルマーケティング戦略',
      logoUrl: '/educationWork/itsumo.jpg',
      materialUrl: "https://drive.google.com/file/d/1Ig2oNxltnCdZd3gGsIY8CLzt2n6p4ROu/view?usp=sharing", 
      now: false
    },
    { 
      type: 'Work',
      shortWork: 'true',
      date: '2026 / 8 / 12 ~ 14',
      title: 'Web Engineer in PRTimes',
      subtitle: 'メディアリスト自動生成機能, 商談ヒアリング, 要件定義, 設計, 実装',
      tags: ['Next.js', 'PHP'],
      logoUrl: '/educationWork/prtimes.jpg',
      materialUrl: "https://docs.google.com/presentation/d/1eC6Rd2bymee4w9h4pjpDcXTSnpgFbr7o/edit?usp=sharing&ouid=118070372636972839905&rtpof=true&sd=true", 
      now: false
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
      tech: ['JPhack2025', 'Google拡張', 'さくらインターネット賞'],
      imageUrl: '/project/JPHACK2025.jpg',
      link: 'https://github.com/jphacks/os_2521'
    },
  ],

  qualifications: [
    { name: '基本情報技術者試験', label: 'Applied Information Technology Engineer', date: '2023 / 11'},
    { name: 'TOEIC L&R 775', label: 'Official Score', date: '2024 / 12'},
    { name: 'OIT 研究優秀賞', label: 'Research  Award', date: '2026 / 3' },
    { name: '立命館大学院１年次対象成績優秀者奨学金Ⅰ', label: 'Scholarship', date: '2026 / 4' },
  ],
};
