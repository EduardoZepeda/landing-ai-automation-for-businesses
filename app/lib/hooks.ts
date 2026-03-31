// ─── Intersection-observer hook ───────────────────────────────────────────────
import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const obs = new IntersectionObserver(
      ([e]) => { 
        // Only trigger once, not on initial intersection
        if (e.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setInView(true);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}
