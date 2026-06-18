<template>
  <header class="header">
    <div class="p-d-flex p-flex-column p-jc-around p-ai-center">
      <img class="selfie" :src="require('@/assets/alejandro.png')" />
      <h2 class="subTitle">
        <span class="software-developer">Software Engineer</span>
      </h2>
      <h1 class="title">
        <span class="curly-brackets">{</span>
        Alejandro Conde Gómez
        <span class="curly-brackets">}</span>
      </h1>
      <h3 class="github" v-if="repositoriesStore.finished && repositoriesStore.link">
        <div class="date-and-link">
          <div>
            Last activity:
            <span class="custom-date">{{ repositoriesStore.date }}</span>
          </div>
          <div>
            Commit:
            <a class="custom-link" :href="repositoriesStore.link" target="_blank">Link</a>
          </div>
        </div>
        <div class="custom-message-container">
          Message:
          <span class="custom-message">{{ repositoriesStore.message }}</span>
        </div>
      </h3>
      <div v-else class="github">
        <Skeleton width="15rem" class="p-mb-1" />
        <Skeleton width="20rem" class="p-mb-1" />
        <Skeleton width="20rem" />
      </div>
      <div class="social">
        <a
          href="https://github.com/mezdelex"
          :class="`${Icons.GitHub} socialLink p-mr-2`"
          target="_blank"
        />
        <a
          href="https://reddit.com/user/Mezdelex"
          :class="`${Icons.Reddit} socialLink p-mr-2`"
          target="_blank"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import gitHubService from '@/services/github/gitHubService';
import repositoriesStore from '@/shared/repositoriesStore';
import { Icons } from '@/enums/enums';
import { onMounted } from 'vue';

onMounted(async () => {
  if (repositoriesStore.link === '') {
    await gitHubService.getRepos();
    gitHubService.getUpdatedRepo();
    await gitHubService.getLastCommit();
    repositoriesStore.finished = true;
  }
});
</script>

<style scoped>
.header {
  animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  margin-bottom: 2rem;
  padding-top: 1rem;
  position: relative;
}

.header::after {
  background: linear-gradient(90deg, transparent, var(--border), transparent);
  bottom: -1rem;
  content: '';
  height: 1px;
  left: 50%;
  max-width: 300px;
  position: absolute;
  transform: translateX(-50%);
  width: 60%;
}

.selfie {
  border-radius: var(--radius-md);
  border: 3px solid var(--border);
  display: block;
  height: auto;
  margin: 2rem auto 1rem;
  max-height: 200px;
  max-width: 200px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: auto;
}

.selfie:hover {
  border-color: var(--accent);
}

.social {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.socialLink {
  color: var(--text-secondary);
  font-size: 2.2rem;
  line-height: 1;
  transition: color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.socialLink:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

.software-developer {
  background: linear-gradient(135deg, var(--accent), var(--accent-warm));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.subTitle {
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0 0 0.25rem;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.title {
  color: var(--text-primary);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 0;
}

.curly-brackets {
  color: var(--accent-warm);
  font-weight: 300;
}

.github {
  align-items: center;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 1.25rem auto 0.5rem;
  max-width: 24rem;
  text-align: center;
}

.custom-date {
  color: #7fbbb3;
  font-weight: 600;
  margin-right: 0.5rem;
}

.custom-link {
  color: var(--accent);
}

.custom-message {
  color: #7fbbb3;
}

.custom-message-container {
  margin-top: 0.25rem;
  text-align: center;
}

.date-and-link {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
