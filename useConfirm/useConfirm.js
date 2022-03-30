export const useConfirm = (message = "Are you sure?", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") return;
  if (typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      try {
        onCancel();
      } catch (error) {
        return;
      }
    }
  };

  return confirmAction;
};
