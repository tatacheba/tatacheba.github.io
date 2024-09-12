export interface ProjectType {
    dev: string;
    projects: Projects[];
}

export interface Projects {
    title: string;
    text: string;
    toroute: string;
}
