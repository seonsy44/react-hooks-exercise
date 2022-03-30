import { useEffect, useRef } from "react";

export const useHover = (onHover) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (typeof onHover !== "function") return;
    if (element) {
      element.addEventListener("mouseenter", onHover);
    }
    return () => {
      element.removeEventListener("mouseenter", onHover);
    };
  }, []);

  return typeof onHover === "function" ? ref : undefined;
};
