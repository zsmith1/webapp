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
      <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8 shadow-lg hover:shadow-xl hover:bg-card/40 transition-all duration-500 hover:-translate-y-1">
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
          
          {/* Enhanced Navigation */}
          <CarouselPrevious className="border-border/50 bg-card/50 backdrop-blur-md hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 hover:scale-110 transition-all duration-300 rounded-full shadow-lg" />
          <CarouselNext className="border-border/50 bg-card/50 backdrop-blur-md hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 hover:scale-110 transition-all duration-300 rounded-full shadow-lg" />
        </Carousel>

        {/* Enhanced Play/Pause Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleAutoplay}
            className="group rounded-2xl bg-gradient-to-r from-card/70 to-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/30 hover:shadow-lg hover:scale-105 transition-all duration-300 px-6 py-3 text-sm font-medium"
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                <span className="group-hover:text-foreground transition-colors duration-300">Pause</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                <span className="group-hover:text-foreground transition-colors duration-300">Play</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Enhanced Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {repos.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full bg-muted-foreground/20 border border-border/30 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-500/50 hover:scale-125 transition-all duration-300 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}