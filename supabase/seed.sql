insert into profile (
  id,
  name,
  english_name,
  role,
  email,
  university_name,
  department_name,
  department_url,
  lab_name,
  lab_url,
  profile_image_path,
  hero_image_path,
  social_links
) values (
  'main',
  '髙橋 清彌',
  'Kiyoya Takahashi',
  'M1',
  'kiyoya.takahashi1106@gmail.com',
  'Ritsumeikan University',
  '立命館 情報理工研究科',
  'https://www.ritsumei.ac.jp/gsise/',
  '知能画像処理研究室',
  'https://media.ritsumei.ac.jp/iipl/',
  'profile/profile.jpg',
  'hero/hero.jpg',
  '{"github":"https://github.com/kiyoya-takahashi1106","twitter":"https://x.com/kiyoya_1106"}'::jsonb
) on conflict (id) do update set
  name = excluded.name,
  english_name = excluded.english_name,
  role = excluded.role,
  email = excluded.email,
  university_name = excluded.university_name,
  department_name = excluded.department_name,
  department_url = excluded.department_url,
  lab_name = excluded.lab_name,
  lab_url = excluded.lab_url,
  profile_image_path = excluded.profile_image_path,
  hero_image_path = excluded.hero_image_path,
  social_links = excluded.social_links,
  updated_at = now();

truncate table news, education_work, research, projects, qualifications restart identity;

insert into news (category, date_label, title, description, display_order) values
('Internship', '2026 / 7', 'Freee・Quickのインターン優勝!!', 'ビジネスとエンジニア両方のインターンで優勝出来ました。', 1),
('Job Hunting', '2026 / 5', '28卒で就活を行い始めます!!', 'BizDev・Webエンジニア・AIエンジニアの職種で就活を行います。', 2),
('Research', '2026 / 4', '4月から所属が立命館に移りました!!', '情報欠損環境において、ロバスト性の高いMMモデルの研究を行う予定です。', 3);

insert into education_work (
  type,
  short_work,
  date_label,
  title,
  subtitle,
  logo_path,
  material_url,
  tags,
  is_current,
  display_order
) values
('Education', false, '2022 / 4 ~ 2026 / 3', 'Osaka Institute of Technology', 'System Design, Bachelor Student', 'education-work/oit.jpg', 'https://www.oit.ac.jp/academic/rd/system/', '{}', false, 1),
('Work', false, '2024 / 4 ~ 2025 / 2', 'Teacher Assistant in OIT', 'Programming I・IV (Python)', 'education-work/oit.jpg', null, array['Python','Teaching'], false, 2),
('Education', false, '2024 / 9 ~ 2026 / 3', 'Computational Intelligence Lab in OIT', 'Deep Learning & Computational Intelligence', 'education-work/oit.jpg', 'https://www.oit.ac.jp/labs/rd/rssrv/seo-lab/member.html', '{}', false, 3),
('Work', false, '2025 / 2 ~ 2025 / 5', 'AI Engineer in Skill Systems', 'ガン早期発見プロジェクト, 基本実装, 基盤モデル選定', 'education-work/skill-systems.jpg', null, array['Python','Pytorch'], false, 4),
('Work', false, '2025 / 3 / 3  ~ 14', 'Server side Engineer in brightech', '食事共有SNSの要件定義, API設計', 'education-work/brightech.jpg', null, array['PHP','Laravel','MySQL','Ansible','Conoha'], false, 5),
('Work', false, '2025 / 12 ~ ', 'AI Engineer in Treee', '展示会コンサル営業, クライアント商談, プロトタイプ開発', 'education-work/treee.jpg', null, array['Next.js','FastAPI','Firebase'], true, 6),
('Education', false, '2026 / 4 ~ ', 'Ritsumeikan University', 'Information science and engineering, Master Student', 'education-work/ritumei.jpg', 'https://www.ritsumei.ac.jp/gsise/', '{}', true, 7),
('Education', false, '2026 / 4 ~ ', 'Computational Intelligence Lab in Ritsumeikan', 'Intelligent image processing, Deep learning', 'education-work/ritumei.jpg', 'https://media.ritsumei.ac.jp/iipl/', '{}', true, 8),
('Work', false, '2026 / 5 / 13 ~ 6 / 5', 'Web Engineer in Degital Garage', '顔タイプ診断アプリ, 要件定義, 設計, 実装', 'education-work/degital-garage.jpg', null, array['Next.js','Hono','AWS'], false, 9),
('Work', true, '2026 / 7 / 2 ・ 3', 'BizDev in freee', 'Dayサービス事業に対する営業戦略', 'education-work/freee.jpg', 'https://drive.google.com/file/d/1wIWQZOIsW_O7ky8MYJbwRAXsI362-CJf/view?usp=sharing', '{}', false, 10),
('Work', true, '2026 / 8 / 1 ~ 3', 'Web Engineer in Quick', '学生団体向け管理サービス, 課題発見, 要件定義, 設計, 実装', 'education-work/quick.jpg', 'https://drive.google.com/file/d/1vXt2p8IHddeyk4JYGZkIt_0ccom_wUXs/view?usp=sharing', array['Next.js','FastAPI'], false, 11),
('Work', true, '2026 / 8 / 6 ・ 7', 'BizDev in stores', '5年後の店舗経営, 経営の相棒AI', 'education-work/stores.jpg', 'https://drive.google.com/file/d/1BSBoLzPyV9ris_BXtFspPmygcYOIIa4G/view?usp=sharing', '{}', false, 12),
('Work', true, '2026 / 8 / 8 ~ 10', 'Markting in itsumo', 'ONアパレルマーケティング戦略', 'education-work/itsumo.jpg', 'https://drive.google.com/file/d/1Ig2oNxltnCdZd3gGsIY8CLzt2n6p4ROu/view?usp=sharing', '{}', false, 13),
('Work', true, '2026 / 8 / 12 ~ 14', 'Web Engineer in PRTimes', 'メディアリスト自動生成機能, 商談ヒアリング, 要件定義, 設計, 実装', 'education-work/prtimes.jpg', 'https://docs.google.com/presentation/d/1eC6Rd2bymee4w9h4pjpDcXTSnpgFbr7o/edit?usp=sharing&ouid=118070372636972839905&rtpof=true&sd=true', array['Next.js','PHP'], false, 14);

