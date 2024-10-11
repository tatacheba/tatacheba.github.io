// vite-env.d.ts
interface ImportMetaEnv {
    BASE_URL: string; // Your base URL defined in vite.config.ts
    // Add other environment variables you may have, for example:
    // VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
