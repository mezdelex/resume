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
      <h3
        class="github"
        v-if="repositoriesStore.finished && repositoriesStore.link"
      >
        <div class="date-and-link">
          <div>
            Last activity:
            <span class="custom-date">{{ repositoriesStore.date }}</span>
          </div>
          <div>
            Commit:
            <a
              class="custom-link"
              :href="repositoriesStore.link"
              target="_blank"
              >Link</a
            >
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
import gitHubService from "@/services/github/gitHubService";
import repositoriesStore from "@/shared/repositoriesStore";
import { Icons } from "@/enums/enums";
import { onMounted } from "vue";

onMounted(async () => {
  if (repositoriesStore.link === "") {
    await gitHubService.getRepos();
    gitHubService.getUpdatedRepo();
    await gitHubService.getLastCommit();
    repositoriesStore.finished = true;
  }
});
</script>
