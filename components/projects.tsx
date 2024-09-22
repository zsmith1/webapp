import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { fetchAllRepos } from '../lib/github'
import { ProjectCard } from './projectCard';
import { Repository } from '../lib/interfaces'

export async function ProjectCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const repos = await fetchAllRepos('zsmith1')

  return (
    <Carousel
      withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slidesToScroll={1}
    >
      {repos.data.map((repo: Repository) => {
        return (
          <Carousel.Slide key={repo.name}>
            <ProjectCard name={repo.name} html_url={repo.html_url} description={repo.description} />
          </Carousel.Slide>
        )})}
    </Carousel>
  );
}