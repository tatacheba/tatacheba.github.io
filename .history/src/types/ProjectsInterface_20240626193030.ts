// ../types/ProjectInterface.ts
export interface Project {
    id: number;
    title: string;
    text: string;
    imglink: string;
    toroute: string;
}

export interface ProjectType {
    dev: string;
    projects: Project[];
}
