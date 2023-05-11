declare namespace NodeJS {
  interface ProcessEnv {
    SUPABASE_PASSWORD: string;
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
    SUPABASE_ACCESS_TOKEN: string;
  }
}
