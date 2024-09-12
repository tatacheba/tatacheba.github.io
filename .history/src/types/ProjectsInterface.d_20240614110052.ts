export interface Project {
    dev: string;
    projects: Projects[];
}

export interface Projects {
    title: string;
    text: string;
    toroute: string;
}
