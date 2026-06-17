import IProject from '@/models/IProject';
import { reactive } from 'vue';

export default reactive({
  projects: reactive<IProject[]>([]),
});
