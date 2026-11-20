// MIRAN ABAYA - Supabase Configuration
// Replace the two values below with your own Project URL and anon public key
// from: Supabase Dashboard -> Project Settings -> API
// Note: NEVER put your service_role key here. The anon key is safe for frontend because RLS protects the database.

window.MIRAN_CONFIG = {
  SUPABASE_URL: "https://YOUR_PROJECT_ID.supabase.co",
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_PUBLIC_KEY",
  TELEGRAM_USERNAME: "mame15"
};

window.initMiranSupabase = function () {
  const cfg = window.MIRAN_CONFIG || {};
  const configured =
    cfg.SUPABASE_URL &&
    cfg.SUPABASE_ANON_KEY &&
    !cfg.SUPABASE_URL.includes("YOUR_PROJECT_ID") &&
    !cfg.SUPABASE_ANON_KEY.includes("YOUR_SUPABASE_ANON_PUBLIC_KEY");

  if (!configured) {
    return { client: null, configured: false };
  }
  const client = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
  return { client, configured: true };
};

