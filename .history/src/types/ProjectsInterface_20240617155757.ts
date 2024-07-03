// ../types/ProjectInterface.ts
export interface Project {
    title: string;
    text: string;
    imglink: string;
    toroute: string;
}

export interface ProjectType {
    dev: string;
    projects: Project[];
}
