import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (config = { duration: 1000, once: true }) => {
  useEffect(() => {
    AOS.init(config);
    AOS.refresh();
  }, [config.duration, config.once]);
};

export default useAOS;