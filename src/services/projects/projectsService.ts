import IProject from '@/models/IProject';
import IRepository from '@/models/IRepository';
import projectsData from '@/data/projectsData';
import repositoriesStore from '@/shared/repositoriesStore';

export default {
  sortProjects: (): IProject[] => {
    const dates = new Map<string, string>(
      repositoriesStore.repos.map(({ name, pushed_at }: IRepository) => [name, pushed_at])
    );
    return projectsData
      .map(project => ({ ...project, pushed_at: dates.get(project.id) ?? project.pushed_at }))
      .sort((previous, next) => next.pushed_at.localeCompare(previous.pushed_at));
  },
};
