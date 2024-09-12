export interface Education {
    href: string;
    qualification: string[] | string;
    src: string;
    title: string;
    years: string[] | string;
    serthref?: string[] | string;
}
export interface ProjectType {
    dev: string;
    projects: Projects[];
}

export interface Projects {
    title: string;
    src: string;
    toroute: string;
}
