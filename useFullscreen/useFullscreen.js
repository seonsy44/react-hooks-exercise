import { useRef } from "react";

export const useFullscreen = (callback) => {
  const ref = useRef();
  const runCallback = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    const element = ref.current;
    if (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      runCallback(true);
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozRequestFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitRequestFullscreen();
    } else if (document.msExitFullscreen) {
      document.msRequestFullscreen();
    }
    runCallback(false);
  };

  return { ref, triggerFull, exitFull };
};