insert into research (title, description, image_path, tags, link_url, is_current, display_order) values
('Psychology ERC', '会話における感情認識に対して、心理学的知見に基づく "発話速度" と "話者・聞き手間の感情相互作用"を明示的に取り入れました。言語表現と言語以外の数値特徴を統合する Cross-Domain Attention を提案し、さらに話者・聞き手の相互作用状態を導入することで、感情推定の精度向上を行った。', 'research/psychology-erc.png', array['Emotion Recognition in Conversation','Dialogue Systems','電子情報通信学会若手関西支部'], 'https://github.com/kiyoya-takahashi1106/PSYCHOLOGY-ERC', false, 1),
('Common Space Learning Based on Representation Disentanglement for Zero-Shot Classification', 'CLIP系共通空間学習におけるInfoNCEの理論的限界に着目し、ZS分類に不要な情報の混在問題を明確化した。表現分離に基づき、必要な情報のみを用いる学習枠組みを提案し、5つの下流データセットにおいて一貫した性能向上を実証した。', 'research/common-space.png', array['Common Space Learning','Zero-Shot Classification','CLIP','Contrastive Learning','電子情報通信学会総合大会'], 'https://drive.google.com/file/d/19kg7Xa6D3vmiIw2f7DrSE3OWdCkZi4of/view', false, 2);

insert into projects (title, description, tech, image_path, link_url, display_order) values
('ひとやすみ通信', '瞬き判定による疲労検知を行い、拡張機能とサーバー連携（FastAPI・Redis・SSE/SocketIO）により休憩を促進するシステムの開発。 ', array['JPhack2025','Google拡張','さくらインターネット賞'], 'projects/jphack2025.jpg', 'https://github.com/jphacks/os_2521', 1);

insert into qualifications (name, label, date_label, display_order) values
('基本情報技術者試験', 'Applied Information Technology Engineer', '2023 / 11', 1),
('TOEIC L&R 775', 'Official Score', '2024 / 12', 2),
('OIT 研究優秀賞', 'Research  Award', '2026 / 3', 3),
('立命館大学院１年次対象成績優秀者奨学金Ⅰ', 'Scholarship', '2026 / 4', 4);
