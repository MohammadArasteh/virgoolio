/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    SUPABASE_PASSWORD: string;
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
    SUPABASE_ACCESS_TOKEN: string;
  }
}

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
