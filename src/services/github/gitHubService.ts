import ICommit from '@/models/ICommit';
import IRepository from '@/models/IRepository';

export default {
  getRepos: (): Promise<IRepository[]> =>
    fetch('https://api.github.com/users/mezdelex/repos?per_page=100').then(response =>
      response.json()
    ),
  getLastCommit: (repo: string): Promise<ICommit | null> =>
    fetch(`https://api.github.com/repos/mezdelex/${repo}/commits`)
      .then(response => response.json())
      .then((data: ICommit[]) => data[0] ?? null),
};
