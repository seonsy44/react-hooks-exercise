import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  const ref = useRef();

  if (typeof duration !== "number") return;
  if (typeof delay !== "number") return;

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.style.transition = `opacity ${duration}s ${delay}s`;
      element.style.opacity = 1;
    }
  });

  return { ref, style: { opacity: 0 } };
};
