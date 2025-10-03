import { useEffect } from "react";

export function useSlideEffect({
  side = "right",
  delayMax = 100,
  delayMin = 100,
  rootMargin = "0px 0px 20% 0px",
  threshold = 0.1,
}) {
  useEffect(() => {
    const elements = document.querySelectorAll(`.slide-in-${side}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const randomDelay = Math.random() * (delayMax - delayMin) + 100;
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, randomDelay);
          }
        });
      },
      { rootMargin: rootMargin, threshold: threshold }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// .slide-in-right {
//   opacity: 0;
//   transform: translateX(100px);
//   transition: opacity 0.6s ease-out, transform 0.6s ease-out;
// }

// .slide-in-right.visible {
//   opacity: 1;
//   transform: translateX(0);
// }
