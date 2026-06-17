<template>
  <main v-if="repositoriesStore.finished" class="p-grid">
    <Card
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
        <a :href="project.app" target="_" class="card-image-link">
          <img class="img-field" :src="project.image" :alt="project.name" />
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
  </main>
  <div v-else class="spinner-wrapper">
    <div class="dot-spin" />
  </div>
</template>

<script setup lang="ts">
import IProject from '@/models/IProject';
import projectsService from '@/services/projects/projectsService';
import projectsStore from '@/shared/projectsStore';
import repositoriesStore from '@/shared/repositoriesStore';
import { Icons } from '@/enums/enums';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
  parseISO,
} from 'date-fns';
import { watchEffect } from 'vue';

const getLastUpdate = (project: IProject): string => {
  if (!project.pushed_at.length) {
    return 'Unknown';
  }

  const now = new Date();
  const parsed = parseISO(project.pushed_at);
  const hoursDiff = differenceInHours(now, parsed);

  return differenceInDays(now, parsed) < 1
    ? hoursDiff < 1
      ? `${differenceInMinutes(now, parsed)} minute(s) ago`
      : `${hoursDiff} hour(s) ago`
    : format(parsed, 'yyyy-MM-dd');
};

watchEffect(() => projectsService.sortProjects());
</script>

<style scoped>
main {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.p-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(22rem, 100%), 1fr));
  justify-items: center;
  margin: 0;
  padding: 0.5rem 0.25rem;
}

.p-grid :deep(.p-card) {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  height: 40rem;
  max-width: 23rem;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease,
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
}

.p-grid :deep(.p-card):hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
}

.p-grid :deep(.p-card-body) {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  padding: 0;
}

.p-grid :deep(.p-card-title) {
  background: rgba(167, 192, 128, 0.08);
  color: var(--accent);
  flex-shrink: 0;
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.75rem 1.25rem;
  text-align: center;
  letter-spacing: -0.01em;
}

.p-grid :deep(.p-card-content) {
  color: var(--text-secondary);
  flex: 1;
  margin-inline: 1.25rem;
  min-height: 0;
  overflow: hidden;
  padding: 0.5rem 0 1.25rem;
}

.p-grid :deep(.p-card-footer) {
  flex-shrink: 0;
  padding: 1.5rem;
}

.card-image-link {
  background: var(--bg-secondary);
  display: block;
  height: 14rem;
}

.img-field {
  display: block;
  height: 100%;
  object-fit: fill;
  width: 100%;
}

.last-update {
  color: var(--text-muted);
  display: block;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.5rem 1rem 0.25rem;
}

.description-field {
  line-height: 1.6;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.linkHover {
  color: var(--accent);
  transition: color 0.2s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.linkHover:hover {
  color: var(--accent-hover);
  transform: translateY(-2px);
}

.text-small {
  font-size: 0.65rem;
  margin-inline: 0.1rem;
  vertical-align: middle;
}

.dot-spin {
  animation: dot-spin 1s infinite linear;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 -18px 0 0 var(--accent), 12.727926px -12.727926px 0 0 var(--accent),
    18px 0 0 0 var(--accent), 12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0);
  color: transparent;
  height: 10px;
  display: flex;
  width: 10px;
}

@keyframes dot-spin {
  0%,
  100% {
    box-shadow: 0 -18px 0 0 var(--accent), 12.727926px -12.727926px 0 0 var(--accent),
      18px 0 0 0 var(--accent), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  12.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 0 var(--accent),
      18px 0 0 0 var(--accent), 12.727926px 12.727926px 0 0 var(--accent),
      0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  25% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 var(--accent),
      12.727926px 12.727926px 0 0 var(--accent), 0 18px 0 0 var(--accent),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  37.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 0 var(--accent), 0 18px 0 0 var(--accent),
      -12.727926px 12.727926px 0 0 var(--accent), -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  50% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 var(--accent),
      -12.727926px 12.727926px 0 0 var(--accent), -18px 0 0 0 var(--accent),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  62.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 0 var(--accent), -18px 0 0 0 var(--accent),
      -12.727926px -12.727926px 0 0 var(--accent);
  }

  75% {
    box-shadow: 0 -18px 0 0 var(--accent), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 0 var(--accent), -12.727926px -12.727926px 0 0 var(--accent);
  }

  87.5% {
    box-shadow: 0 -18px 0 0 var(--accent), 12.727926px -12.727926px 0 0 var(--accent),
      18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 var(--accent);
  }
}

.spinner-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 30vh;
  width: 100%;
}
</style>
