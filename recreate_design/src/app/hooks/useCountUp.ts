import { useEffect, useRef, useState, type RefObject } from 'react';

type CountUpOptions = {
  duration?: number;
  suffix?: string;
  enabled?: boolean;
  triggerRef?: RefObject<HTMLElement | null>;
};

export function useCountUp(target: number, options?: CountUpOptions) {
  const { duration = 800, suffix = '', enabled = true, triggerRef } = options ?? {};
  const [value, setValue] = useState(0);
  const internalRef = useRef<HTMLElement>(null);
  const ref = triggerRef ?? internalRef;
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!enabled) {
      setValue(target);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        if (prefersReducedMotion) {
          setValue(target);
          return;
        }

        const start = performance.now();
        const animate = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - t) ** 3;
          setValue(Math.round(eased * target));
          if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, enabled, ref]);

  return { ref: internalRef, display: `${value}${suffix}`, value };
}
