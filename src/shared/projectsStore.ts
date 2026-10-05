import { computed, reactive } from 'vue';
import projectsService from '@/services/projects/projectsService';

export default reactive({
  projects: computed(() => projectsService.sortProjects()),
});
