// ../types/ProjectInterface.ts
export interface Project {
    text: string;
    title: string;
    toroute: string;
    imglink: string;
}

export interface ProjectType {
    dev: string;
    projects: Project[];
}
