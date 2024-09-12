export interface Education {
    href: string;
    qualification: string[] | string;
    src: string;
    title: string;
    years: string[] | string;
    serthref?: string[] | string;
}
export interface Pppp {
    dev: string;
    projects: Project[];
}

export interface Project {
    text: string;
    src: string;
    toroute: string;
}
