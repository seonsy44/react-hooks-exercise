export const useConfirm = (message = "Are you sure?", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") return;
  if (typeof onCancel !== "function") return;

  const confirmAction = () => {
    confirm(message) ? onConfirm() : onCancel();
    if (confirm(message)) {
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
