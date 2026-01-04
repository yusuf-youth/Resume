import { useEffect, useState } from "react";

const useActiveSection = (navItems, threshold = 0.6) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el) => el !== null);

    if (sectionElements.length === 0) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionElements.findIndex((el) => el === entry.target);

          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    });

    sectionElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [JSON.stringify(navItems), threshold]);

  return activeIndex;
};

export default useActiveSection;
