import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (typeof onClick !== "function") return;
    if (element) {
      element.addEventListener("click", onClick);
    }
    return () => {
      element.removeEventListener("click", onClick);
    };
  }, []);

  return typeof onClick === "function" ? ref : undefined;
};
