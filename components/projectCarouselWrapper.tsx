import { fetchAllRepos } from '../lib/github';
import { ProjectCarousel } from './projectCarousel';

export async function ProjectCarouselWrapper() {
  const repos = await fetchAllRepos('zsmith1');
  
  return <ProjectCarousel repos={repos.data} />;
}