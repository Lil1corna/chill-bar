export default function handler(req, res) {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_ANON_KEY,
    storageBucket: process.env.SUPABASE_STORAGE_BUCKET || 'menu-images'
  });
}
