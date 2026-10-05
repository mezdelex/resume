import ICommit from '@/models/ICommit';
import IRepository from '@/models/IRepository';
import gitHubService from '@/services/github/gitHubService';
import { computed, reactive, ref, watch } from 'vue';

const repos = ref<IRepository[]>([]);
const commit = ref<ICommit | null>(null);

const repo = computed(
  () =>
    repos.value.reduce<IRepository | undefined>(
      (latest, next) => (!latest || next.pushed_at > latest.pushed_at ? next : latest),
      undefined
    )?.name ?? ''
);

const lastCommit = computed(() =>
  commit.value && repo.value
    ? {
        date: commit.value.commit.author.date.substring(0, 10),
        message: commit.value.commit.message,
        link: `https://github.com/mezdelex/${repo.value}/commit/${commit.value.sha}`,
      }
    : null
);

watch(
  repo,
  name => {
    if (name)
      gitHubService
        .getLastCommit(name)
        .then(data => (commit.value = data))
        .catch(console.log);
  },
  { immediate: true }
);

gitHubService
  .getRepos()
  .then(data => (repos.value = data))
  .catch(console.log);

export default reactive({ repos, lastCommit });
