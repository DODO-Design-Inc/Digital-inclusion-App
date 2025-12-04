"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SnapResistSection({ children }) {
  const ref = useRef(null);
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const isResisting = useRef(false);
  const lastScrollY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let accumulatedResistance = 0;

    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Check if section is entering viewport (top or bottom)
        const isEnteringFromTop = rect.top < viewportHeight && rect.top > 0 && rect.top < viewportHeight * 0.8;
        const isEnteringFromBottom = rect.bottom > 0 && rect.bottom < viewportHeight && rect.bottom > viewportHeight * 0.2;
        const isInViewport = rect.top < viewportHeight && rect.bottom > 0;

        if (isInViewport && (isEnteringFromTop || isEnteringFromBottom)) {
          // Calculate scroll direction and delta
          const scrollDirection = currentScrollY > lastScrollY.current ? 1 : -1;
          const delta = Math.abs(currentScrollY - lastScrollY.current);
          
          // Calculate resistance strength based on entry progress
          let resistanceStrength = 0;
          if (isEnteringFromTop) {
            // Entering from top: resistance is strongest at the beginning
            const entryProgress = Math.min(1, (viewportHeight - rect.top) / (viewportHeight * 0.8));
            resistanceStrength = (1 - entryProgress) * 0.2; // Max 20% resistance, decreases as we enter
          } else if (isEnteringFromBottom) {
            // Entering from bottom: resistance is strongest at the beginning
            const entryProgress = Math.min(1, rect.bottom / (viewportHeight * 0.8));
            resistanceStrength = (1 - entryProgress) * 0.2; // Max 20% resistance, decreases as we enter
          }

          // Accumulate resistance based on scroll delta
          accumulatedResistance += delta * resistanceStrength * scrollDirection;
          
          // Apply resistance in opposite direction of scroll (clamp to prevent excessive movement)
          const maxResistance = 50; // pixels
          accumulatedResistance = Math.max(-maxResistance, Math.min(maxResistance, accumulatedResistance));
          y.set(-accumulatedResistance);
          isResisting.current = true;
        } else {
          // Section fully in view or out of view - smoothly return to neutral
          if (isResisting.current) {
            accumulatedResistance *= 0.9; // Decay resistance
            if (Math.abs(accumulatedResistance) < 0.5) {
              accumulatedResistance = 0;
              isResisting.current = false;
            }
            y.set(-accumulatedResistance);
          }
        }

        lastScrollY.current = currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [y]);

  return (
    <motion.section 
      ref={ref} 
      style={{ y: springY }}
      className="snap_section w-full"
    >
      {children}
    </motion.section>
  );
}
