import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Add animation class after paint so elements start visible then animate on scroll
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((el) => {
      el.classList.add('will-animate');
    });

    // Immediately reveal above-fold elements
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });

    // Scroll reveal observer
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07 }
    );

    reveals.forEach((el) => {
      obs.observe(el);
    });

    return () => {
      obs.disconnect();
    };
  }, []);
}
