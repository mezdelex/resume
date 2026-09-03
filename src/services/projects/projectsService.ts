import IProjectsService from './IProjectsService';
import IRepository from '@/models/IRepository';
import projectsData from '@/data/projectsData';
import projectsStore from '@/shared/projectsStore';
import repositoriesStore from '@/shared/repositoriesStore';

export default {
  sortProjects: () => {
    if (repositoriesStore.repos.length)
      projectsStore.projects = projectsData
        .map(project =>
          project.id !== ''
            ? {
                ...project,
                pushed_at: repositoriesStore.repos.find(
                  (repo: IRepository) => repo.name === project.id
                )!.pushed_at,
              }
            : project
        )
        .sort((previous, next) => (next.pushed_at ?? '').localeCompare(previous.pushed_at ?? ''));
    else projectsStore.projects = projectsData;
  },
} as IProjectsService;
