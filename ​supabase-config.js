window.MIRAN_CONFIG = {
  SUPABASE_URL: "https://htwwaxpvmxlvxermsver.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_fFLpRv1_3-PAXzop8yA1Hw_IprKuI-e",
  TELEGRAM_USERNAME: "mame15"
};

window.initMiranSupabase = function () {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.MIRAN_CONFIG || {};
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL.includes("YOUR_PROJECT_ID")) {
    return { client: null, configured: false };
  }
  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return { client, configured: true };
};
