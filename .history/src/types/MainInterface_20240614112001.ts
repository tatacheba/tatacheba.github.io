export interface Education {
    href: string;
    qualification: string[] | string;
    src: string;
    title: string;
    years: string[] | string;
    serthref?: string[] | string;
}

// ../types/MainInterface.ts
export interface Project {
    text: string;
    title: string;
    toroute: string;
}

export type ProjectType = {
    dev: string;
    projects: Project[];
};
