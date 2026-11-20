window.MIRAN_CONFIG = {
  SUPABASE_URL: "https://htwwaxpvmxlvxermsver.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_fFLpRv1_3-PAXzop8yA1Hw_IprKuI-e",
  TELEGRAM_USERNAME: "mame15"
};

window.initMiranSupabase = function () {
  const cfg = window.MIRAN_CONFIG || {};
  const configured =
    cfg.SUPABASE_URL &&
    cfg.SUPABASE_ANON_KEY &&
    !cfg.SUPABASE_URL.includes("YOUR_PROJECT_ID") &&
    !cfg.SUPABASE_ANON_KEY.includes("YOUR_SUPABASE_ANON_PUBLIC_KEY");

  if (!configured || !window.supabase) {
    return { client: null, configured: false };
  }
  const client = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
  return { client, configured: true };
};
