<template>
  <main class="p-grid">
    <Card
      v-if="repositoriesStore.finished"
      class="p-mb-auto p-mt-5 p-mx-auto"
      v-for="project in projectsStore.projects"
      :key="project.name"
    >
      <template #header>
        <span class="last-update">
          Last update:
          <i :class="`${Icons.Cloud} text-small`"></i>
          {{ getLastUpdate(project) }}
        </span>
        <a :href="project.app" target="_">
          <img
            class="cardHover img-field"
            :src="project.image"
            :alt="project.name"
          />
        </a>
      </template>
      <template #title>
        {{ project.name }}
      </template>
      <template #content>
        <div class="description-field">
          {{ project.description }}
        </div>
      </template>
      <template #footer v-if="project.repo">
        <div class="p-d-flex p-flex-row p-jc-around p-ai-end">
          <a :href="project.repo" target="_">
            <div class="linkHover">
              <i :class="Icons.GitHub"></i>
              Repo
            </div>
          </a>
          <a :href="project.app" :alt="project.app" target="_">
            <div class="linkHover">
              <i :class="Icons.Link"></i>
              Link
            </div>
          </a>
        </div>
      </template>
    </Card>
    <div
      v-else
      class="p-col"
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
      "
    >
      <div class="dot-spin" />
    </div>
  </main>
</template>

<script setup lang="ts">
import IProject from "@/models/IProject";
import projectsService from "@/services/projects/projectsService";
import projectsStore from "@/shared/projectsStore";
import repositoriesStore from "@/shared/repositoriesStore";
import { Icons } from "@/enums/enums";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
  parseISO,
} from "date-fns";
import { watchEffect } from "vue";

const getLastUpdate = (project: IProject): string => {
  if (!project.pushed_at.length) {
    return "Unknown";
  }

  const now = new Date();
  const parsed = parseISO(project.pushed_at);
  const hoursDiff = differenceInHours(now, parsed);

  return differenceInDays(now, parsed) < 1
    ? hoursDiff < 1
      ? `${differenceInMinutes(now, parsed)} minute(s) ago`
      : `${hoursDiff} hour(s) ago`
    : format(parsed, "yyyy-MM-dd");
};

watchEffect(() => projectsService.sortProjects());
</script>
