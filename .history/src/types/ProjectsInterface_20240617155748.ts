// ../types/ProjectInterface.ts
export interface Project {
    text: string;
    title: string;
    imglink: string;
    toroute: string;
}

export interface ProjectType {
    dev: string;
    projects: Project[];
}
