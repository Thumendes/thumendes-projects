"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode[];
}

export function Carousel({ children }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true, containScroll: "trimSnaps" }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {children.map((child, id) => (
          <div className="min-w-fit w-full flex items-center justify-center" style={{ flex: "0 0 20%" }} key={id}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
