import { supabase } from '../lib/supabase';
import {
  EducationWorkItem,
  NewsItem,
  NewsCategory,
  ProfileData,
  Project,
  Qualification,
  ResearchItem,
  SocialLinks,
} from '../types';
import { getPublicAssetUrl } from './storageService';

type ProfileRow = {
  name: string;
  english_name: string;
  role: string;
  email: string;
  university_name: string;
  department_name: string;
  department_url: string;
  lab_name: string;
  lab_url: string;
  profile_image_path: string;
  hero_image_path: string;
  social_links: SocialLinks;
};

type NewsRow = {
  id: string;
  category: NewsCategory;
  date_label: string | null;
  title: string;
  description: string;
  link_url: string | null;
};

type EducationWorkRow = {
  type: 'Education' | 'Work';
  short_work: boolean | null;
  date_label: string;
  title: string;
  subtitle: string;
  logo_path: string;
  material_url: string | null;
  tags: string[] | null;
  is_current: boolean | null;
};

type ResearchRow = {
  id: string;
  title: string;
  description: string;
  image_path: string;
  tags: string[];
  link_url: string | null;
  is_current: boolean | null;
};

type ProjectRow = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image_path: string;
  link_url: string | null;
};

type QualificationRow = {
  name: string;
  label: string;
  date_label: string | null;
};

const assertSupabase = () => {
  if (!supabase) {
    throw new Error('Supabase environment variables are not configured.');
  }
  return supabase;
};

const throwIfError = (error: { message: string } | null) => {
  if (error) throw new Error(error.message);
};

export const getProfile = async (): Promise<Omit<ProfileData, 'news' | 'projects' | 'qualifications' | 'research' | 'educationWork'>> => {
  const client = assertSupabase();
  const { data, error } = await client
    .from('profile')
    .select('*')
    .eq('id', 'main')
    .single<ProfileRow>();

  throwIfError(error);

  return {
    name: data.name,
    englishName: data.english_name,
    role: data.role,
    email: data.email,
    universityName: data.university_name,
    departmentName: data.department_name,
    departmentUrl: data.department_url,
    labName: data.lab_name,
    labUrl: data.lab_url,
    profileImageUrl: getPublicAssetUrl(data.profile_image_path),
    heroImageUrl: getPublicAssetUrl(data.hero_image_path),
    socialLinks: data.social_links ?? {},
  };
};

export const getNews = async (): Promise<NewsItem[]> => {
  const client = assertSupabase();
  const { data, error } = await client
    .from('news')
    .select('id, category, date_label, title, description, link_url')
    .eq('is_published', true)
    .order('display_order', { ascending: true })
    .returns<NewsRow[]>();

  throwIfError(error);

  return data.map((item) => ({
    id: item.id,
    category: item.category,
    date: item.date_label ?? undefined,
    title: item.title,
    description: item.description,
    link: item.link_url || undefined,
  }));
};

export const getEducationWork = async (): Promise<EducationWorkItem[]> => {
  const client = assertSupabase();
  const { data, error } = await client
    .from('education_work')
    .select('type, short_work, date_label, title, subtitle, logo_path, material_url, tags, is_current')
    .eq('is_published', true)
    .order('display_order', { ascending: true })
    .returns<EducationWorkRow[]>();

  throwIfError(error);

  return data.map((item) => ({
    type: item.type,
    shortWork: Boolean(item.short_work),
    date: item.date_label,
    title: item.title,
    subtitle: item.subtitle,
    logoUrl: getPublicAssetUrl(item.logo_path),
    materialUrl: item.material_url || undefined,
    tags: item.tags ?? undefined,
    now: Boolean(item.is_current),
  }));
};

export const getResearch = async (): Promise<ResearchItem[]> => {
  const client = assertSupabase();
  const { data, error } = await client
    .from('research')
    .select('id, title, description, image_path, tags, link_url, is_current')
    .eq('is_published', true)
    .order('display_order', { ascending: true })
    .returns<ResearchRow[]>();

  throwIfError(error);

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    imageUrl: getPublicAssetUrl(item.image_path),
    tags: item.tags,
    link: item.link_url || undefined,
    now: Boolean(item.is_current),
  }));
};

export const getProjects = async (): Promise<Project[]> => {
  const client = assertSupabase();
  const { data, error } = await client
    .from('projects')
    .select('id, title, description, tech, image_path, link_url')
    .eq('is_published', true)
    .order('display_order', { ascending: true })
    .returns<ProjectRow[]>();

  throwIfError(error);

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    tech: item.tech,
    imageUrl: getPublicAssetUrl(item.image_path),
    link: item.link_url || undefined,
  }));
};

export const getQualifications = async (): Promise<Qualification[]> => {
  const client = assertSupabase();
  const { data, error } = await client
    .from('qualifications')
    .select('name, label, date_label')
    .eq('is_published', true)
    .order('display_order', { ascending: true })
    .returns<QualificationRow[]>();

  throwIfError(error);

  return data.map((item) => ({
    name: item.name,
    label: item.label,
    date: item.date_label ?? undefined,
  }));
};

export const getPortfolioData = async (): Promise<ProfileData> => {
  const [profile, news, educationWork, research, projects, qualifications] = await Promise.all([
    getProfile(),
    getNews(),
    getEducationWork(),
    getResearch(),
    getProjects(),
    getQualifications(),
  ]);

  return {
    ...profile,
    news,
    educationWork,
    research,
    projects,
    qualifications,
  };
};
