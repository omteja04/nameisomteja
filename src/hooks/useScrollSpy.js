import { useState, useEffect, useRef } from "react";

/**
 * useScrollSpy — tracks which section is currently active based on scroll position.
 * Uses IntersectionObserver for performance (runs off the main thread).
 *
 * @param {string[]} sectionIds  - Array of element IDs to observe
 * @param {boolean}  enabled     - When false (e.g. on /blogs), observer is disconnected
 *                                 and activeId resets to null immediately.
 * @returns {string|null}        - The ID of the currently active section, or null
 */
export function useScrollSpy(sectionIds, enabled) {
    const [activeId, setActiveId] = useState(null);
    // Keep a map of { id → intersectionRatio } so we always highlight the most-visible one
    const ratioMap = useRef({});

    useEffect(() => {
        // When disabled (non-homepage route), immediately clear the active section.
        if (!enabled) {
            setActiveId(null);
            return;
        }

        // rootMargin fires when the section is roughly centred in the viewport.
        // -30% top means we need 30% of the screen scrolled past the section top,
        // -40% bottom means the section bottom is still 40% away from the viewport bottom.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    ratioMap.current[entry.target.id] = entry.intersectionRatio;
                });

                // Pick the section with the highest visible ratio
                let bestId = null;
                let bestRatio = 0;
                sectionIds.forEach((id) => {
                    const ratio = ratioMap.current[id] ?? 0;
                    if (ratio > bestRatio) {
                        bestRatio = ratio;
                        bestId = id;
                    }
                });

                // Only update if we have a meaningful intersection (>5%)
                if (bestRatio > 0.05) {
                    setActiveId(bestId);
                }
            },
            {
                rootMargin: "-30% 0px -40% 0px",
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds, enabled]);

    return activeId;
}
