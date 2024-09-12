interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    // Добавь другие переменные окружения, если они есть
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
