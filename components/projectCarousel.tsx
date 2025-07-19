'use client';
import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Play, Pause } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './projectCard';
import { Repository } from '../lib/interfaces';

interface ProjectCarouselProps {
  repos: Repository[];
}

export function ProjectCarousel({ repos }: ProjectCarouselProps) {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnFocusIn: true,
    })
  );

  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    if (isPlaying) {
      autoplay.current.stop();
    } else {
      autoplay.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-md">
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => isPlaying && autoplay.current.play()}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {repos.map((repo: Repository) => (
              <CarouselItem
                key={repo.name}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full">
                  <ProjectCard
                    name={repo.name}
                    html_url={repo.html_url}
                    description={repo.description}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation */}
          <CarouselPrevious className="border-border/50 bg-card/70 backdrop-blur-md hover:bg-card transition-colors duration-200 rounded-full" />
          <CarouselNext className="border-border/50 bg-card/70 backdrop-blur-md hover:bg-card transition-colors duration-200 rounded-full" />
        </Carousel>

        {/* Play/Pause Button */}
        <div className="flex justify-center mt-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleAutoplay}
            className="rounded-xl bg-card/70 backdrop-blur-sm border border-border/50 hover:bg-card transition-all duration-200 shadow-sm"
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Play
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {repos.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
