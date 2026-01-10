import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const defaultConfig = { duration: 1000, once: true };

const useAOS = (config = defaultConfig) => {
  useEffect(() => {
    AOS.init(config);
    AOS.refresh();
  }, [config.duration, config.once]);
};

export default useAOS;
