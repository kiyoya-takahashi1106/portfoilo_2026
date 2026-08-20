import { supabase } from '../lib/supabase';

const BUCKET_NAME = 'portfolio-assets';

export const getPublicAssetUrl = (path?: string | null): string => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('/')) return path;
  if (!supabase) return `/${path}`;

  return supabase.storage.from(BUCKET_NAME).getPublicUrl(path).data.publicUrl;
};
