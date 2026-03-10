const STORAGE_KEY = 'shadev_projects';

export const getProjects = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveProject = (project) => {
    const projects = getProjects();
    const index = projects.findIndex((p) => p.id === project.id);

    if (index > -1) {
        projects[index] = project;
    } else {
        projects.push({ ...project, id: crypto.randomUUID() });
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

export const deleteProject = (id) => {
    const projects = getProjects();
    const filtered = projects.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
