
// /api/config.js
export default function handler(request, response) {
  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return response.status(500).json({ error: 'Supabase environment variables are not set on the server.' });
  }

  response.status(200).json({
    supabaseUrl,
    supabaseKey,
  });
}
