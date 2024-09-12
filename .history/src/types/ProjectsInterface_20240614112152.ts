export interface ProjectType {
    dev: string;
    projects: Project[];
}

export interface Education {
    href: string;
    qualification: string[] | string;
    src: string;
    title: string;
    years: string[] | string;
    serthref?: string[] | string;
}
