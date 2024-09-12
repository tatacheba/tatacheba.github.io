/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
interface ImportMetaEnv {
    // readonly VITE_YOUR_URL: string;
    // readonly VITE_REALM: string;
    // readonly VITE_CLIENT_ID: string;
    readonly VITE_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
