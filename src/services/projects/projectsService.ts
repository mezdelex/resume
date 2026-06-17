import projectsData from '@/data/projectsData';
import projectsStore from '@/shared/projectsStore';
import repositoriesStore from '@/shared/repositoriesStore';
import IProjectsService from './IProjectsService';

export default {
  sortProjects: () => {
    if (repositoriesStore.repos.length)
      projectsStore.projects = projectsData
        .map(project =>
          project.id !== ''
            ? {
                ...project,
                pushed_at: repositoriesStore.repos.find(repo => repo.name === project.id)!
                  .pushed_at,
              }
            : project
        )
        .sort((previous, next) => (next.pushed_at ?? '').localeCompare(previous.pushed_at ?? ''));
    else projectsStore.projects = projectsData;
  },
} as IProjectsService;
