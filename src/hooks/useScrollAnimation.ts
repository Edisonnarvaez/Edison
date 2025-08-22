import { useEffect, useRef, useState } from 'react';

// Hook genérico que acepta cualquier tipo de elemento HTML
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.1
) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: dejar de observar después de que sea visible
          // observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

// Hooks específicos para elementos comunes
export const useScrollAnimationDiv = () => useScrollAnimation<HTMLDivElement>();
export const useScrollAnimationHeading = () => useScrollAnimation<HTMLHeadingElement>();
export const useScrollAnimationSection = () => useScrollAnimation<HTMLElement>();

export default useScrollAnimation;